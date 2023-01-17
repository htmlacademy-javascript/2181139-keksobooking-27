import { publishAd } from './server.js';
import { resetMap } from './map.js';
import { initSlider, setMinSliderValue } from './slider.js';

let pristine;
const form = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');

const showSuccessMessage = function() {
  const successMessage = document.querySelector('#success').content;
  const cloneSuccess = successMessage.cloneNode(true);
  document.body.appendChild(cloneSuccess);
  const successElement = document.querySelector('.success');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successElement.remove();
    }
  });
  document.body.addEventListener('click', () => successElement.remove());
};

const showErrorMessage = function() {
  const errorMessage = document.querySelector('#error').content;
  const cloneError = errorMessage.cloneNode(true);

  document.body.appendChild(cloneError);
  const errorElement = document.querySelector('.error');
  errorElement.querySelector('.error__button').addEventListener('click', () => errorElement.remove());

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      errorElement.remove();
    }
  });
  document.body.addEventListener('click', () => errorElement.remove());
};

const resetForms = function () {
  form.reset();
  filtersForm.reset();
};

function initPristine() {
  pristine = new Pristine(form, {
    // class of the parent element where the error/success class is added
    classTo: 'ad-form__element',
    errorClass: 'has-danger',
    successClass: 'has-success',
    // class of the parent element where error text element is appended
    errorTextParent: 'ad-form__element',
    // type of element to create for the error text
    errorTextTag: 'span',
    // class of the error text element
    errorTextClass: 'text-help'
  });

  const capacity = document.querySelector('#capacity');
  const roomNumber = document.querySelector('#room_number');
  pristine.addValidator(capacity, (value) => {
    switch(value) {
      case '3':
        return roomNumber.value === '3';
      case '2':
        return roomNumber.value === '2' || roomNumber.value === '3';
      case '1':
        return roomNumber.value === '1' || roomNumber.value === '2' || roomNumber.value === '3';
      case '0':
        return roomNumber.value === '100';
    }
    return false;
  }, 'Wrong capacity', 1, false);
}

function initForm() {
  initPristine();
  initSlider();

  const typeSelect = document.querySelector('#type');
  const priceInput = document.querySelector('#price');
  let minPrice;

  typeSelect.addEventListener('change', (evt) => {
    switch (evt.target.value) {
      case 'bungalow':
        minPrice = 0;
        break;
      case 'flat':
        minPrice = 1000;
        break;
      case 'hotel':
        minPrice = 3000;
        break;
      case 'house':
        minPrice = 5000;
        break;
      case 'palace':
        minPrice = 10000;
        break;
    }
    priceInput.min = minPrice;
    priceInput.placeholder = minPrice;
    setMinSliderValue(minPrice);
    pristine.reset();
    initPristine(form);
    if (priceInput.value !== '') {
      pristine.validate(priceInput);
    }
  });

  const timeInSelect = document.querySelector('#timein');
  const timeOutSelect = document.querySelector('#timeout');

  timeInSelect.addEventListener('change', (evt) => {
    timeOutSelect.value = evt.target.value;
  });

  timeOutSelect.addEventListener('change', (evt)=> {
    timeInSelect.value = evt.target.value;
  });

  form.addEventListener('submit', (evt)=> {
    evt.preventDefault();
    const valid = pristine.validate();
    if (!valid) {
      return;
    }
    const submit = document.querySelector('.ad-form__submit');
    submit.disabled = true;
    publishAd(new FormData(evt.target)).then((resp) => {
      if (resp.status !== 200) {
        submit.disabled = false;
        showErrorMessage();
        return;
      }
      submit.disabled = false;
      resetForms();
      resetMap();
      showSuccessMessage();
    }).catch(() => {
      submit.disabled = false;
      showErrorMessage();
    });
  });

  document.querySelector('.ad-form__reset').addEventListener('click', () => {
    resetForms();
    resetMap();
  });
}

const disableForm = function() {
  form.classList.add('ad-form--disabled');
  for (const el of form.children) {
    if (el.tagName === 'FIELDSET'){
      el.disabled = true;
    }
  }
  filtersForm.classList.add('map__filters--disabled');
  for (const el of filtersForm.children) {
    if (el.tagName === 'FIELDSET' || el.tagName === 'SELECT'){
      el.disabled = true;
    }
  }
};
const enableForm = function() {
  form.classList.remove('ad-form--disabled');
  for (const el of form.children) {
    if (el.tagName === 'FIELDSET'){
      el.disabled = false;
    }
  }
  filtersForm.classList.remove('map__filters--disabled');
  for (const el of filtersForm.children) {
    if (el.tagName === 'FIELDSET' || el.tagName === 'SELECT'){
      el.disabled = false;
    }
  }

};


const toggleForm = function(active) {
  if (active){
    enableForm();
  } else {
    disableForm();
  }
};
export { initForm, toggleForm};


