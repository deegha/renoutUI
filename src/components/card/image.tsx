import { fetchImages } from '@/services/propertyService';
import { getPartAfterUpload } from '@/services/helpers';
import Image from 'next/image';

export async function ImagesRenderer({ id }: { id: string }) {
  const images: {
    url: string;
  }[] = await fetchImages(id);
  const imageSrc =
    images.length > 0
      ? images[0].url
      : 'https://res.cloudinary.com/duqpgdc9v/image/upload/t_media_lib_thumb/v1696509885/CeylonHotelsHub/zo1xlfdcellh4hiehcty.jpg';

  return (
    <div>
      <Image
        src={`https://res.cloudinary.com/duqpgdc9v/image/upload/w_250,ar_1.3,c_fill${getPartAfterUpload(imageSrc)}`}
        alt="Card Image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}
