function hideSelf() {
  const buttonHid = document.querySelector('button');
  buttonHid.addEventListener('click', hideSelf);
  event.preventDefault();
  return buttonHid.hidden = true;
}






