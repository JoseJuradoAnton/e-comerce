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


let ropa = [
    {
        id: '0',
        Name: 'Hoodies',
        price: 14,
        stock:10,
        clasfilter:"white",
        img: "./assets/images/featured1.png",

    },
    {
        id: '1',
        name: 'Shirts',
        price: 24,
        stock: 15,
        clasfilter:"black",
        img: "./assets/images/featured2.png",

    },
    {
        id: '2',
        name: 'Sweatshirts',
        price: 14,
        stock: 20,
        clasfilter:"red",
        img: "./assets/images/featured3.png",

    },
];




const ecomerceProducts = document.querySelector(".ecomerce__products");

let html = ''

ropa.forEach(callbackfn: Function, thisArg?: any)

for (let i = 0; i < 100; i++){
    html +=  `<div class="product red">
                        <div class="product__img">   
                            <img src="./assets/img/featured1.png" alt="buzo 1"> 
                        </div>
                        <div class="product__info">
                            <div class="add__cart">
                                <span>+</span>
                            </div>
                            <p>$14.00 <small>| Stock:10</small></p>
                            <p>Buzo Rojo</p>
                        </div>
                    </div>`;
        };

ecomerceProducts.innerHTML = html;