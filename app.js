const NEWSLETTER_BTN_SELECTOR = document.querySelector('#aBtnNewsletter');
const FORM_SELECTOR = document.querySelector('#formInputs');

successNewsletterListener();

function successNewsletterListener() {
  NEWSLETTER_BTN_SELECTOR.addEventListener('click', successNewsletterMsg);
}

function successNewsletterMsg(event) {
  event.preventDefault();
  const FORM_INPUT_NAME = document.querySelector('#formInputName').value;
  const FORM_INPUT_EMAIL = document.querySelector('#formInputEmail').value;
  if(FORM_INPUT_NAME.length >= 0 && FORM_INPUT_EMAIL.length >= 0) {
    errorNewsletterMsg();
    return;
  }
  const NEWSLETTER_SECTION_SELECTOR = document.querySelector('#newsletterSectionId');
  const SUCCESS_MSG = document.createElement('p');
  SUCCESS_MSG.textContent = 'Tus datos fueron registrados correctamente, pronto recibirás un mensaje de confirmación en tu correo electrónico.';
  SUCCESS_MSG.classList.add('success');
  NEWSLETTER_SECTION_SELECTOR.append(SUCCESS_MSG);
  setTimeout(() => {
    SUCCESS_MSG.remove();
  }, 5000);
}

const SUBSCRIPTION_BTN_SELECTOR = document.querySelector("#cat-domination-plan");


subscriptionBtnListener();

function subscriptionBtnListener() {
  SUBSCRIPTION_BTN_SELECTOR.addEventListener('click', errorSubscriptionMsg);
}

function errorSubscriptionMsg() {
  const SECTION_SELECTOR = document.querySelector("#cat-domination-plan");
  const ERROR_MSG = document.createElement("p");
  ERROR_MSG.textContent = "¡Lo sentimos! Algo salió mal.";
  ERROR_MSG.classList.add("error");
  SECTION_SELECTOR.append(ERROR_MSG);
  setTimeout(() => {
    ERROR_MSG.remove();
  }, 3000);
}

function errorNewsletterMsg () {
  const NEWSLETTER_ID_SELECTOR = document.querySelector("#newsletterSectionId");
  const ERROR_MSG = document.createElement("p");
  ERROR_MSG.textContent = "No puedes enviar el formulario con campos vacíos";
  ERROR_MSG.classList.add("error");
  NEWSLETTER_ID_SELECTOR.append(ERROR_MSG);
  setTimeout(() => {
   ERROR_MSG.remove();
  }, 3000);
}


const CARDS_CONTAINER_SELECTOR = document.querySelector(".cards-container");

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