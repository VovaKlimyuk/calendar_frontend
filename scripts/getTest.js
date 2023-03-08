const getData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    console.error('cant get data from server');
  }

  return await response.json();
}

const resultUser = [];
const user = {};

const res = getData('https://reqres.in/api/users/1').then((obj) => {
  user.email = obj.data.email;
  user.first_name = obj.data.first_name;
  user.last_name = obj.data.last_name;

  console.log(obj.data.email)
}).catch(() => console.error("cant get data"));

console.log(user);
