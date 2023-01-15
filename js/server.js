import { populateMap } from './map.js';
import { generateAds } from './utils.js';

const errorPopUp = document.querySelector('.network-error');

const getAds = function() {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      const adsWithHTML = generateAds(ads);
      populateMap(adsWithHTML);
      errorPopUp.classList.add('hidden');
    })
    .catch(() => {
      errorPopUp.classList.remove('hidden');
    });


};
const publishAd = function(formData) {
  return fetch('https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData
    });
};

export {getAds , publishAd};
