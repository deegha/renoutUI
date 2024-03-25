import request from 'superagent';

export const uploadImage = async (file: File) => {
  console.log('file', file, process.env.CLOUDINARY_UPLOAD_URL);
  try {
    let response = await request
      .post(process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL as string)
      .field(
        'upload_preset',
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
      )
      .field('folder', 'rentout')
      .field('file', file);

    if (response.body) {
      return {
        url: response.body.secure_url as string
      };
    } else {
      return {
        url: ''
      };
    }
  } catch (err) {
    console.log(err);
    return {
      url: ''
    };
  }
};
