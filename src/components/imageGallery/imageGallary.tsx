'use client';

import { IImage } from '@/services/d';
import styles from './styles.module.scss';
import { Button } from '@/components';
import { useState } from 'react';
import { ShowAllImages } from './allIImages';

export function ImageGallery({ images }: { images: IImage[] }) {
  const [showImages, setShowImages] = useState(false);

  const imagesToRender = images.slice(0, 4).map((image, index) => ({
    src: image.url,
    alt: `Image ${index + 1}`
  }));

  function showMorePhotos() {
    setShowImages(true);
  }

  return (
    <div className={styles.gallery}>
      {imagesToRender.map((image, index) => (
        <img
          key={index}
          className={styles.galleryItem}
          src={image.src}
          alt={image.alt}
        />
      ))}
      <div className={styles.moreContainer}>
        {images.length > 3 && (
          <Button
            variant="info"
            onClick={showMorePhotos}
            title="Show more Photos"
          />
        )}
      </div>

      {showImages && (
        <ShowAllImages
          images={imagesToRender}
          close={() => setShowImages(false)}
        />
      )}
    </div>
  );
}
