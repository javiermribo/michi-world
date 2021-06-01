const SUBSCRIPTION_BTN_SELECTOR = document.querySelector("#bodyIdItem");

myEvtListener();

function myEvtListener() {
  SUBSCRIPTION_BTN_SELECTOR.addEventListener('click', errorMsgBanner);
}

function errorMsgBanner(event) {
  event.preventDefault();
  const SECTION_SELECTOR = document.querySelector("#cat-domination-plan");
  const ERROR_MSG = document.createElement('p');
  ERROR_MSG.textContent = '¡Lo sentimos! Algo salió mal.';
  ERROR_MSG.classList.add('error');
  SECTION_SELECTOR.append(ERROR_MSG);
  setTimeout(() => {
    ERROR_MSG.remove();
  }, 3000)
}