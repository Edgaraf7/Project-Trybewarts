const loginBtn = document.querySelector('#login-button');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const submitBtn = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const evaluationForm = document.querySelector('#evaluation-form');
const formInfos = document.querySelectorAll('.form-info');
const familyInputs = document.querySelectorAll('.family');
const subjectInputs = document.querySelectorAll('.subject');
const rateInputs = document.getElementsByName('rate');
const inputForms = [familyInputs, subjectInputs, rateInputs];
const main = document.querySelector('main');
const trybewartsLogo = document.querySelector('#trybewarts-forms-logo');

const loginData = [{
  email: 'tryber@teste.com',
  password: '123456',
}];

function validadeLogin() {
  let validLogin = false;
  for (let i = 0; validLogin === false && i < loginData.length; i += 1) {
    if (emailInput.value === loginData[i].email && passwordInput.value === loginData[i].password) {
      validLogin = true;
    }
  } return validLogin;
}

function login(evt) {
  evt.preventDefault();
  const validLogin = validadeLogin();
  if (validLogin === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function enableSubmitBtn() {
  if (agreementCheckbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function updateCounter() {
  const typed = textArea.value.length;
  counter.innerText = 500 - typed;
}

function findSelectedCheckbox(list) {
  let selected = [];
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].checked) {
      selected.push(list[i].value);
    }
  }
  selected = selected.join(', ');
  return selected;
}

function findSelectedRadio(list) {
  let selected = '';
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].checked) {
      selected = list[i].value;
    }
  } return selected;
}

function createDiv() {
  const formData = document.createElement('div');
  main.insertBefore(formData, trybewartsLogo);
  formData.id = 'form-data';
}

function getKeyAndValue(element) {
  let key = '';
  let value = '';
  if (element.id === 'input-name') {
    const lastname = document.querySelector('#input-lastname');
    key = 'Nome';
    value = `${element.value} ${lastname.value}`;
  } else if (element.id === 'input-email') {
    key = 'Email';
    value = element.value;
  } else if (element.id === 'house') {
    key = 'Casa';
    value = element.selectedOptions[0].value;
  }
  return `${key}: ${value}`;
}

function getKeyAndValue2(element) {
  let key = '';
  let value = '';
  if (element[0].className === 'family') {
    key = 'Família';
    value = findSelectedRadio(element);
  } else if (element[0].className === 'subject') {
    key = 'Matérias';
    value = findSelectedCheckbox(element);
  } else if (element[0].name === 'rate') {
    key = 'Avaliação';
    value = findSelectedRadio(element);
  } return `${key}: ${value}`;
}

function insertFormData(list, action) {
  const formData = document.querySelector('#form-data');
  for (let i = 0; i < list.length; i += 1) {
    const content = action(list[i]);
    if (content !== ': ') {
      const newP = document.createElement('p');
      formData.appendChild(newP);
      newP.innerText = content;
    }
  }
}

function insertTextArea() {
  const formData = document.getElementById('form-data');
  const newP = document.createElement('p');
  formData.appendChild(newP);
  newP.innerText = `Observações: ${textArea.value}`;
}

window.onload = () => {
  loginBtn.addEventListener('click', login);
  textArea.addEventListener('keyup', updateCounter);
  submitBtn.disabled = true;
  agreementCheckbox.addEventListener('click', enableSubmitBtn);
  submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    createDiv();
    insertFormData(formInfos, getKeyAndValue);
    insertFormData(inputForms, getKeyAndValue2);
    insertTextArea();
    evaluationForm.style.display = 'none';
  });
};
