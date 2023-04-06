import axios from 'axios';

const API_KEY = '3e3ad9f3df7eb6b26866aac5eb47fa16';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrending() {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
