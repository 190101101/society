import { client } from './socket.js';
import { displayMessages, displayUsers } from './boot.js';
import { onlineText, usersText, messagesText } from './elements.js';
import { UserData } from './global.js';

client.on('server:connect', () => {
  UserData.socket = client.id;

  client.emit('client:online:check', UserData);

  client.on('server:online:check', (data) => {
    // data.forEach((element) => displayUsers(element, 'afterbegin'));
  });
});

// sidebar content
client.on('server:data', (data) => {
  onlineText.textContent = data.online;
  usersText.textContent = data.users;
  messagesText.textContent = data.messages;
});

client.on('server:online', (data) => {
  onlineText.textContent = data.online;
});

client.on('server:users', (data) => {
  usersText.textContent = data.users;
});

client.on('server:messages', (data) => {
  messagesText.textContent = data.messages;
});

client.on('server:newuser', (data) => {
  displayUsers(data, 'afterbegin');
});

// sidebar content

// main content
client.on('server:message', (data) => {
  console.log(data);
  displayMessages(data);
});
