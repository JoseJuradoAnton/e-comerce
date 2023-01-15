mixitup(".ecomerce__products", {
    selectors: {
        target: ".product",
    },
    animation: {
        duration: 300,
    },
});

const iconClose = document.querySelector(".bx-x");
const iconOpen = document.querySelector(".bx-grid-alt");
const menu = document.querySelector(".menu");

[iconClose, iconOpen].forEach((icon) => {
    icon.addEventListener("click", () => menu.classList.toggle("menu__show"));
});


{
    const iconCart = document.querySelector(".bx-shopping-bag");
    const contentcar = document.querySelector(".contentCar"); 

    iconCart.addEventListener("click", function () {
        contentcar.classList.toggle("contentCart__show");
    }) ;
}


let collections = [
    {
        id: '0',
        Name: 'Hoodies',
        Price: 14,
        Stock:10,
        urlImage: "./assets/images/featured1.png"

    },
    {
        id: '1',
        Name: 'Shirts',
        Price: 24,
        Stock: 15,
        urlImage: "./assets/images/featured2.png"

    },
    {
        id: '2',
        Name: 'Sweatshirts',
        Price: 14,
        Stock: 20,
        urlImage: "./assets/images/featured3.png"

    },
];

const products = document.querySelector(".products");

function printProducts(){
    let html = 'hola q mas';




} 

