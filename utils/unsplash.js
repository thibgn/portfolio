export const getRandomPhoto = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_TOKEN}`
  );
  const data = await response.json();
  const photo = data.blur_hash;
  return photo;
};
