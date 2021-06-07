const NEWSLETTER_BTN_SELECTOR = document.querySelector("#aBtnNewsletter");
const NEWSLETTER_A_SELECTOR = document.querySelector("#aBtnNewsletterId");
const FORM_SELECTOR = document.querySelector('#formInputs');
const SUBSCRIPTION_BTN_SELECTOR = document.querySelector("#subscription-btn");
const BE_PART_SELECTOR = document.querySelector("#subscription-btn");
const CARDS_CONTAINER_SELECTOR = document.querySelector(".cards-container");

successNewsletterListener();

function successNewsletterListener() {
  FORM_SELECTOR.addEventListener('submit', successNewsletterMsg);
}

const FORM_INPUT_NAME = document.querySelector('#formInputName').value;
const FORM_INPUT_EMAIL = document.querySelector('#formInputEmail').value;

function successNewsletterMsg(event) {
  event.preventDefault();
  if(FORM_INPUT_NAME.length === 0 && FORM_INPUT_EMAIL.length === 0) {
    errorNewsletterMsg();
  } 
  else if (FORM_INPUT_NAME.length > 1 && FORM_INPUT_EMAIL.length > 1) {
    const NEWSLETTER_SECTION_SELECTOR = document.querySelector('#newsletterSectionId');
    const SUCCESS_MSG = document.createElement('p');
    SUCCESS_MSG.textContent = 'Tus datos fueron registrados correctamente, pronto recibirás un mensaje de confirmación en tu correo electrónico.';
    SUCCESS_MSG.classList.add('success');
    NEWSLETTER_SECTION_SELECTOR.append(SUCCESS_MSG);
    setTimeout(() => {
      SUCCESS_MSG.remove();
    }, 5000);
}
}

subscriptionBtnListener();

function subscriptionBtnListener() {
  BE_PART_SELECTOR.addEventListener('click', errorSubscriptionMsg);
  SUBSCRIPTION_BTN_SELECTOR.addEventListener('click', errorSubscriptionMsg);
}

function errorSubscriptionMsg() {
  removeDuplicateSubscription();
  const SUBSCRIPTION_ERROR_CONTAINER = document.querySelector("#subscriptionErrorContainer");
  const ERROR_MSG = document.createElement("p");
  ERROR_MSG.textContent = "¡Lo sentimos! Algo salió mal.";
  ERROR_MSG.classList.add("error");
  SUBSCRIPTION_ERROR_CONTAINER.append(ERROR_MSG);
  setTimeout(() => {
    ERROR_MSG.remove();
  }, 3000);
}

function removeDuplicateSubscription() {
  const SUBSCRIPTION_ERROR_CONTAINER = document.querySelector("#subscriptionErrorContainer");
  if (SUBSCRIPTION_ERROR_CONTAINER.lastChild) {
    SUBSCRIPTION_ERROR_CONTAINER.removeChild(SUBSCRIPTION_ERROR_CONTAINER.lastChild);
  }
}

function errorNewsletterMsg () {
  removeDuplicateNews();
  const ERROR_NEWS_CONTAINER = document.querySelector("#errorMsgContainer");
  const ERROR_MSG = document.createElement("p");
  ERROR_MSG.textContent = "No puedes enviar el formulario con campos vacíos";
  ERROR_MSG.classList.add("error");
  ERROR_NEWS_CONTAINER.append(ERROR_MSG);
  setTimeout(() => {
   ERROR_MSG.remove();
  }, 3000);
}

function removeDuplicateNews() {
  const ERROR_NEWS_CONTAINER = document.querySelector("#errorMsgContainer");
  if(ERROR_NEWS_CONTAINER.lastChild) {
    ERROR_NEWS_CONTAINER.removeChild(ERROR_NEWS_CONTAINER.lastChild);
  }
}

testFunction();

function testFunction() {
  CARDS_CONTAINER_SELECTOR.addEventListener("click", clickTesting);
}

function clickTesting(event) {
  if(event.target.classList.contains('card-body')) {
    //console.log(event.target)
    const PARENT_NEW_ELEMENT = document.querySelector('#michiCardsContainer');
    const NEW_CHILD_ELEMENT = document.createElement('p');
    NEW_CHILD_ELEMENT.textContent = 'En estos momentos no es posible realizar esa acción';
    NEW_CHILD_ELEMENT.classList.add('warning');
    PARENT_NEW_ELEMENT.append(NEW_CHILD_ELEMENT);
    setTimeout(() => {
      NEW_CHILD_ELEMENT.remove();
    }, 3000);
  }
}