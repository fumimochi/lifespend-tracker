import * as CONST from '../consts/consts.js';

export function filteredByMonth(spends, month) {
  return spends.filter((i) => {
    return (
      i.date.split('.')[1] ==
      CONST.setOfMonths.findIndex((m) => m.startsWith(month)) + 1
    );
  });
}

export function getSpendsForMonth(spends, month) {
  let thisMonthSpends = filteredByMonth(spends, month);

  return thisMonthSpends.reduce((sum, item) => sum + item.amount, 0);
}

export function getTotalAmount(arr) {
  return arr.reduce((sum, i) => sum + i.amount, 0);
}

export function getAvarageSpend(arr) {
  return arr.length ? Math.round(getTotalAmount(arr) / arr.length) : 0;
}

export function getHighestSpend(arr) {
  return arr.reduce((max, spend) => (spend.amount > max.amount ? spend : max));
}

export function getTotalsByCategory(arr) {
  return arr.reduce((totals, i) => {
    totals[i.category] = (totals[i.category] || 0) + i.amount;
    return totals;
  }, {});
}
