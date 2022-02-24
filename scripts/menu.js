var Data = [
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=9.1",
        title: "Friendship Bucket",
        price: "₹699.00",
        desc: "Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=9.1",
        title: "Bucket for Two",
        price: "₹599.00",
        desc: "Save 37% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31897-41326.jpg?ver=9.1",

        title: "Friendship Bucket",

        price: "₹699.00",
        desc: "Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30640-40488.jpg?ver=9.1",
        title: "Bucket for Two",
        price: "₹599.00",
        desc: "Save 37% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=9.1",
        title: "Friendship Bucket",
        price: "₹699.00",
        desc: "Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=9.1",
        title: "Bucket for Two",
        price: "₹599.00",
        desc: "Save 37% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=9.1",
        title: "Friendship Bucket",
        price: "₹699.00",
        desc: "Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        iamge: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=9.1",
        title: "Bucket for Two",
        price: "₹599.00",
        desc: "Save 37% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        iamge: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=9.1",
        title: "Friendship Bucket",
        price: "₹699.00",
        desc: "Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        iamge: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=9.1",
        title: "Bucket for Two",
        price: "₹599.00",
        desc: "Save 37% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        iamge:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=9.1",
        title: "Friendship Bucket",
        price: "₹699.00",
        desc: "Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
    },
    {
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=9.1",
        title: "Bucket for Two",
        price: "₹599.00",
        desc: "Save 37% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",

    }

]



// {
//     image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=9.1",
//     title:"Friendship Bucket",
//     price:"₹699.00",
//     desc:"Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [Serves 3]",
// },

cartarr = JSON.parse(localStorage.getItem("cart")) || [];
displaycart();


function displaycart() {

    var main = document.querySelector('#container')
    main.textContent = null;


    Data.map(function (elem) {
        var maindiv = document.createElement('div');

        var image = document.createElement('img');
        image.src = elem.image;

        var head = document.createElement('h3');
        head.textContent = elem.title;

        var price = document.createElement('p');
        price.textContent = elem.price;

        var desc = document.createElement('p');
        desc.textContent = elem.desc;

        var btn = document.createElement("button");
       
        btn.textContent = "Add to Cart +";
        
        
       btn.addEventListener("click", function (){
            btnfunc(elem)
        });

        // console.log(image, head, price, desc);
        maindiv.append(image, head, price, desc,btn);
        document.querySelector('#container').append(maindiv);
        //
       
        btn.setAttribute('id',"addcart");
    });


}

function btnfunc(elem) {

    cartarr.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartarr));
    displaycart()
}