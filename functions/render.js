import * as CONST from '../consts/consts.js';
import { getHighestSpend, getSpendsForMonth } from '../functions/expenses.js';
import { getDay, getMonth } from './dateState.js';
import { calcHomeStat, calcStatInfo } from './storage.js';

export function renderListItem(item, icon, date) {
  return `
    <li class="expense-item" data-id="${item.id}">
      <div class="expense-item__icon">
        <p>${icon}</p>
      </div>
      <div class="expense-item__info">
        <span class="expense-item__name">${item.tag}</span>
        <span class="expense-item__date">${date}</span>
      </div>
      <span class="expense-amount">₴${item.amount}</span>
      <button class="expense-item__remove-btn hovering">✖️</button>
    </li>
  `;
}

export function renderHomeStat(arr) {
  const { total, left, todaysCount, todaysMoney } = calcHomeStat(arr);

  const values = {
    '.monthly-label': `${CONST.setOfMonths.find((m) => m.startsWith(getMonth()))}`,
    '.monthly-value': `₴${total ?? 0}`,
    '.monthly-budget': `₴${CONST.budget ?? 0}`,
    '.left-value': `₴${left ?? 0}`,
    '.todays-value': `${todaysCount}`,
    '.todays-total': `₴${todaysMoney ?? 0}`,
  };

  Object.entries(values).forEach(([selector, text]) => {
    document.querySelector(selector).textContent = text;
  });
}

export function renderStatFields(arr) {
  const { ...info } = calcStatInfo(arr);

  const values = {
    '.short-stat__label .label': `${info.month}`,
    '.cost-total': `₴${info.total}`,
    '.short-stat__count': `${Object.keys(info.filtered).length}`,
    '.cost-avg': `₴${info.avg}`,
    '.cost-highest': `${info.amount}`,
    '.short-stat__date': `${info.date}`,
  };

  Object.entries(values).forEach(([selector, text]) => {
    document.querySelector(selector).textContent = text;
  });
}

export function renderStatTable(item, date) {
  return `
     <tr>
        <td>${CONST.iconsArr[item.category.toLowerCase()] + ' ' + item.tag}</td>
        <td>${date}</td>
        <td>₴${item.amount}</td>
      </tr>
  `;
}

export function renderCategoryChart(item) {
  return `
    <li>
      <label for="category__food">${CONST.iconsArr[item.tag.toLowerCase()] + ' ' + item.tag}</label>
      <progress id="category__food" max="100" value="58">
        58%
      </progress>
      <span>₴${item.amount}</span>
      <span>${item.percentage}%</span>
    </li>
  `;
}

export function renderBudget({ ...info }) {
  const values = {
    '.graph-budget__title span': `${info.month}`,
    '.graph-budget__left': `₴${info.spent}`,
    '.graph-budget__total': `₴${CONST.budget}`,
    '.graph-budget__percent': `${info.percentageLeft}% of budget`,
  };

  Object.entries(values).forEach(([selector, text]) => {
    document.querySelector(selector).textContent = text;
  });
}

export function renderBudgetChart(key, value) {
  return `
    <div class="bar-item">
      <div class="bar-item__fill" style="height: ${value}px"></div>
      <span class="bar-item__label">${key}</span>
    </div>
  `;
}
