import type { User } from '../types/types';
import { apiRequest } from './client';

export function registerUser(data: Omit<User, 'id'>) {
  return apiRequest<User>('/users', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function loginUser(email: string, hashedPassword: string) {
  const matches = await apiRequest<User[]>(
    `/users?email=${encodeURIComponent(email)}&hashedPassword=${encodeURIComponent(hashedPassword)}`,
  );

  return matches[0] ?? null;
}

export function changeUserInfo(data: Omit<User, 'id'>) {
  return apiRequest<User>('/users', {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function getUserBudget(email: string) {
  const user = await apiRequest<User>(`/users?email=${encodeURIComponent(email)}`)

  return user[0].budget ?? null;
}