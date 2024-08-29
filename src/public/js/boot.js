window.addEventListener('DOMContentLoaded', () => {});

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
        <span class="text-main-dark-green">cookie</span>
        <span class="text-gray-400">${data.date}</span>
      </div>
      <div class="text-gray-400">${data.message}</div>
    </div>
  </div>`;

  chatMessages.insertAdjacentHTML('beforeend', html);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};
