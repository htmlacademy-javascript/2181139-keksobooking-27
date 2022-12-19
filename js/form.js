
function initForm() {
  const typeSelect = document.querySelector('#type');
  const price = document.querySelector('#price');
  typeSelect.addEventListener('change', (evt) => {
    switch(evt.target.value) {
      case 'bungalow':
        price.min = 0;
        price.placeholder = '0';
        break;
      case 'flat':
        price.min = 1000;
        price.placeholder = '1000';
        break;
      case 'hotel':
        price.min = 3000;
        price.placeholder = '3000';
        break;
      case 'house':
        price.min = 5000;
        price.placeholder = '5000';
        break;
      case 'palace':
        price.min = 10000;
        price.placeholder = '10000';
        break;
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

  const form = document.querySelector('.ad-form');
  const pristine = new Pristine(form, {
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

  form.addEventListener('submit', (evt)=> {
    const valid = pristine.validate();
    if(!valid){
      console.log(pristine.getErrors());
      evt.preventDefault();
    }
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


export { initForm };
