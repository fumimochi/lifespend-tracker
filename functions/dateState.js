import * as CONST from '../consts/consts.js';

export function initDate() {
  if (localStorage.getItem('date')) return;

  const date = new Date();
  const [month, day, year] = date.toDateString().split(' ').slice(1, 4);
  localStorage.setItem(
    'date',
    JSON.stringify({
      [CONST.keys.DAY_KEY]: day,
      [CONST.keys.MONTH_KEY]: month,
      [CONST.keys.YEAR_KEY]: year,
    }),
  );
}

export function getDay() {
  return JSON.parse(localStorage.getItem('date'))[CONST.keys.DAY_KEY];
}

export function getYear() {
  return JSON.parse(localStorage.getItem('date'))[CONST.keys.YEAR_KEY];
}

export function getMonth() {
  return JSON.parse(localStorage.getItem('date'))[CONST.keys.MONTH_KEY];
}

export function setMonth(month) {
  let currentDate = JSON.parse(localStorage.getItem('date'));

  currentDate[CONST.keys.MONTH_KEY] = month;
  localStorage.removeItem('date');
  localStorage.setItem('date', JSON.stringify(currentDate));
}
