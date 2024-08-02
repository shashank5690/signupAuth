import axios from 'axios';

const API_KEY = '45184610-df12da5fdfb2eb6fd3849e98a';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImagesFromApi = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: 'Gradient',
        image_type: 'photo',
        per_page: 20,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw new Error('Error fetching images.');
  }
};
