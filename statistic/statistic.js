import * as CONST from '../consts/consts.js';
import { getMonth, setMonth } from '../functions/dateState.js';
import {
  renderBudget,
  renderBudgetChart,
  renderCategoryChart,
  renderStatFields,
  renderStatTable,
} from '../functions/render.js';
import {
  filteredByMonth,
  getTotalsByCategory,
  getTotalAmount,
} from '../functions/expenses.js';
import { getWeeklyChartData } from '../functions/storage.js';

let spendsArr = [
  {
    id: 1,
    tag: 'Eating in cafe',
    category: 'Food',
    amount: 18,
    date: '21.07.2026',
  },
  {
    id: 2,
    tag: 'Gym abonement',
    category: 'Sport',
    amount: 45,
    date: '20.07.2026',
  },
  {
    id: 3,
    tag: 'Vitamines',
    category: 'Health',
    amount: 22,
    date: '20.07.2026',
  },
  {
    id: 4,
    tag: 'Products',
    category: 'Food',
    amount: 61,
    date: '19.07.2026',
  },
  {
    id: 5,
    tag: 'Protein',
    category: 'Sport',
    amount: 39,
    date: '09.07.2026',
  },
  {
    id: 6,
    tag: 'Headphones',
    category: 'Other',
    amount: 89,
    date: '08.07.2026',
  },
  {
    id: 7,
    tag: 'TV',
    category: 'Other',
    amount: 200,
    date: '08.06.2026',
  },
  {
    id: 8,
    tag: 'Headphones',
    category: 'Other',
    amount: 89,
    date: '08.07.2026',
  },
];

let filtered = [];
const topList = document.querySelector('.top-spends__table table');
const catChart = document.querySelector('.graph-categories ul');
const budgetChart = document.querySelector('.graph-budget__bars');

function filterCategories() {
  filtered = [...filteredByMonth(spendsArr, getMonth())];
}

function callTableRender() {
  filterCategories();

  const total = getTotalAmount(spendsArr);
  const categories = getTotalsByCategory(spendsArr);

  for (let c in categories) {
    categories[c] = {
      tag: c,
      amount: categories[c],
      percentage: Math.round((categories[c] * 100) / total),
    };
  }

  catChart.innerHTML = Object.values(categories)
    .map((i) => {
      return renderCategoryChart(i);
    })
    .join(' ');
}

function callBudgetRender() {
  filterCategories();

  const spent = getTotalAmount(filtered);
  const left = CONST.budget - spent;
  const percentageLeft = Math.round((spent * 100) / CONST.budget);
  const spendsByDay = getWeeklyChartData(filtered);

  budgetChart.innerHTML = Object.entries(spendsByDay)
    .map(([key, value]) => {
      return renderBudgetChart(key, value);
    })
    .join('');

  renderBudget({
    spent,
    left,
    percentageLeft,
    month: getMonth(),
  });
}

function initPage() {
  filterCategories();

  const month = CONST.setOfMonths.find((m) => m.startsWith(getMonth()));
  const tableHtml = filtered
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5)
    .map((item) => {
      const date = `${month}  ${item.date.split('.')[0]}`;

      return renderStatTable(item, date);
    })
    .join('');

  topList.innerHTML = tableHtml;

  renderStatFields(spendsArr);
  callTableRender();
  callBudgetRender();
}

initPage();
