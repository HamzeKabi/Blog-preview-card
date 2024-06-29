document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('.heading');
  const contentHolder = document.querySelector('.content-holder');
  heading.addEventListener('click', () => {
    contentHolder.style.boxShadow = '1.7vw 2.9vh';
    heading.style.color = 'yellow';
  });
});
