
import { config } from '../assets/constants';

export const getPhotos = () => {
  return fetch(`${config.apiUrl}/photos`)
    .then(response => response.json());
}