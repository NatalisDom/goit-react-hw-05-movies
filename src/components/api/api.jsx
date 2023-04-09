import axios from 'axios';

const API_KEY = '3e3ad9f3df7eb6b26866aac5eb47fa16';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrending() {
  try {
    const reply = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

    return reply.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieData(id) {
  try {
    const reply = await axios.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return reply.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCastList(id) {
  try {
    const reply = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return reply.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getReviews(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

