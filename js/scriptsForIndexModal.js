let inputModal = document.querySelector(".input__modal");
let contactButton = document.querySelector('.contact_button');
let cancelInput = inputModal.querySelector('.cancel__button');
let selfname = inputModal.querySelector("[name=selfname]");
let email = inputModal.querySelector("[name=email]");
let textletter = inputModal.querySelector("[name=mail-text]")
let isStorageSupport = false;
let storage = "";
let form = document.querySelector("form");
//Для модального окна с формой обратной связи
form.addEventListener('submit', function(evt){
  if (!selfname.value||!email.value||!textletter.value){
      evt.preventDefault();
      form.classList.remove("modal-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("modal-error");
  }else{
      if(isStorageSupport){
          localStorage.setItem("selfname", selfname.value);
          localStorage.setItem("email", email.value);
          localStorage.setItem("textlette", textletter.value);
      }
  }
});
try{
    storage = localStorage.getItem("selfname");
  } catch (err){
    isStorageSupport = false;
  };
contactButton.addEventListener('click', function () {
    inputModal.classList.add('modal-show');
    inputModal.classList.remove('modal-error');
    selfname.focus();
    if(storage){
      selfname.value = storage;
      email.focus();
    } else {
      selfname.focus();
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (inputModal.classList.contains('modal-show')){
        evt.preventDefault();
        inputModal.classList.remove('modal-show');
        inputModal.classList.remove('modal-error');
      }
    }
  });
  cancelInput.addEventListener('click', function () {
    if (inputModal.classList.contains('modal-show')){
      inputModal.classList.remove('modal-show');
      inputModal.classList.remove('modal-error');
    }
  });

//Для модального окна карты.
  let mapModal = document.querySelector('.map__modal');
  let mapOpen = document.querySelector('.js_open_map');
  let cancelMap = mapModal.querySelector('.cancel__button');
  mapOpen.addEventListener('click', function () {
    mapModal.classList.add('modal-show');
  });
  cancelMap.addEventListener('click', function () {
    mapModal.classList.remove('modal-show');
  });
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      mapModal.classList.remove('modal-show');
    }
  });