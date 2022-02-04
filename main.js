'use strict';

const addBtn = document.querySelector('.add__btn');
const listBox = document.querySelector('.list');
const items = document.querySelector('.items');
const deleteBtn = document.querySelector('.delete__btn');
const textInput = document.querySelector('.text__input');

function onAddBtn() {
  let name = textInput.value;
  if (name === '') {
    textInput.focus();
    return;
  } else {
    createListItem(name);

    textInput.value = '';
    textInput.focus();
  }
}

function createListItem(name) {
  let createList = document.createElement('li');
  createList.setAttribute('class', 'item');

  let createitemRow = document.createElement('div');
  createitemRow.setAttribute('class', 'item__row');

  let createItemName = document.createElement('div');
  createItemName.setAttribute('class', 'item__name');

  let createCheckBox = document.createElement('input');
  createCheckBox.setAttribute('type', 'checkbox');
  createCheckBox.setAttribute('class', 'check__box');

  let createDelete = document.createElement('button');
  createDelete.setAttribute('class', 'delete__btn');

  let createDelIcon = document.createElement('i');
  createDelIcon.setAttribute('class', 'fas fa-trash-alt');

  let createDivider = document.createElement('div');
  createDivider.setAttribute('class', 'divider');

  items.appendChild(createList);
  items.appendChild(createDivider);
  createList.appendChild(createitemRow);
  createitemRow.appendChild(createItemName);
  createitemRow.appendChild(createDelete);
  createDelete.appendChild(createDelIcon);

  createItemName.innerHTML = name;
  createItemName.appendChild(createCheckBox);

  createList.scrollIntoView({ black: 'center' });

  createDelete.addEventListener('click', () => {
    items.removeChild(createList);
    items.removeChild(createDivider);
  });
}

addBtn.addEventListener('click', () => {
  onAddBtn();
});

//add with enter key
document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAddBtn();
  }
});
