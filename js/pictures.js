
const avatarPictureImg = document.querySelector('#ad-form-avatar');
const avatarPictureInput = document.querySelector('#avatar');
const picturesInput = document.querySelector('#images');
const picturesContainer = document.querySelector('.ad-form__photo-container');

const initPictures = function() {
  avatarPictureInput.addEventListener('change', () => {
    const selectedPicture = avatarPictureInput.files[0];
    avatarPictureImg.src = URL.createObjectURL(selectedPicture);
  });

  picturesInput.addEventListener('change', () => {
    const existingPics = picturesContainer.querySelectorAll('.ad-form__photo');
    for (const existingPic of existingPics) {
      existingPic.remove();
    }
    const apartmentPictures = picturesInput.files;
    for (const apartmentPicture of apartmentPictures){
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('ad-form__photo');
      const newImg = document.createElement('img');
      newImg.classList.add('picture');
      newImg.src = URL.createObjectURL(apartmentPicture);
      imgContainer.appendChild(newImg);

      picturesContainer.appendChild(imgContainer);
    }
  });
};

export {initPictures};
