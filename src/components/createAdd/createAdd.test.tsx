import { describe } from 'node:test';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { CreateAddUI } from './createAdd';
import { IImage } from '../imageUpload/imageUpload';
import * as inputhooks from './hooks/useInputs';
import * as imagehooks from './hooks/useFormImages';
import * as formhooks from './hooks/useCreateForm';

global.URL.createObjectURL = jest.fn();

describe('Testing CreateAdd', () => {
  it('should render the create add form', () => {
    render(<CreateAddUI />);

    expect(screen.getAllByTestId('create-add')).toBeTruthy();
  });

  it('Should let users add images', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const setImages = jest.fn();
    const images: IImage[] = [];

    jest.spyOn(imagehooks, 'useFormImages').mockImplementationOnce(() => ({
      setImages,
      images,
      removeImage: jest.fn()
    }));

    render(<CreateAddUI />);

    let imageUpload = screen.getByTestId('image-upload-input');
    await waitFor(() =>
      fireEvent.change(imageUpload, {
        target: { files: [file] }
      })
    );

    expect(setImages).toHaveBeenCalledWith(
      expect.arrayContaining([{ file: file }])
    );
  });

  it('Should let users add title', async () => {
    // Mock useInputs hook
    const handleInput = jest.fn();
    jest.spyOn(inputhooks, 'useInputs').mockImplementationOnce(() => ({
      inputs: {},
      handleInput,
      handleCheckBoxes: (key: string, change: boolean) => {},
      amenities: {}
    }));

    // Render the component
    render(<CreateAddUI />);

    // Find the title input field
    const titleInput = screen.getByTestId('input-block-input-title');

    // Simulate typing into the input field
    fireEvent.change(titleInput, { target: { value: 'hello' } });

    // // Expect handleInput to have been called with the typed value
    expect(handleInput).toHaveBeenCalledWith('title', 'hello', 'text');

    // Expect the input field value to be updated
    expect(titleInput.value).toBe('hello');
  });

  it('Should let users to add amenities', async () => {
    // Mock useInputs hook
    const handleCheckBoxes = jest.fn();

    jest.spyOn(inputhooks, 'useInputs').mockImplementationOnce(() => ({
      inputs: {},
      handleCheckBoxes,
      amenities: {}
    }));

    // Render the component
    render(<CreateAddUI />);

    // Find the furnished checkbox
    const furnished = screen.getByTestId('furnished-checkbox');

    // Simulate clicking the checkbox
    fireEvent.click(furnished);

    // Expect handleCheckBoxes to have been called with the appropriate arguments
    expect(handleCheckBoxes).toHaveBeenCalledWith('furnished', true);
  });

  it('Should be able to submit the form with correct values', async () => {
    // Mock useInputs hook

    const handleCheckBoxes = jest.fn();
    jest.spyOn(inputhooks, 'useInputs').mockImplementationOnce(() => ({
      inputs: {
        title: 'hello',
        description: 'hello',
        numberOfBedrooms: 2,
        rentAmount: 100,
        numberOfBathrooms: 2,
        floorArea: 100
      },
      handleCheckBoxes,
      amenities: {
        pool: true
      }
    }));

    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const images: IImage[] = [
      {
        file: file,
        url: 'imageUrl'
      }
    ];
    const setImages = jest.fn();
    jest.spyOn(imagehooks, 'useFormImages').mockImplementationOnce(() => ({
      setImages,
      images,
      removeImage: jest.fn()
    }));
    const handleCreateProperty = jest.fn();
    jest.spyOn(formhooks, 'useCreateForm').mockImplementationOnce(() => ({
      handleCreateProperty,
      loading: false
    }));

    // Render the component
    render(<CreateAddUI />);

    // Find the submit button
    const submit = screen.getByTestId('submit-button');

    // Simulate clicking the checkbox
    fireEvent.click(submit);

    expect(handleCreateProperty).toHaveBeenCalledWith(
      {
        title: 'hello',
        description: 'hello',
        numberOfBedrooms: 2,
        rentAmount: 100,
        numberOfBathrooms: 2,
        floorArea: 100
      },
      {
        pool: true
      },
      images,
      ''
    );
  });
});
