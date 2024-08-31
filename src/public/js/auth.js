import '/node/axios/dist/axios.js';

window.addEventListener('DOMContentLoaded', () => {
  const formDataSet = document.querySelector('[data-action]');
  const inputs = document.querySelectorAll('input');
  const button = document.querySelector('button');
  let values = {};

  button.addEventListener('click', async (e) => {
    button.disabled = true;
    e.preventDefault();

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    const response = await axios.post(
      `http://localhost:5000/${formDataSet.dataset.action}`,
      values
    );

    console.log(response.data);

    if (response.data.errors) {
      alert(response.data.errors[0].msg);
    }

    if (response.data.status === false) {
      alert(response.data.message);
    }

    if (response.data.status === true) {
      localStorage.setItem('user', JSON.stringify(response.data.user));

      setTimeout(() => {
        window.location.href = 'http://localhost:5000';
      }, 500);
    }

    setTimeout(() => {
      button.disabled = false;
    }, 1000);
  });
});
