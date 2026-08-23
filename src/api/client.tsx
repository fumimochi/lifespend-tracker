const BASE_URL = 'http://localhost:3000';

export async function apiRequest<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-type': 'application/json' },
    ...options,
  });

  if (!res.ok)
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);

  return res.json() as Promise<T>;
}

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function checkUserExist(email: string): Promise<boolean> {
  const response = await fetch(`${BASE_URL}/users?email=${email}`);
  const users = await response.json();

  return !!users[0];
}
