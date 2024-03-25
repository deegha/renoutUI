import { fetchImages } from '@/services/propertyService';
import Image from 'next/image';

export async function ImagesRenderer({ id }: { id: string }) {
  const images: Array<{
    url: string;
  }> = await fetchImages(id);
  const imageSrc =
    images.length > 0
      ? images[0].url
      : 'https://res.cloudinary.com/duqpgdc9v/image/upload/t_media_lib_thumb/v1696509885/CeylonHotelsHub/zo1xlfdcellh4hiehcty.jpg';
  return (
    <div>
      <Image
        src={imageSrc}
        alt="Card Image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}
