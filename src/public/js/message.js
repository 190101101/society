import '/node/axios/dist/axios.js';
import { UserData } from './global.js';

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.form-button');
  const input = document.querySelector('.form-input');

  button.addEventListener('click', async (e) => {
    e.preventDefault();

    const messageObject = {
      username: UserData.username,
      message: input.value,
      icon: UserData.icon,
      createdAt: new Date().toLocaleString(),
      socket: UserData.socket,
    };

    const response = await axios.post(
      'http://localhost:5000/messages',
      messageObject
    );

    if (response.data.errors) {
      alert(response.data.errors[0].msg);
    }

    if (response.data.status === false) {
      alert(response.data.message);
    }

    input.value = '';
  });
});
