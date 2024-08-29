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
