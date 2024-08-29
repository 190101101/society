import { client } from './socket.js';
import { displayUsers, displayMessages } from './boot.js';

window.addEventListener('DOMContentLoaded', () => {
  client.on('client:content', ({ users, messages }) => {
    users.forEach((user) => displayUsers(user));
    messages.forEach((message) => displayMessages(message));
  });
});
