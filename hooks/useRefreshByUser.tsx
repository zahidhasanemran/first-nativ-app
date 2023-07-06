import {useState} from 'react';

type refetchType = () => Promise<unknown>;

export const useRefreshByUser = (refetch: refetchType) => {
  const [isRefetchingByUser, setIsRefetchingByUser] = useState(false);

  const refetchByUser = async () => {
    setIsRefetchingByUser(true);
    try {
      await refetch();
    } finally {
      setIsRefetchingByUser(false);
    }
  };

  return {
    isRefetchingByUser,
    refetchByUser,
  };
};
