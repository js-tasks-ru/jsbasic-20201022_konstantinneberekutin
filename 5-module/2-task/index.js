function toggleText() {
  const buttonElement = document.querySelector('.toggle-text-button');
  const textElement = document.querySelector('#text');

  buttonElement.addEventListener('click', () => {
    textElement.toggleAttribute('hidden');
  });
}
