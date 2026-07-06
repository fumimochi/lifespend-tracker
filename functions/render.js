export function renderItem(item, icon, date) {
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
