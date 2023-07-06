import axios from 'axios';

export async function fetchPosts({page = 1, limit = 10}) {
  try {
    const response = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=${limit}&seed=abc`,
    );
    console.log(response?.data?.info);

    return response?.data;
  } catch (error) {
    console.error(error);
  }
}
