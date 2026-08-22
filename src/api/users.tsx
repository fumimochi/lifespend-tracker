import type { User } from "../context/UserContext";
import { apiRequest } from "./client";

export function registerUser(data: Omit<User, 'id'>) {
  return apiRequest<User>('/users', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function loginUser(email: string, password: string) {
  const matches = await apiRequest<User[]>(
    `/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  )

  return matches[0] ?? null;
}