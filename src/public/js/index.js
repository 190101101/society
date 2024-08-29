import '/node/axios/dist/axios.js';
import { client } from './socket.js';
import { displayUsers, displayMessages } from './boot.js';

window.addEventListener('DOMContentLoaded', () => {
  client.on('client:content', ({ users, messages }) => {
    users.forEach((user) => displayUsers(user));
    messages.forEach((message) => displayMessages(message));
  });

  // burda socket olmalidir
  const UserFetcher = async () => {
    const response = await axios.get(`http://localhost:5000/users`);
    response.data.forEach((data) => displayUsers(data));
  };

  // UserFetcher();

  const MessageFetcher = async () => {
    const response = await axios.get(`http://localhost:5000/messages`);
    response.data.forEach((data) => displayMessages(data));
  };

  // MessageFetcher();
});
