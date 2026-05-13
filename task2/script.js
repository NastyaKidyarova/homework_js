let sendButton = document.getElementById('sendButton');
let themeButton = document.getElementById('themeButton');

let lastName = document.getElementById('lastName');
let firstName = document.getElementById('firstName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

let result = document.getElementById('result');
let resultLastName = document.getElementById('resultLastName');
let resultFirstName = document.getElementById('resultFirstName');
let resultEmail = document.getElementById('resultEmail');
let resultPhone = document.getElementById('resultPhone');

sendButton.onclick = function () {
  resultLastName.textContent = 'Фамилия: ' + lastName.value;
  resultFirstName.textContent = 'Имя: ' + firstName.value;
  resultEmail.textContent = 'Электронная почта: ' + email.value;
  resultPhone.textContent = 'Телефон: ' + phone.value;

  result.style.display = 'block';
};

themeButton.onclick = function () {
  if (document.body.className === 'dark-theme') {
    document.body.className = '';
    themeButton.textContent = 'Ночной режим';
  } else {
    document.body.className = 'dark-theme';
    themeButton.textContent = 'Дневной режим';
  }
};
