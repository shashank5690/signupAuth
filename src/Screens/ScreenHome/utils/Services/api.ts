import axios from 'axios';

const API_KEY = '45184610-df12da5fdfb2eb6fd3849e98a' ; // Replace with your actual API key
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (searchTerm: string = 'Gradient', perPage: number = 20) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchTerm,
        image_type: 'photo',
        per_page: perPage,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Error fetching images.');
  }
};
