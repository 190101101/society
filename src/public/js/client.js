import '/socket.io/socket.io.js';
import { displayMessages } from './boot.js';

const client = io('http://localhost:5000');

client.on('connect', () => {
  // client.emit('client:message', {});

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
