
import { config } from '../assets/constants';

export const getPhotos = () => {

  console.log(config.apiUrl);
  return fetch(`${config.apiUrl}/photos`)
    .then(response => response.json());
}