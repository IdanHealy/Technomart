let inputModal = document.querySelector(".input__modal");
let contactButton = document.querySelector('.contact_button');
let cancelButton = inputModal.querySelector('.cancel__button');

contactButton.addEventListener('click', function () {
    inputModal.classList.add('modal--show');
  });

  cancelButton.addEventListener('click', function () {
    inputModal.classList.remove('modal--show');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      inputModal.classList.remove('modal--show');
    }
  });



  let mapModal = document.querySelector('.map__modal');
  let mapOpen = document.querySelector('.js_open_map');
  let cancelMap = mapModal.querySelector('.cancel__button');

  mapOpen.addEventListener('click', function () {
    mapModal.classList.add('modal--show');
  });

  cancelMap.addEventListener('click', function () {
    mapModal.classList.remove('modal--show');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      mapModal.classList.remove('modal--show');
    }
  });
