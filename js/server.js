import { enableFilterForm } from './form.js';
import { populateMap, clearMap } from './map.js';
import { generateAds, debounce } from './utils.js';

const errorPopUp = document.querySelector('.network-error');

const getAds = debounce((filter) => {
  clearMap();
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      const adsWithHTML = generateAds(filter(ads));
      populateMap(adsWithHTML);
      enableFilterForm(true);
      errorPopUp.classList.add('hidden');
    })
    .catch(() => {
      enableFilterForm(false);
      errorPopUp.classList.remove('hidden');
    });
});

const publishAd = function(formData) {
  return fetch('https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData
    });
};

export {getAds, publishAd};
