import '/node/axios/dist/axios.js';

const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
let values = {};

button.addEventListener('click', async (e) => {
  button.disabled = true;
  e.preventDefault();

  inputs.forEach((input) => {
    values[input.name] = input.value;
  });

  const response = await axios.post('http://localhost:5000/login', values);
  console.log(response.data);

  if (response.data.status === true) {
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.location.href = 'http://localhost:5000';
    }, 500);
  }

  setTimeout(() => {
    button.disabled = false;
  }, 1000);
});

// const UserDataOnInput = () => {
//   const {username, password} = JSON.parse(localStorage.getItem('user'))
// }
