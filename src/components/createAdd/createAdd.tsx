"use client";

import { AutoComplete, Button, CheckBox, ImageUpload } from "@/components";
import { IImage } from "@/components/imageUpload/imageUpload";
import styles from "./styles.module.scss";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { sectionOneItems, sectionTwoItems } from "./staticContent";
import { useCreateForm } from "./hooks/useCreateForm";
import { useEditor } from "./hooks/useEditor";
import { useFormImages } from "./hooks/useFormImages";
import { useInputs } from "./hooks/useInputs";
import { InputBlock } from "./inputBlocks";
import { locations } from "@/services/locations";
import { IOption } from "../autoComplete/autoComplete";
import { TType } from "../input/input";

export const CreateAddUI = () => {
  const { images, setImages, removeImage } = useFormImages();

  const {
    inputs,
    handleInput,
    handleCheckBoxes,
    amenities,
    setLocation,
    location,
  } = useInputs();
  const { editorState, onEditorStateChange } = useEditor();

  const { handleCreateProperty, loading } = useCreateForm();

  function handleSubmit() {
    handleCreateProperty(
      inputs,
      amenities,
      images,
      editorState.getCurrentContent().getPlainText(),
      location?.id as number
    );
  }

  return (
    <div className={styles.container} data-testid={"create-add"}>
      <h1> Creating an add</h1>
      <div className={styles.imageUploadArea}>
        <ImageUpload
          onChangeImage={(image: IImage | undefined) => {
            return setImages([...(images as IImage[]), image as IImage]);
          }}
          removeImage={removeImage}
          selectedImages={images}
        />
      </div>
      <AutoComplete
        label="Location"
        placeholder="Type a city name"
        options={locations}
        setSelected={(option: IOption) => setLocation(option)}
        selectedOption={location}
      />
      {sectionOneItems.map((item) => (
        <InputBlock
          value={inputs[item.name]}
          key={item.name}
          title={item.title}
          helper={item.helper}
          placeHolder={item.placeHolder}
          name={item.name}
          type={item.type as "text" | "number"}
          handler={handleInput}
          inputType={item.inputType as TType}
        />
      ))}
      <div className={styles.amenities}>
        {Object.keys(amenities).map((amenity) => {
          return (
            <CheckBox
              key={amenity}
              label={amenity}
              isChecked={amenities[amenity as keyof typeof amenities]}
              onChange={handleCheckBoxes}
              name={amenity}
            />
          );
        })}
      </div>
      {sectionTwoItems.map((item) => (
        <InputBlock
          type={item.type as "text" | "number"}
          key={item.name}
          title={item.title}
          helper={item.helper}
          placeHolder={item.placeHolder}
          name={item.name}
          handler={(name: string, value: string | number) =>
            handleInput(name, value)
          }
          inputType={item.inputType as TType}
        />
      ))}
      <div className={styles.propertyDescription}>
        <span>Property Description</span>
        <div className={styles.editorContainer}>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      </div>

      <div className={styles.createbtn}>
        <Button
          loading={loading}
          testId="submit-button"
          variant="primary"
          title="Create"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateAddUI;
