// import {features, types} from './static-data.js';
// import {getRandomArrayElementOrNull, getRandomArrayElements, getRandomGeoLocation} from './utils.js';

// const avatars = [
//   'img/avatars/user01.png',
//   'img/avatars/user02.png',
//   'img/avatars/user03.png',
//   'img/avatars/user04.png',
// ];

// const titles = [
//   'Remarkable Value. Unbeatable Location',
//   'Supreme Residences for a Modern Lifestyle',
//   'Spacious Modern Living',
//   'Love Where You Live'
// ];

// // const addresses = [
// //   {
// //     lat: 35.636362,
// //     lng: 139.350206,
// //   },
// //   {
// //     lat: 35.618131,
// //     lng: 139.328577,
// //   },
// //   {
// //     lat: 35.609666,
// //     lng: 139.310420,
// //   },
// //   {
// //     lat: 35.596857,
// //     lng: 139.302143,
// //   },
// // ];

// const prices = [
//   10000,
//   35000,
//   43000,
//   17000
// ];

// const roomsAndGuests = [
//   {
//     rooms: 2,
//     guests: 2
//   },
//   {
//     rooms: 1,
//     guests: 2
//   },
//   {
//     rooms: 1,
//     guests: 1
//   },
//   {
//     rooms: 100,
//     guests: 0
//   },
// ];

// const checkInOuts = [
//   {
//     'in': '14:00',
//     'out': '10:00'
//   },
//   {
//     'in': '12:00',
//     'out': '9:00'
//   },
// ];

// const descriptions = [
//   'Don’t wait. Get Your Dream Apartment',
//   'Scenery Everywhere',
//   'An apartment that Brings More'
// ];

// const photos = [
//   'img/photos/1.jpeg',
//   'img/photos/2.jpg'
// ];

// function generateAdData() {
//   const roomsAndGuestsOption = getRandomArrayElementOrNull(roomsAndGuests);
//   const checkInOutOption = getRandomArrayElementOrNull(checkInOuts);

//   return {
//     avatar: getRandomArrayElementOrNull(avatars),
//     title: getRandomArrayElementOrNull(titles),
//     address: getRandomGeoLocation(36.3, 138.8, 35.7, 140),
//     price: getRandomArrayElementOrNull(prices),
//     type: getRandomArrayElementOrNull(types),
//     rooms: roomsAndGuestsOption.rooms,
//     guests: roomsAndGuestsOption.guests,
//     checkin: checkInOutOption.in,
//     checkout: checkInOutOption.out,
//     features: getRandomArrayElements(features),
//     description: getRandomArrayElementOrNull(descriptions, 50),
//     photo: getRandomArrayElementOrNull(photos)
//   };
// }

// function generateAdsData(numberOfAds) {
//   const ads = [];
//   for (let i = 0; i < numberOfAds; i++) {
//     ads.push(generateAdData());
//   }

//   return ads;
// }

