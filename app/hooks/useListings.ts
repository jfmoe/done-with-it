import APIClient from '../api/api-client';
import useApi from './useApi';

type image = { url: 'string' };

export interface ListItem {
  id: number;
  title: string;
  price: number;
  images: image[];
}

const apiClient = new APIClient<ListItem[]>('/listings');

const useListings = () => useApi(apiClient.getAll());

export default useListings;
