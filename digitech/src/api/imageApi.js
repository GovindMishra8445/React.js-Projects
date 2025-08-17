export const getImageUrl = (images) => {
  if (!images || images.length === 0) {
    return "/Images/rajastan.png"; // Default image
  }
  if (images[0].startsWith("http://") || images[0].startsWith("https://")) {
    return images[0];
  }
  if (images[0].startsWith("/")) {
    return `
https://d4nc0phz-8800.inc1.devtunnels.ms${images[0]}`;
  }
  // If it's just a filename, combine with base URL
  return `
https://d4nc0phz-8800.inc1.devtunnels.ms${images[0]}`;
};

// for single image
export const getSingleImageUrl = (image) => {
  if (!image || image.length === 0) {
    return "/Images/rajastan.png"; // Default image
  }
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  if (image.startsWith("/")) {
    return `
https://d4nc0phz-8800.inc1.devtunnels.ms${image}`;
  }
  // If it's just a filename, combine with base URL
  return `
https://d4nc0phz-8800.inc1.devtunnels.ms${image}`;
};
