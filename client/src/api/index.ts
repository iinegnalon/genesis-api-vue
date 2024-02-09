import axios from 'axios';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,

  headers: {
    accept: 'application/json',
  },
});

export async function createLeads() {
  return await apiInstance.post<string>('/leads');
}

export async function createContacts() {
  return await apiInstance.post<string>('/contacts');
}

export async function createCompanies() {
  return await apiInstance.post<string>('/companies');
}
