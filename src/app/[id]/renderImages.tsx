import { fetchImages } from '@/services/propertyService';
import { ImageGallery } from '@/components';

export async function RenderImages(params: { id: string }) {
  const images = await fetchImages(params.id);

  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
}
