import * as CONST from '../consts/consts.js';
import { getDay, getMonth } from './dateState.js';
import {
  getAvarageSpend,
  getSpendsForMonth,
  getHighestSpend,
  filteredByMonth,
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
  const total = getSpendsForMonth(filtered, month);
  const avg = getAvarageSpend(filtered);
  const highest = getHighestSpend(filtered);
  const { tag, amount, date } = highest;

  return {
    month,
    total,
    avg,
    tag,
    amount,
    date,
    filtered,
  };
}

function getCurrentWeekRange() {
  const now = new Date();
  const currentDay = now.getDay();
  const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return { monday, sunday };
}

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split('.');
  return new Date(year, month - 1, day);
}

function getSpendsForCurrentWeek(arr) {
  const { monday, sunday } = getCurrentWeekRange();

  return arr.filter((spend) => {
    const date = parseDate(spend.date);
    return date >= monday && date <= sunday;
  });
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

export function getWeeklyChartData(allSpends) {
  const weekSpends = getSpendsForCurrentWeek(allSpends);
  return getTotalsByWeekday(weekSpends);
}
