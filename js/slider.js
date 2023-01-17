const sliderElement = document.querySelector('.ad-form__slider');
const inputValue = document.querySelector('#price');

const initSlider = function () {
  noUiSlider.create(sliderElement, {
    range: {
      min: 1000,
      max: 100000,
    },
    start: 5000,
    connect: 'lower',
    step: 1000,
    format: {
      to: function(val){
        return val.toFixed(0);
      },
      from: function(val) {
        return parseFloat(val);
      }
    }
  });

  sliderElement.noUiSlider.on('slide', () => {
    inputValue.value = sliderElement.noUiSlider.get();
  });

  inputValue.addEventListener('change', (evt) => sliderElement.noUiSlider.set(evt.target.value));
};

const setMinSliderValue = function(min) {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min,
      max: 100000
    }
  });
};

export {initSlider, setMinSliderValue};
