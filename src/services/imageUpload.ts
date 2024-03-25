/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export const uploadImage = async (file) => {
  console.log('file', file, process.env.CLOUDINARY_UPLOAD_URL);
  try {
    const formData = new FormData();
    formData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    );
    formData.append('folder', 'rentout');
    formData.append('file', file);

    const response = await fetch(
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL,
      {
        method: 'POST',
        body: formData,
      },
    );

    if (response.ok) {
      const data = await response.json();
      return {
        url: data.secure_url,
      };
    } else {
      console.error('Failed to upload image:', response.statusText);
      return {
        url: '',
      };
    }
  } catch (err) {
    console.error('Error uploading image:', err);
    return {
      url: '',
    };
  }
};
