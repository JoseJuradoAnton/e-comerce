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
        img: "./assets/img/featured1.png",

    },
    {
        id: '1',
        name: 'Shirts',
        price: 24,
        stock: 15,
        clasfilter:"black",
        img: "./assets/img/featured2.png",

    },
    {
        id: '2',
        name: 'Sweatshirts',
        price: 17,
        stock: 20,
        clasfilter:"red",
        img: "./assets/img/featured3.png",

    },
];


const ecomerceProducts = document.querySelector(".ecomerce__products");

function printProducts(elementHTML,array){
                let html = "";
                array.forEach(({clasfilter,id,name,price,stock,img}) => {

                html +=  
                        `<div class="product ${clasfilter}">
                            <div class="product__img">   
                                <img src="${img}" alt="${name}"> 
                            </div>
                            <div class="product__info">
                                <div class="add__cart" id="${id}">
                                    <span>+</span>
                                </div>
                                <p>${price}.00 <small>| Stock:${stock}</small></p>
                                <p>Buzo Rojo</p>
                            </div>
                        </div>`;
                                         
                });

                ecomerceProducts.innerHTML = html;


}

printProducts(ecomerceProducts, ropa);