const searchInput = document.querySelector('.search__input');

searchInput.addEventListener('input', (event) => {
  console.log(event.target.value);
});
