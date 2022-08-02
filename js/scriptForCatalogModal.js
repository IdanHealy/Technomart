let buttonBuy = document.querySelectorAll(".buy");
let addModal = document.querySelector('.add-item__modal');
let closeButton = addModal.querySelector(".cancel__button");
for (let i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener('click', function (event){
        event.preventDefault();
        addModal.classList.add('modal-show')})};
closeButton.addEventListener("click", function(){
addModal.classList.remove('modal-show');
});