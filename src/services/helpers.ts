export function getPartAfterUpload(url: string) {
  // Find the index of "upload"
  const uploadIndex = url.indexOf('upload');

  // If "upload" is found
  if (uploadIndex !== -1) {
    // Get the substring after "upload"
    return url.substring(uploadIndex + 'upload'.length);
  }

  // If "upload" is not found
  return null;
}
