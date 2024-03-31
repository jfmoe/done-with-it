import { useEffect, useState } from 'react';
import APIClient from '../api/api-client';

type image = { url: 'string' };

export interface ListItem {
  id: number;
  title: string;
  price: number;
  images: image[];
}

const apiClient = new APIClient<ListItem[]>('/listings');

const useListings = () => {
  const [listings, setListings] = useState<ListItem[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const requestListings = async () => {
    setLoading(true);
    const response = await apiClient.getAll();
    setLoading(false);
    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    requestListings();
  }, []);

  return { listings, error, loading, reLoad: requestListings };
};

export default useListings;
