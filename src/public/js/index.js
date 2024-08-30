import '/node/axios/dist/axios.js';
import { displayUsers, displayMessages } from './boot.js';

window.addEventListener('DOMContentLoaded', () => {
  const UserFetcher = async () => {
    const response = await axios.get(`http://localhost:5000/users`);
    response.data.forEach((data) => displayUsers(data));
  };

  const MessageFetcher = async () => {
    const response = await axios.get(`http://localhost:5000/messages`);
    response.data.forEach((data) => displayMessages(data));
  };

  UserFetcher();
  MessageFetcher();
});
