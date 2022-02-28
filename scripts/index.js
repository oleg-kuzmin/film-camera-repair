const headerForm = document.querySelector('#headerForm');
const headerFormEmail = document.querySelector('#headerFormEmail');
const headerFormBtnSubmit = document.querySelector('#headerFormBtnSubmit');
const footerForm = document.querySelector('#footerForm');
const footerFormEmail = document.querySelector('#footerFormEmail');
const footerFormBtnSubmit = document.querySelector('#footerFormBtnSubmit');

function disableAllFormBtn () {
  headerFormBtnSubmit.classList.add('form__button-submit_click');
  footerFormBtnSubmit.classList.add('form__button-submit_click');
  headerFormEmail.setAttribute('disabled', 'true');  
  footerFormEmail.setAttribute('disabled', 'true');
  headerFormBtnSubmit.classList.add('form__button-submit_not-active');
  footerFormBtnSubmit.classList.add('form__button-submit_not-active');
  headerFormEmail.classList.add('form__input-email_not-active');
  footerFormEmail.classList.add('form__input-email_not-active');
} 

function submitHeaderForm(evt) {
  evt.preventDefault();
  disableAllFormBtn();
  evt.target.reset();
}

function submitFooterForm(evt) {
  evt.preventDefault();
  disableAllFormBtn();
  evt.target.reset();
}

headerForm.addEventListener('submit', submitHeaderForm);
footerForm.addEventListener('submit', submitFooterForm);