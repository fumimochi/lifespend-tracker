import type { Spend } from '../types/types';

export function calculateRightBarInfo(spends: Spend[], month: string) {
  const totalMonthSpends = spends.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  const budget = 1000;
  const timestamp = Date.now();
  const date = new Date(timestamp)
    .toLocaleDateString('ru-RU')
    .replace(/\./g, '-');
  const todaysSpends: Spend[] | null = spends.filter(i => i.date === date);
  const totalToday = todaysSpends.reduce((acc, cur) => acc + cur.amount, 0)

  return {
    month, 
    totalMonthSpends,
    budget,
    left: Math.round(budget - totalMonthSpends),
    todaysSpendsCount: todaysSpends.length,
    totalToday
  };
}
