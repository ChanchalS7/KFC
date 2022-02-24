let mycart = JSON.parse(localStorage.getItem("cart"));
displaycart()



function displaycart(){
  document.querySelector("#cartitem").innerHTML = null;

  mycart.map(function (elem, index) {
  var maindiv = document.createElement("div");

  var image = document.createElement("img");
  image.src = elem.image;

  var head = document.createElement("h3");
  head.textContent = elem.title;

  var price = document.createElement("p");
  price.textContent = elem.price;

  var desc = document.createElement("p");
  desc.textContent = elem.desc;

  var btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.addEventListener("click", function () {
    btnfunc(index);
  });

  // console.log(image, head, price, desc);
  maindiv.append(image, head, price, desc, btn);
  document.querySelector("#cartitem").append(maindiv);
  
  btn.setAttribute('id',"addcart");
  
});

}
function btnfunc(index) {
  mycart.splice(index, 1);
  console.log(mycart.length);
  localStorage.setItem("cart", JSON.stringify(mycart));
  displaycart();
}

document.getElementById('checkOut').addEventListener('click',goTo)
function goTo(){
    window.location.href="checkout.html"
}