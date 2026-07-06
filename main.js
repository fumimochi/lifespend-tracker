import * as CONST from './consts/consts.js';
import { renderItem } from './functions/render.js';
import { getIcon } from './functions/storage.js';
import { getSpentSum } from './functions/expenses.js';

let spendsArr = [
  {
    id: 1,
    tag: 'Eating in cafe',
    category: 'Food',
    amount: 18,
    date: '21.06.2026',
  },
  {
    id: 2,
    tag: 'Gym abonement',
    category: 'Sport',
    amount: 45,
    date: '20.06.2026',
  },
  {
    id: 3,
    tag: 'Vitamines',
    category: 'Health',
    amount: 22,
    date: '20.06.2026',
  },
  {
    id: 4,
    tag: 'Products',
    category: 'Food',
    amount: 61,
    date: '19.06.2026',
  },
  {
    id: 5,
    tag: 'Protein',
    category: 'Sport',
    amount: 39,
    date: '18.06.2026',
  },
  {
    id: 6,
    tag: 'Headphones',
    category: 'Other',
    amount: 89,
    date: '17.06.2026',
  },
];

let spendsList = document.querySelector('.expense-list');
let addBtn = document.querySelector('.add-btn');
let categoryBtns = document.querySelectorAll('.form-card__categories button');
let filterBtns = document.querySelectorAll('.filter button');
let selectedCategory = null;
let selectedFilter = 'all';
let budget = 1200;
let moneySpent = 0;

function clearForm() {
  document.getElementById('amount').value = '';
  document.getElementById('desc').value = '';
  document.getElementById('date').value = '';
  selectedCategory = null;
}

function renderLastSpends(arr) {
  moneySpent = getSpentSum(arr);

  spendsList.innerHTML = arr
    .map((spend) => {
      const icon = getIcon(spend.category.toLowerCase());
      const monthNumber = parseInt(spend.date.split('.')[1]);
      const date =
        spend.date.split('.')[0] + ' ' + CONST.setMonths[monthNumber - 1];

      return renderItem(spend, icon, date);
    })
    .join('');
}

function addSpend() {
  const amount = document.getElementById('amount').value;
  const description = document.getElementById('desc').value;
  const date = document.getElementById('date').value;

  if (!amount || !description || !date || !selectedCategory) {
    alert('Please fill in all fields');
    return;
  }

  const newSpend = {
    id: Date.now(),
    tag: description,
    category: selectedCategory,
    amount: Number(amount),
    date: date.split('-').reverse().join('.'),
  };

  spendsArr.push(newSpend);
  renderLastSpends(spendsArr);
  clearForm();
}

function initEventListeners() {
  addBtn.addEventListener('click', addSpend);

  spendsList.addEventListener('click', (event) => {
    if (event.target.className.includes('expense-item__remove-btn')) {
      const id = event.target.closest('.expense-item').dataset.id;

      spendsArr = spendsArr.filter((spend) => spend.id != id);

      renderLastSpends(
        selectedFilter == 'all'
          ? spendsArr
          : spendsArr.filter((i) => i.category.toLowerCase() == selectedFilter),
      );
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

      if (button.dataset.filter === 'all') {
        renderLastSpends(spendsArr);
      } else {
        selectedFilter = button.dataset.filter;
        const filteredSpends = spendsArr.filter((spend) => {
          return spend.category.toLowerCase() == selectedFilter;
        });
        renderLastSpends(filteredSpends);
      }
    });
  });
}

renderLastSpends(spendsArr);

initEventListeners();
