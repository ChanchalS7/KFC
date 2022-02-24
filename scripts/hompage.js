import navbar from "../components/navbar.js";
console.log("navbar:",navbar)

let navbar_div=document.getElementById("navbar_container")

navbar_div.innerHTML=navbar();




import footer from "../components/footer.js";
console.log("footer:",footer)

let footer_div=document.getElementById("footer_container")

footer_div.innerHTML=footer();

