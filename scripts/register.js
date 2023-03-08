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
  user.login = inputs.email.value;
  user.password = inputs.password.value;

  sendDataToAPI(user);
}

function sendDataToAPI(data) {
  fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log("API response:", result);
  })
  .catch(error => {
    console.error("API error:", error);
  });
}

  const button = document.getElementById('registerButton');

  console.log(button);

  button.onclick = () => {
    getAllInputs();
  };
