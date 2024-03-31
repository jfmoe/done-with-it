import { create } from 'apisauce';
import { AxiosRequestConfig } from 'axios';

const apiClient = create({
  baseURL: 'http://192.168.31.208:9000/api',
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    return () => apiClient.get<T>(this.endpoint);
  }

  create(entity: FormData, options: AxiosRequestConfig) {
    return apiClient.post(this.endpoint, entity, options);
  }
}

export default APIClient;
