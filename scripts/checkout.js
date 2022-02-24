document.querySelector('#backToCart').addEventListener('click',function(){
    window.location.href="cart.html";
})
document.getElementById('pay').addEventListener('click',payOpt)
function payOpt(){
    window.location.href="payment.html";
}