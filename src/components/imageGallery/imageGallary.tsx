'use client';

import { IImage } from '@/services/d';
import styles from './styles.module.scss';
import { Button } from '@/components';
import { useState } from 'react';
import { ShowAllImages } from './allIImages';
import { getPartAfterUpload } from '@/services/helpers';
import Image from 'next/image';

export function ImageGallery({ images }: { images: IImage[] }) {
  const [showImages, setShowImages] = useState(false);

  const imagesToRender = images.slice(0, 4).map((image, index) => ({
    src: image.url,
    alt: `Image ${index + 1}`,
  }));

  function showMorePhotos() {
    setShowImages(true);
  }

  return (
    <div className={styles.gallery}>
      {imagesToRender.map((image, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <Image
          key={index}
          height={390}
          width={390}
          className={styles.galleryItem}
          src={`https://res.cloudinary.com/duqpgdc9v/image/upload/w_390,ar_1.3,c_fill${getPartAfterUpload(image.src)}`}
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
