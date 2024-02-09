import axios from 'axios';
import { EntityType } from '@/models/enum/entityType.ts';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,

  headers: {
    accept: 'application/json',
  },
});

export async function getHelloWorld(entityType: EntityType) {
  return await apiInstance.post<string>('/entity', {
    entityType,
  });
}
