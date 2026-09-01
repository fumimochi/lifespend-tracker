import type { Spend } from '../types/types';
import { apiRequest } from './client';

export function getSpendsByUser(userId: string) {
  return apiRequest<Spend[]>(`/spends?userId=${encodeURIComponent(userId)}`);
}
