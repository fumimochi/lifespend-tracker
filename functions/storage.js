import * as CONST from '../consts/consts.js';
import { getDay, getMonth } from './dateState.js';
import {
  getAvarageSpend,
  getSpendsForMonth,
  getHighestSpend,
  filteredByMonth,
  getTotalAmount,
} from './expenses.js';

export function getIcon(name) {
  return CONST.iconsArr[name] ?? '📦';
}

export function calcHomeStat(arr) {
  const total = getSpendsForMonth(arr, getMonth());

  const todaysSpends = arr.filter(
    (spend) => spend.date.split('.')[0] === getDay(),
  );

  return {
    total,
    left: CONST.budget - total,
    todaysCount: todaysSpends.length,
    todaysMoney: todaysSpends.reduce((sum, e) => sum + e.amount, 0),
  };
}

export function calcStatInfo(arr) {
  const month = CONST.setOfMonths.find((m) => m.startsWith(getMonth()));
  const filtered = filteredByMonth(arr, getMonth());
  const total = getTotalAmount(filtered);
  const avg = getAvarageSpend(filtered);
  const highest = getHighestSpend(filtered);
  const { tag, amount, date } = highest;
  const weekdayChart = getWeekdayChartData(filtered);

  return { month, total, avg, tag, amount, date, filtered, weekdayChart };
}

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split('.');
  return new Date(year, month - 1, day);
}

function getTotalsByWeekday(arr) {
  const totals = CONST.weekDays.reduce((acc, day) => {
    acc[day] = 0;
    return acc;
  }, {});

  arr.forEach((spend) => {
    const date = parseDate(spend.date);
    const jsDay = date.getDay();
    const dayName = CONST.weekDays[jsDay === 0 ? 6 : jsDay - 1];
    totals[dayName] += spend.amount;
  });

  return totals;
}

export function getWeekdayChartData(filteredByMonthSpends) {
  return getTotalsByWeekday(filteredByMonthSpends);
}

export function getVisibleSpends(arr, filter = 'all') {
  const byMonth = filteredByMonth(arr, getMonth());
  return filter === 'all'
    ? byMonth
    : byMonth.filter((spend) => spend.category.toLowerCase() === filter);
}
