import type { User } from '../context/UserContext';
import { apiRequest } from './client';

export function registerUser(data: Omit<User, 'id'>) {
  return apiRequest<User>('/users', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function loginUser(email: string, password: string) {

  const matches = await fetch(`/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent('qweqwe')}`);

  return matches ? matches : null;
}

export function changeUserInfo(data: Omit<User, 'id'>) {
  return apiRequest<User>('/users', {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function addSpend() {}

export function removeSpend() {}
