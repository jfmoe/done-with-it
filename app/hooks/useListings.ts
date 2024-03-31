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

  const requestListings = async () => {
    const response = await apiClient.getAll();
    setListings(response.data);
  };

  useEffect(() => {
    requestListings();
  }, []);

  return { listings };
};

export default useListings;
