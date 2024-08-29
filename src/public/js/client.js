import { client } from './socket.js';
import { displayMessages, displayUsers } from './boot.js';

client.on('server:data', (data) => {
  document.querySelector('.online-text').textContent = data.online;
  document.querySelector('.users-text').textContent = data.users;
  document.querySelector('.messages-text').textContent = data.messages;
});

client.on('server:online', (data) => {
  document.querySelector('.online-text').textContent = data.online;
});

client.on('server:users', (data) => {
  document.querySelector('.users-text').textContent = data.users;
});

client.on('server:messages', (data) => {
  document.querySelector('.messages-text').textContent = data.messages;
});

client.on('server:newuser', (data) => {
  displayUsers(data, 'afterbegin');
});

client.on('server:message', (data) => {
  console.log(data);
  displayMessages(data);
});
