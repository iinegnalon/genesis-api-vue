import axios from 'axios';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,

  headers: {
    accept: 'application/json',
  },
});

export function createLeads() {
  return apiInstance.post<string>('/leads');
}

export function createContacts() {
  return apiInstance.post<string>('/contacts');
}

export function createCompanies() {
  return apiInstance.post<string>('/companies');
}
