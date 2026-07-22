import * as CONST from './consts/consts.js';
import * as dateState from './functions/dateState.js';
import { renderListItem, renderHomeStat } from './functions/render.js';
import { getIcon, getVisibleSpends } from './functions/storage.js';
import { filteredByMonth } from './functions/expenses.js';

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

const spendsList = document.querySelector('.expense-list');
const addBtn = document.querySelector('.add-btn');
const categoryBtns = document.querySelectorAll('.form-card__categories button');
const filterBtns = document.querySelectorAll('.filter button');
const monthSelect = document.querySelector('#select_month');
let selectedCategory = null;
let selectedFilter = 'all';

function clearForm() {
  document.getElementById('amount').value = '';
  document.getElementById('desc').value = '';
  document.getElementById('date').value = '';
  selectedCategory = null;
}

function renderLastSpends(arr) {
  spendsList.innerHTML = arr
    .map((spend) => {
      const icon = getIcon(spend.category.toLowerCase());
      const monthNumber = parseInt(spend.date.split('.')[1]);
      const date =
        spend.date.split('.')[0] + ' ' + CONST.setOfMonths[monthNumber - 1];
      return renderListItem(spend, icon, date);
    })
    .join('');
}

function updateView() {
  const visible = getVisibleSpends(spendsArr, selectedFilter);
  renderLastSpends(visible);
  renderHomeStat(spendsArr);
}

function addSpend() {
  const amount = document.getElementById('amount').value;
  const description = document.getElementById('desc').value;
  const date = document.getElementById('date').value;

  if (!amount || !description || !date || !selectedCategory) {
    alert('Please fill in all fields');
    return;
  }

  spendsArr.push({
    id: Date.now(),
    tag: description,
    category: selectedCategory,
    amount: Number(amount),
    date: date.split('-').reverse().join('.'),
  });

  updateView();
  clearForm();
}

function initEventListeners() {
  addBtn.addEventListener('click', addSpend);

  spendsList.addEventListener('click', (event) => {
    if (event.target.className.includes('expense-item__remove-btn')) {
      const id = event.target.closest('.expense-item').dataset.id;
      spendsArr = spendsArr.filter((spend) => spend.id != id);
      updateView();
    }
  });

  categoryBtns.forEach((button) => {
    button.addEventListener('click', () => {
      categoryBtns.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      selectedCategory = button.dataset.category;
    });
  });

  filterBtns.forEach((button) => {
    button.addEventListener('click', () => {
      filterBtns.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      selectedFilter = button.dataset.filter;
      updateView();
    });
  });

  monthSelect.addEventListener('change', (e) => {
    const chosenMonth = e.target.value;
    const formatedMonth =
      chosenMonth.charAt(0).toUpperCase() + chosenMonth.slice(1, 3);

    dateState.setMonth(formatedMonth);
    updateView();
  });
}

dateState.initDate();
monthSelect.value = dateState.getMonth().toLowerCase();
initEventListeners();
updateView();
