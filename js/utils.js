function getRandom(minParam, maxParam) {
  const min = Math.min(minParam, maxParam);
  const max = Math.max(minParam, maxParam);

  return Math.random() * (max - min) + min;
}

function getRandomInt(minParam, maxParam) {
  return Math.round(getRandom(minParam, maxParam));
}

function getRandomArrayElementOrNull(a, nullProbability = 0) {
  if (nullProbability > 0 && getRandomInt(0, 100) < nullProbability) {
    return null;
  }

  return a[getRandomInt(0, a.length - 1)];
}

function getRandomArrayElements(a) {
  const amount = getRandomInt(0, a.length - 1);
  const result = [];
  const notSelectedElements = [...a];

  for (let i = 0; i < amount; i++) {
    const randomElement = getRandomArrayElementOrNull(notSelectedElements);
    result.push(randomElement);
    const randomElementIndex = notSelectedElements.indexOf(randomElement);
    notSelectedElements.splice(randomElementIndex, 1);
  }

  return result;
}

function getRandomGeoLocation(top, right, bottom, left) {
  const lat = getRandom(top, bottom);
  const lng = getRandom(left, right);
  return {
    lat,
    lng
  };
}

function generateAds(adsData) {

  const adTemplate = document.querySelector('#card').content;

  const ads = [];


  for (const adData of adsData) {
    const clone = adTemplate.cloneNode(true);
    clone.querySelector('.popup__avatar').src = adData.author.avatar;
    clone.querySelector('.popup__title').textContent = adData.offer.title;
    clone.querySelector('.popup__text--address').textContent = adData.offer.address;
    clone.querySelector('.popup__text--price').innerHTML = `${adData.offer.price} <span>₽/ночь</span>`;
    let typeLocalization;
    if (adData.offer.type === 'flat') {
      typeLocalization = 'Квартира';
    } else if (adData.offer.type === 'bungalow') {
      typeLocalization = 'Бунгало';
    } else if (adData.offer.type === 'house') {
      typeLocalization = 'Дом';
    } else if (adData.offer.type === 'palace') {
      typeLocalization = 'Дворец';
    } else if (adData.offer.type === 'hotel') {
      typeLocalization = 'Отель';
    }

    clone.querySelector('.popup__type').textContent = typeLocalization;
    clone.querySelector('.popup__text--capacity').textContent = `${adData.offer.rooms} комнаты для ${adData.offer.guests} гостей`;
    clone.querySelector('.popup__text--time').textContent = `Заезд после ${adData.offer.checkin}, выезд до ${adData.offer.checkout}`;

    const featuresNodes = clone.querySelectorAll('.popup__feature');
    for (const featureNode of featuresNodes) {
      if (!adData.offer.features || !adData.offer.features.some((f) => featureNode.classList[1].includes(f))) {
        featureNode.remove();
      }
    }

    const descriptionNode = clone.querySelector('.popup__description');
    if (adData.offer.description === null) {
      descriptionNode.remove();
    } else {
      descriptionNode.textContent = adData.offer.description;
    }

    if (!adData.offer.photos || adData.offer.photos.length === 0) {
      clone.querySelector('.popup__photos').remove();
    } else if (adData.offer.photos.length === 1) {
      clone.querySelector('.popup__photo').src = adData.offer.photos[0];
    }
    else {
      const photo = clone.querySelector('.popup__photo');
      photo.src = adData.offer.photos[0];
      for (let i = 1; i < adData.offer.photos.length; i++) {
        const clonePhoto = photo.cloneNode(true);
        clonePhoto.src = adData.offer.photos[i];
        clone.querySelector('.popup__photos').appendChild(clonePhoto);
      }
    }


    ads.push({
      data: adData,
      card: clone,
    });
  }

  return ads;
}

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


export {getRandomInt, getRandomArrayElementOrNull, getRandomArrayElements, getRandomGeoLocation, generateAds, debounce};

