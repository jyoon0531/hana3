export type PhotoType = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const getPhotos = async (albumId = 1) => {
  const res = await fetch(`${BASE_URL}photos?albumId=${albumId}`);
  return res.json();
};

export async function getPhoto(photoId: number): Promise<PhotoType> {
  const res = await fetch(`${BASE_URL}photos/${photoId}`);
  return res.json();
}
