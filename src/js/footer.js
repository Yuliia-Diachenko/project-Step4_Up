
import { postRequest } from './api';
import iziToast from 'izitoast';
import { addClassIsOpenModal } from './modal';
const form = document.querySelector('.footer-form-order');
// const modalWindow = document.querySelector('.modal-window');
const emailInput = document.querySelector('.email');
const message = document.querySelector('.message');
// ================================================
emailInput.addEventListener('change', function () {
  validate(emailInput);
});
function validateEmail(input) {
  // Проста перевірка за допомогою регулярного виразу
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return emailRegex.test(input.toLowerCase());
}
function validate(input) {
  // Видалення попередніх помилок
  removeMessage(input);
  // Перевірка введеної електронної пошти
  const email = input.value;
  const isValid = validateEmail(email);
  const labelError = document.querySelector('label');
  // Встановлення класу та тексту повідомлення в залежності від результату валідації
  if (isValid) {
    input.classList.remove('error-label');
    input.classList.add('success-label');
    addMessage(input, 'Success!', 'success');
    if(labelError){
    labelError.classList.remove('error-label');
    labelError.classList.add('success-label');}
  } else {
    input.classList.remove('success-label');
    input.classList.add('error-label');
    addMessage(input, 'Invalid email, try again', 'error');
    if(labelError){
    labelError.classList.remove('success-label');
    labelError.classList.add('error-label');}
  }
}
// Створення нового елемента для відображення повідомлення
const messageElement = document.createElement('label');
function addMessage(input, text, format) {
  // Встановлення тексту повідомлення
  messageElement.textContent = text;
  // Встановлення класу залежно від формату
  messageElement.classList.add(format + '-label');
  // Додавання створеного елемента під інпут в батьківський елемент input
  input.parentNode.children[0].after(messageElement);
}
function removeMessage(input) {
  // Видалення класів 'error-label' і 'success-label' в батьківському елементі input
  const successLabel = document.querySelector('label.success-label');
  const errorLabel = document.querySelector('label.error-label');
  if (successLabel) {
    successLabel.innerHTML = '';
  }
  if (errorLabel) {
    errorLabel.innerHTML = '';
  }
  input.classList.remove('error-label');
  input.classList.remove('success-label');
}
// ==================================
message.addEventListener('change', changeAndSaveComment);
function changeAndSaveComment() {
  const messageFull = message.value;
  message.value = changeComment(message, 20);
}
// функція змінення довжини коментаря
function changeComment(text, maxLength) {
  const change = text.value;
  if (change.length <= maxLength) {
    return change;
  } else {
    return change.slice(0, maxLength) + '...';
  }
}
function answerError() {
  iziToast.show({
    color: 'red',
    message: `ERROR SERVER`,
    position: 'topCenter',
  });
  // return error;
}
// =========================================================
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const comments = elements.comments.value;
  let validEmail = validateEmail(email);
  const comit = {
    email: email.trim(),
    comment: comments.trim(),
  };
  const options = {
    method: 'POST',
    body: JSON.stringify(comit),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  try {
    if (validEmail === true && comments != '') {
      //=========================симуляція помилки від сервера
      //  throw postRequest(options)
      // ===============================
      postRequest(options);
      //  console.log(postRequest(options));
      addClassIsOpenModal();
      event.currentTarget.reset();
    } else {
      iziToast.show({
        color: 'red',
        message: `All form fields must be filled in`,
        position: 'topCenter',
      });
    }
  } catch (error) {
    answerError();
  }
  removeMessage(emailInput);
}

