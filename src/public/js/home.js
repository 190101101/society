window.addEventListener('DOMContentLoaded', () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const button = document.querySelector('.form-button');
  const input = document.querySelector('.form-input');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(userData);

    console.log(input.value);
    input.value = '';
  });
});
