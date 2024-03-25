import { IImage } from '../imageUpload/imageUpload';
import { TRenderImage } from './d';
import styles from './styles.module.scss';
import { Button } from '@/components';

export function ShowAllImages({
  images,
  close
}: {
  images: TRenderImage[];
  close: () => void;
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        <Button title="Close" variant="info" onClick={close} />
        <div className={styles.galleryShowAll}>
          {images.map((image, index) => (
            <img
              key={index}
              className={styles.galleryItem}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
        <Button title="Close" variant="info" onClick={close} />
      </div>
    </div>
  );
}
