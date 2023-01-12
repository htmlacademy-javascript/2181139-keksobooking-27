import { populateMap } from './map.js';

const getAds = function() {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => populateMap(ads));


};


export {getAds};