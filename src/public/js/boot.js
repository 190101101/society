window.addEventListener('DOMContentLoaded', () => {});

export const displayUsers = (data, mode = 'beforeend', online = true) => {
  const userList = document.querySelector('.user-list');

  const isOdd = userList.children.length % 2 === 0;
  const backgroundClass = isOdd ? 'bg-main-light-grey' : '';

  const onlineClass = online == false ? 'bg-main-orange' : 'bg-main-dark-green';
  const opacityClass = online == false ? 'opacity-50' : '';

  const html = `
    <div class="flex justify-between mb-1 w-[100%] group ${backgroundClass}">
      <div class="flex items-start justify-center basis-[20%] ${opacityClass}">
        <img class="h-8 w-8" src="/public/icons/${data.icon}" />
      </div>
      <div class="basis-[80%] flex flex-col font-consolas font-bold">
        <div class="flex justify-between items-center">
          <div class="text-main-dark-green ${opacityClass}">${data.username}</div>
          <div class="w-2 h-2 mr-1 ${onlineClass} rounded-full"></div>
        </div>
      </div>
    </div>
  `;

  userList.insertAdjacentHTML(mode, html);
};

export const displayMessages = (data) => {
  const chatMessages = document.querySelector('.chat-messages');
  const isOdd = chatMessages.children.length % 2 === 0;
  const backgroundClass = isOdd ? 'bg-main-light-grey' : 'bg-main-dark-grey';

  const html = `
    <div class="flex justify-between ${backgroundClass} mb-1">
    <div class="flex items-start justify-center basis-[4%] min-w-8">
      <img class="h-8 w-8" src="public/icons/${data.icon}" />
    </div>
    <div class="basis-[96%] flex flex-col font-consolas font-bold">
      <div class="flex justify-between">
        <span class="text-main-dark-green">${data.username}</span>
        <span class="text-gray-400">${data.createdAt}</span>
      </div>
      <div class="text-gray-400">${data.message}</div>
    </div>
  </div>`;

  chatMessages.insertAdjacentHTML('beforeend', html);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};
