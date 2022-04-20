import axios from 'axios';
import { REACT_APP_DUMMY_API } from '@env';

export const getPhotos = async () => {
  return await axios.get(`${REACT_APP_DUMMY_API}/albums/1/photos`);
};
