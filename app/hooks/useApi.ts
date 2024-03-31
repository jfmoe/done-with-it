import { ApiResponse } from 'apisauce';
import { useEffect, useState } from 'react';

const useApi = <T>(apiFunc: () => Promise<ApiResponse<T[]>>) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };

  useEffect(() => {
    request();
  }, []);

  return { data, error, loading, request };
};

export default useApi;
