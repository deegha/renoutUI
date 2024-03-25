import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AutoComplete as AutoCompleteUI, IOption } from './autoComplete';

const options: IOption[] = [
  { name: 'hello', id: '1' },
  { name: 'world', id: '2' },
  { name: 'some word', id: '3' },
  { name: 'Maxpain', id: '4' }
];

const setSelected = jest.fn();
const selectedOption: IOption = { name: 'hello', id: '1' };

describe.only('Testing AutoComplete', () => {
  it('should render the AutoComplete component', () => {
    render(
      <AutoCompleteUI
        options={options}
        selectedOption={selectedOption}
        setSelected={setSelected}
        testId="test"
      />
    );
    expect(screen.getAllByTestId('auto-complete-test')).toBeTruthy();
  });

  it('Should show a loading state if the provided loading prop is true', () => {
    render(
      <AutoCompleteUI
        options={options}
        selectedOption={selectedOption}
        setSelected={setSelected}
        testId="test"
        loading
      />
    );

    expect(screen.getByTestId('auto-complete-test-loading')).toBeTruthy();
  });

  it('Should show a label if label is provided', () => {
    render(
      <AutoCompleteUI
        options={options}
        selectedOption={selectedOption}
        setSelected={setSelected}
        testId="test"
        label="test"
      />
    );

    expect(screen.getByTestId('auto-complete-test-label')).toBeTruthy();
  });

  it('Should show a placeholder if placeholder is provided', () => {
    render(
      <AutoCompleteUI
        options={options}
        selectedOption={selectedOption}
        setSelected={setSelected}
        testId="test"
        placeholder="test"
      />
    );

    expect(screen.getByPlaceholderText('test')).toBeTruthy();
  });

  it('Should show the options when the user types', async () => {
    render(
      <AutoCompleteUI
        options={options}
        selectedOption={selectedOption}
        setSelected={setSelected}
        testId="test"
      />
    );

    const input = screen.getByTestId('auto-complete-test-input');

    fireEvent.change(input, { target: { value: 'h' } });

    await waitFor(() => {
      expect(screen.getByText('hello')).toBeTruthy();
    });
  });

  //shuld test if the options are being selected when the user clicks on them

  it('should select the corrrect option when the user clicks on it', async () => {
    render(
      <AutoCompleteUI
        options={options}
        selectedOption={selectedOption}
        setSelected={setSelected}
        testId="test"
      />
    );

    const input = screen.getByTestId('auto-complete-test-input');

    fireEvent.change(input, { target: { value: 'h' } });

    await waitFor(() => {
      expect(screen.getByText('hello')).toBeTruthy();
    });

    fireEvent.click(screen.getByText('hello'));

    expect(setSelected).toHaveBeenCalledWith({ name: 'hello', id: '1' });
  });

  //should test if the options are being selected when the user presses enter
  it('Should select the correct option when the user press enter', async () => {
    render(
      <AutoCompleteUI
        options={options}
        selectedOption={selectedOption}
        setSelected={setSelected}
        testId="test"
      />
    );

    const input = screen.getByTestId('auto-complete-test-input');

    fireEvent.change(input, { target: { value: 'h' } });

    await waitFor(() => {
      expect(screen.getByText('hello')).toBeTruthy();
    });

    fireEvent.keyDown(input, { key: 'Enter' });

    expect(setSelected).toHaveBeenCalledWith({ name: 'hello', id: '1' });
  });

  it('Should show the green tick mark when the option is selected', async () => {
    render(
      <AutoCompleteUI
        options={options}
        selectedOption={selectedOption}
        setSelected={setSelected}
        testId="test"
      />
    );

    const input = screen.getByTestId('auto-complete-test-input');

    fireEvent.change(input, { target: { value: 'h' } });

    await waitFor(() => {
      expect(screen.getByText('hello')).toBeTruthy();
    });

    fireEvent.click(screen.getByText('hello'));
    console.log('=====================================');

    // fireEvent.click(screen.getByTestId("auto-complete-test-down-arrow"));
    fireEvent.change(input, { target: { value: 'h' } });

    await waitFor(() => {
      expect(screen.getByTestId('auto-complete-test-check-mark')).toBeTruthy();
    });
  });
});
