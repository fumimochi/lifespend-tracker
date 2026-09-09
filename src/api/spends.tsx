import type { Spend } from '../types/types';
import { apiRequest } from './client';

export function getSpendsByUser(userId: string) {
  return apiRequest<Spend[]>(`/spends?userId=${encodeURIComponent(userId)}`);
}

export function getSpendsByCategory(userId: string, category: string) {
  return apiRequest<Spend[]>(`/spends?userId=${encodeURIComponent(userId)}&category=${encodeURIComponent(category)}`)
}

export function addSpend(spend: Spend) {
  return apiRequest<Spend>(`/spends?userId=${encodeURIComponent(spend.userId)}`, 
  {method: 'POST', body: JSON.stringify(spend)});
}

export function removeSpend(spendId: string) {
  return apiRequest<Spend>(`/spends/${encodeURIComponent(spendId)}`,
{method: 'DELETE'})
}