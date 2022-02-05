'use strict';

const addBtn = document.querySelector('.add__btn');
const listBox = document.querySelector('.list');
const items = document.querySelector('.items');
const deleteBtn = document.querySelector('.delete__btn');
const textInput = document.querySelector('.text__input');
const numberInput = document.querySelector('.number__input');
const totalPrice = document.querySelector('.totalPrice__number');
const selectLocation = document.querySelector('.location-select');
const checkbox = document.querySelector('.check__box');

function onAddBtn() {
  let name = textInput.value;
  let price = Number(numberInput.value);
  let location = selectLocation.value;

  // Don't add list If there is no text or price input
  if (name === '' || price === '') {
    textInput.focus();
    return;
  } else {
    createListItem(name, price, location);

    numberInput.value = '';
    numberInput.focus();
    textInput.value = '';
    textInput.focus();
  }
}

function createListItem(name, price, location) {
  let createList = document.createElement('li');
  createList.setAttribute('class', 'item');

  let createItemRow = document.createElement('div');
  createItemRow.setAttribute('class', 'item__row');

  let createItemLeft = document.createElement('div');
  createItemLeft.setAttribute('class', 'item__left');

  let createCompleBtn = document.createElement('button');
  createCompleBtn.setAttribute('class', 'complete__btn');

  let createCompleIcon = document.createElement('i');
  createCompleIcon.setAttribute('class', 'fas fa-shopping-bag');

  let createItemName = document.createElement('span');
  createItemName.setAttribute('class', 'item__name');

  let createItemLoca = document.createElement('span');
  createItemLoca.setAttribute('class', 'item__location');

  let createItemRight = document.createElement('div');
  createItemRight.setAttribute('class', 'item__right');

  let createItemPrice = document.createElement('span');
  createItemPrice.setAttribute('class', 'item__price');

  let createDelete = document.createElement('button');
  createDelete.setAttribute('class', 'delete__btn');

  let createDelIcon = document.createElement('i');
  createDelIcon.setAttribute('class', 'fas fa-trash-alt');

  let createDivider = document.createElement('div');
  createDivider.setAttribute('class', 'divider');

  items.appendChild(createList);
  items.appendChild(createDivider);
  createList.appendChild(createItemRow);
  createCompleBtn.appendChild(createCompleIcon);
  createItemLeft.appendChild(createCompleBtn);
  createItemLeft.appendChild(createItemName);
  createItemLeft.appendChild(createItemLoca);
  createItemRow.appendChild(createItemLeft);
  createItemRight.appendChild(createItemPrice);
  createDelete.appendChild(createDelIcon);
  createItemRight.appendChild(createDelete);
  createItemRow.appendChild(createItemRight);

  createItemName.innerHTML = name;
  createItemPrice.innerHTML = `$${price}`;

  // Controll complete button
  createCompleBtn.addEventListener('click', () => {
    createCompleBtn.classList.toggle('clicked');
    createItemRow.classList.toggle('clicked');
    createDelete.classList.toggle('clicked');
  });

  // Deleted list
  createDelete.addEventListener('click', () => {
    items.removeChild(createList);
    items.removeChild(createDivider);
  });

  createList.scrollIntoView({ black: 'center' });

  // Add location to the list
  if (location === '') {
    return;
  }
  {
    createItemLoca.innerHTML = `${location}`;
  }
}

addBtn.addEventListener('click', () => {
  onAddBtn();
});

//Add list with enter key
document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAddBtn();
  }
});
