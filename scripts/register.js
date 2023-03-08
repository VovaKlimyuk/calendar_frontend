'use strict'

const inputs = document.getElementsByTagName("input");

const user = {
  name: '',
  surname: '',
  login: '',
  password: ''
};

function getAllInputs() {
  user.name = (inputs.name.value).trim();
  if (!user.name) {
    alert('name is empty');
    return;
  }
  user.surname = inputs.surname.value;
  user.login = inputs.login.value;
  user.password = inputs.password.value;

  sendData(user);
}

function sendData(data) {
  console.log('Sending data');

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];

  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
  }

  const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  XHR.open('POST', 'http://localhost:8080/register');

  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  XHR.send(urlEncodedData);
}

const button = document.getElementById('registerButton');

button.onclick = () => {
  getAllInputs();
};
