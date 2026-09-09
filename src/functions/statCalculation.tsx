import { getUserBudget } from '../api/users';
import getStorage from '../storage/storage';
import { Months, type Spend } from '../types/types';

export function calculateBars(spends: Spend[]) {
  const total = spends.reduce((acc, current) => acc + current.amount, 0);
  const avg = Math.round(total / 7);
  const biggest = spends.reduce((acc, current) => {
    return current.amount > acc.amount ? current : acc;
  }, spends[0]);
  const date = biggest.date.split('-')[0] + ' ' + Months[Number(biggest.date.split('-')[1]) - 1]
  
  return {
    total,
    transAmount: spends.length,
    avg,
    biggest: biggest.amount,
    biggestDescription: `${biggest.title} - ${date}`,
  };
}

export function calculateByCategory(spends: Spend[]) {
  const obj = {};

  for (const spend of spends) {
    obj[spend.category] = (obj[spend.category] ?? 0) + spend.amount;
  }

  return obj;
}

export async function calculateGraphData(spends: Spend[]) {
  const {email} = getStorage();
  const total = await getUserBudget(email).then(e => e);
  const spent = spends.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0)


  return {
    total,
    spent,
    left: total - spent,
    percentageSpent: Math.round(spent * 100 / total),
    spendForWeek: []
  }
}

export function calculateTopSpends(spends: Spend[]) {
  return spends.sort((a, b) => b.amount - a.amount).slice(0, 5);
}
