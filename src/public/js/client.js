import '/socket.io/socket.io.js';
import { displayMessages } from './boot.js';

const client = io('http://localhost:5000');

client.on('connect', () => {
  document.querySelector('.form-button').addEventListener('click', (e) => {
    const input = document.querySelector('.form-input');

    e.preventDefault();
    client.emit('client:message', {
      id: Date.now(),
      username: 'pepikus',
      message: input.value,
      icon: 'monster2.png',
      date: new Date().toLocaleString(),
    });

    input.value = '';
  });

  client.on('server:online', (data) => {
    document.querySelector('.online-text').textContent = data;
  });

  client.on('server:message', (data) => {
    displayMessages(data);
  });

  client.on('server:database', (database) => {
    database.forEach((data) => displayMessages(data));
  });
});
