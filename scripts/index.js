var openPopupBtn=document.querySelector('.open-popup-btn');
var closePopupBtn=document.querySelector('.popup-close-btn');

openPopupBtn.addEventListener("click",function(){
document.body .classList.add("popup-active");
});
closePopupBtn.addEventListener("click",function(){
document.body .classList.remove("popup-active");
});