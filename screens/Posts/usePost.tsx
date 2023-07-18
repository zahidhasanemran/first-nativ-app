import {useState} from 'react';
import {fetchPosts} from '../../apis';
import {useQuery} from '@tanstack/react-query';
import {article} from '../../lib/types';
import {AxiosError} from 'axios';

type UsePostResponse = {
  data: article[] | undefined;
  error: AxiosError<unknown, unknown> | null;
  isLoading: boolean;
  refetch: () => void;
  refreshOnPull: () => void;
  users: article[];
  page: number;
  setPage: (page: number) => void;
};

const usePost = (): UsePostResponse => {
  const [users, setUsers] = useState<article[]>([]);
  const [page, setPage] = useState(1);

  const {
    data: articleList,
    error,
    isLoading,
    refetch,
  } = useQuery(['users', page], () => fetchPosts({page, limit: 10}), {
    keepPreviousData: true, // keep the old data until the new data comes
    onSuccess: data => {
      // if (data?.articles?.length && users.length < 100) {
      if (data?.length && users.length < 100) {
        setUsers([...users, ...data]);
      } // append the new data to the old data
    },
  });

  const refreshOnPull = (): void => {
    setUsers([]);
    setPage(1);
  };

  return {
    data: articleList,
    error: error || null,
    isLoading,
    refetch,
    refreshOnPull,
    users,
    page,
    setPage,
  };
};

export default usePost;

/**

The usePost hook is a custom hook that provides functionality for fetching and managing article data.
@returns {Object} An object containing various properties and functions related to article data.
@property {Array<article>} data - The list of articles.
@property {Error} error - The error object, if any.
@property {boolean} isLoading - A boolean indicating whether the data is being loaded.
@property {Function} refetch - A function to manually trigger a data refetch.
@property {Function} refreshOnPull - A function to reset the article data and page to the initial state.
@property {Array<article>} users - The list of articles with pagination support.
@property {number} page - The current page number.
@property {Function} setPage - A function to set the current page number.
*/
