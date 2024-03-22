"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { faCamera, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAlert from "@/hooks/useAlert";
import { memo } from "react";

export interface IImage {
  url: string;
  file: File;
}

export interface IProps {
  onChangeImage: (image: IImage) => void;
  selectedImages: IImage[];
  removeImage?: (index: number) => void;
}

export const ImageUpload = memo(function ImageUpload({
  onChangeImage,
  selectedImages,
  removeImage,
}: IProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { createNotification } = useAlert();
  const [isDragging, setIsDragging] = useState(false);

  const isValidImageType = (file: File): boolean => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    return allowedTypes.includes(file.type);
  };

  const addImage = (files: FileList) => {
    try {
      const parsedFiles = Object.keys(files).map((key) => {
        const currentFile = files[parseInt(key)];
        if (isValidImageType(currentFile)) {
          return {
            url: URL.createObjectURL(currentFile),
            file: currentFile,
          };
        }
        createNotification({
          type: "error",
          message: `You entered an invalid file type:${currentFile.type}`,
        });
      });

      if (parsedFiles.length > 0) {
        onChangeImage(parsedFiles[0] as IImage);
      }
    } catch (err) {
      console.log(err);
      createNotification({
        type: "error",
        message: `Something went wrong`,
      });
    }
  };

  return (
    <div className={styles.container} data-testid="image-upload">
      {selectedImages.length < 6 && (
        <div
          className={`${styles.upload} ${isDragging ? styles.dragging : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            const files = e.dataTransfer.files;
            addImage(files);
            // Handle dropped image
          }}
        >
          <input
            type={"file"}
            onChange={(e) => addImage(e.target.files as FileList)}
            accept="image/*"
            data-testid="image-upload-input"
          />

          <div className={styles.box}>
            <FontAwesomeIcon icon={faCamera} width={10} height={10} />
          </div>
          <div className={styles.helperText}>
            Click to select image or drag and drop
          </div>
        </div>
      )}

      {selectedImages &&
        selectedImages.map((selectedImage) => (
          <div
            key={selectedImage.url}
            className={styles.imageContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && (
              <button
                className={styles.hoverButton}
                onClick={() =>
                  removeImage &&
                  removeImage(selectedImages.indexOf(selectedImage))
                }
              >
                <FontAwesomeIcon icon={faClose} width={100} height={100} />
              </button>
            )}
            {/* <Image src={selectedImage.url} alt="product image" fill /> */}
            <div
              style={{ backgroundImage: `url(${selectedImage.url})` }}
              className={styles.imageHolder}
            />
          </div>
        ))}
    </div>
  );
});
