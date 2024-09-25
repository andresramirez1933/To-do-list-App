'use strict';

const listEl = document.querySelector('.myList');
const inputEl = document.querySelector('.fname');

const inputBtn = document.querySelector('.btnAdd');
const deleteBtn = document.querySelector('.btnDelete');
let toDoListEl;
let inputValue;

inputBtn.addEventListener('click', function () {
  inputValue = inputEl.value;

  if (validateInput(inputValue)) {
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    listEl.appendChild(listItem);
    clearInput();
  }
});

deleteBtn.addEventListener('click', function () {
  inputValue = inputEl.value.toLowerCase();

  toDoListEl = document.querySelectorAll('.myList li');
  if (!toDoListEl.length) {
    alert('The to-do list is empty');
    return;
  }

  if (validateInput(inputValue)) {
    const itemToDelete = findToDoItem(toDoListEl, inputValue);
    if (itemToDelete) {
      itemToDelete.remove();
      alert(`To-do item deleted: ${inputValue}`);
    } else {
      alert(`Item not found: ${inputValue}`);
    }
  }
  function findToDoItem(list, value) {
    return [...list].find(item => item.textContent.toLowerCase() === value);
  }
  clearInput();
});

function validateInput(input) {
  if (input.trim() === '') {
    alert('The field cannot be empty or contain only spaces.');
    return false;
  } else {
    return true;
  }
}

function clearInput() {
  inputEl.value = '';
}
