const sliderElement = document.querySelector('.ad-form__slider');
const inputValue = document.querySelector('#price');

const initSlider = function () {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 0,
    connect: 'lower',
    step: 1000,
    format: {
      to: function(val){
        if (Number.isInteger(val)) {
          return val.toFixed(0);
        }
        return val.toFixed(1);
      },
      from: function(val) {
        return parseFloat(val);
      }
    }
  });

  sliderElement.noUiSlider.on('update', () => {
    inputValue.value = sliderElement.noUiSlider.get();
  });

  // inputValue.addEventListener('change', (evt) => sliderElement.noUiSlider.set(evt.target.value));
};

const setMinSliderValue = function(minParam) {
  const min = parseFloat(minParam);
  sliderElement.noUiSlider.updateOptions({
    range: {
      min,
      max: 100000
    }
  });
  sliderElement.noUiSlider.set(min);
};

export {initSlider, setMinSliderValue};
