import axios from 'axios';
// import {API_KEY_NEWS} from '@env';

export async function fetchPosts({page = 1, limit = 10}) {
  try {
    const response = await axios.get(
      // `https://randomuser.me/api/?page=${page}&results=${limit}&seed=abc`,
      // `https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=${limit}&page=${page}&apiKey=${API_KEY_NEWS}`,
      `https://dev.to/api/articles/latest?page=${page}&per_page=${limit}`,
    );
    console.log(response?.data);

    return response?.data;
  } catch (error) {
    console.error(error);
  }
}
