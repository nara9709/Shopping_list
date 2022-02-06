'use strict';

const addBtn = document.querySelector('.add__btn');
const items = document.querySelector('.items');
const deleteBtn = document.querySelector('.delete__btn');
const textInput = document.querySelector('.text__input');
const numberInput = document.querySelector('.number__input');
const selectLocation = document.querySelector('.location-select');
const total = document.querySelector('.total__price');

let sumTotal = new Number(0);

function onAddBtn() {
  let name = textInput.value;
  let price = Number(numberInput.value);
  let location = selectLocation.value;

  // Don't add list If there is no text or price input
  if (name === '' || price === '') {
    textInput.focus();
    return;
  } else {
    // priceArray.push(price);

    // let sumTotal = priceArray.reduce((preValue, curValue) => {
    //   return preValue + curValue;
    // }, 0);

    createListItem(name, price, location);
    // total.innerHTML = `$${sumTotal}`;
    sumTotal += price;
    updateSummary();

    numberInput.value = '';
    numberInput.focus();
    textInput.value = '';
    textInput.focus();
  }
}

let id = 0;

function createListItem(name, price, location) {
  const createList = document.createElement('li');
  createList.setAttribute('class', 'item');
  createList.setAttribute('data-id', id);

  createList.innerHTML = `
  <div class="item__row">
    <div class="item__left">
      <button class="complete__btn" data-target-id=${id}>
        <i class="fas fa-shopping-bag" data-target-id=${id}></i>
      </button>
      <span class="itme__name">${name}</span>
      <span class="item__location"> ${location}</span>
    </div>
    <div class="item__right">
      <span class="item__price" >$${price}</span>
      <button class="delete__btn" data-target-id=${id} data-price=${price}>
       <i class="fas fa-trash-alt" data-target-id=${id} data-price=${price}></i>
      </button>
    </div>
    </div>
  <div class="divider"></div>
  </div>`;

  items.appendChild(createList);

  createList.scrollIntoView({ block: 'center' });

  id++;
  return;
}

items.addEventListener('click', (event) => {
  const id = event.target.dataset.targetId;

  // Delete list
  if (
    event.target.className === 'delete__btn' ||
    event.target.className === 'fas fa-trash-alt'
  ) {
    const toBeDeleted = document.querySelector(`.item[data-id="${id}"]`);
    toBeDeleted.remove();

    // Minus item price
    const delPrice = Number(event.target.dataset.price);
    sumTotal -= delPrice;
    updateSummary();
  }

  //Complete button
  if (
    event.target.className === 'complete__btn' ||
    event.target.className === 'fas fa-shopping-bag'
  ) {
    const toBecompleBagBtn = document.querySelector(
      `.complete__btn[data-target-id="${id}"]`
    );
    const toBecompleDelBtn = document.querySelector(
      `.delete__btn[data-target-id="${id}"]`
    );
    const toBecompleItem = document.querySelector(`.item[data-id="${id}"]`);
    toBecompleBagBtn.classList.toggle('clicked');
    toBecompleDelBtn.classList.toggle('clicked');
    toBecompleItem.classList.toggle('clicked');
  }
});

// Add list with add button
addBtn.addEventListener('click', () => {
  onAddBtn();
});

//Add list with enter key
document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAddBtn();
  }
});

// Update total price
function updateSummary() {
  total.innerHTML = `$${Number(sumTotal)}`;
}
