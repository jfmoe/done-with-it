import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.31.208:9000/api',
});

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll() {
    return apiClient.get<T>(this.endPoint);
  }
}

export default APIClient;
