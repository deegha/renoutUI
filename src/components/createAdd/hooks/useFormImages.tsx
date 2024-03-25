import { useState } from 'react';
import { IImage } from '../../imageUpload/imageUpload';

export function useFormImages() {
  const [images, setImagesState] = useState<Array<IImage>>([]);

  const setImages = (images: Array<IImage>) => {
    setImagesState(images);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return {
    images,
    setImages,
    removeImage
  };
}
