const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');
const mobileSection = document.querySelector('.mobile-section');

toggleSidebarBtn.addEventListener('click', (e) => {
  if (mobileSection.classList.contains('-right-40')) {
    mobileSection.classList.remove('-right-40');
    mobileSection.classList.add('right-0');
  } else {
    mobileSection.classList.remove('right-0');
    mobileSection.classList.add('-right-40');
  }
});

//
const loading = document.querySelector('.loading');
window.addEventListener('DOMContentLoaded', () => {
  let currentWidth = 0;
  let currentLeft = 0;

  const timer = setInterval(() => {
    currentWidth += 1;
    loading.style.width = `${currentWidth}%`;

    if (currentWidth >= 100) {
      currentLeft += 5;
      loading.style.left = `${currentLeft}%`;

      if (currentLeft >= 100) {
        clearTimeout(timer);
      }
    }
  }, 10);
});
