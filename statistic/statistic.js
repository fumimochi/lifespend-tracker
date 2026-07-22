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
  getHighestSpend,
} from '../functions/expenses.js';
import { getWeekdayChartData, getVisibleSpends } from '../functions/storage.js';

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
    amount: 400,
    date: '08.06.2026',
  },
  {
    id: 8,
    tag: 'Pancakes',
    category: 'Food',
    amount: 89,
    date: '05.06.2026',
  },
];
let filtered = [];
const topList = document.querySelector('.top-spends__table table');
const catChart = document.querySelector('.graph-categories ul');
const budgetChart = document.querySelector('.graph-budget__bars');
const monthSelect = document.querySelector('#select_month');
let selectedFilter = 'all';

function callTableRender() {
  const total = getTotalAmount(filtered);
  const categories = getTotalsByCategory(filtered);

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
  const spent = getTotalAmount(filtered);
  const left = CONST.budget - spent;
  const percentageLeft = Math.round((spent * 100) / CONST.budget);
  const spendsByDay = getWeekdayChartData(filtered);
  const highest = getHighestSpend(filtered).amount;

  budgetChart.innerHTML = Object.entries(spendsByDay)
    .map(([key, value]) => {
      return renderBudgetChart(key, value, highest);
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
  filtered = getVisibleSpends(spendsArr);

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

  renderStatFields(filtered);
  callTableRender();
  callBudgetRender();
}

monthSelect.addEventListener('change', (e) => {
  const chosenMonth = e.target.value;
  const formatedMonth =
    chosenMonth.charAt(0).toUpperCase() + chosenMonth.slice(1, 3);

  setMonth(formatedMonth);
  initPage();
});

initPage();
