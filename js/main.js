mixitup(".ecomerce__products", {
    selectors: {
        target: '.product',
    },
    animation: {
        duration: 300,
    },
});

const iconClose = document.querySelector(".bx-x");
const iconOpen = document.querySelector(".bx-grid-alt");
const menu = document.querySelector(".menu");
const headerNavbar = document.querySelector(".header__navbar");

[iconClose, iconOpen].forEach((icon) => {
    icon.addEventListener("click", () => menu.classList.toggle("menu__show"));
});

    window.addEventListener("scroll", () => {
        if(window.scrollspy > 50){
            headerNavbar.classList.add("header__Navbar-animation");
        }else{
            headerNavbar.classList.remove("header__Navbar-animation");
        }
    });

    const iconCart = document.querySelector(".bx-shopping-bag");
    const contentcar = document.querySelector(".contentCar"); 

    iconCart.addEventListener("click", function () {
        contentcar.classList.toggle("contentCart__show");
    }) ;



let ropas = [
    {
        id: "0",
        name: "Hoodies",
        price: 14,
        stock: 10,
        clasfilter:"white",
        img: "./assets/img/featured1.png",

    },
    {
        id: "1",
        name: "Shirts",
        price: 24,
        stock: 15,
        clasfilter:"black",
        img: "./assets/img/featured2.png",

    },
    {
        id: "2",
        name: "Sweatshirts",
        price: 17,
        stock: 20,
        clasfilter:"red",
        img: "./assets/img/featured3.png",

    },
];

const ecomerceProducts = document.querySelector(".ecomerce__products");
const carProducts = document.querySelector(".carProducts");
let objCart = [];

function printProductsInCart() {
    let html = "";

    const arrayCart = Object.values(objCart);

    arrayCart.forEach( function({id, name, price, stock,clasfilter,img,amount }) {
        html  +=`

                 <div class="product ${clasfilter}">
                    <div class="product__imgcart">
                        <img src="${img}" alt="${name}"> 
                    </div>
                    <div class="product__info" id="${id}">
                        <p>${name}</p>
                        <p> <small>Stock:${stock} | ${price}.00</small></p>
                        <p>Subtotal 14 </p>
                            <div class="product__options" id="${id}">
                                <i class='bx bx-minus'></i>
                                <span>${amount} Units</span>
                                <i class='bx bx-plus'></i>
                                <i class='bx bx-trash'></i>
                            </div>
                    </div>

                </div>`
    });

    carProducts.innerHTML = html;
};

function printProducts() {
    let html = "";

    ropas.forEach( function({id, name, price, stock,clasfilter,img }) {
        html  +=`
        <div class="product ${clasfilter}">
                    <div class="product__img">   
                        <img src="${img}" alt="${name}"> 
                    </div>
                    <div class="product__info" id="${id}"> 
                        <div class="add__cart">
                            <span class="add___cart">+</span>
                        </div>
                        <p>${price}.00 <small>| Stock:${stock}</small></p>
                        <p>${name}</p>
                    </div>
                </div>`
    });

    ecomerceProducts.innerHTML = html;
};

    ecomerceProducts.addEventListener("click", function(e) {
        if (e.target.classList.contains("add__cart")) { 
            //Obtener el I
            const id = e.target.parentElement.id;

            //Obtener el producto por ID
            let findProduct = ropas.find(function(ropa){
                return ropa.id === id;
            });

           /*logica del carro */
            if (objCart[id]) {
                objCart[id].amount++;

            }else {
                objCart[id] = {
                    ...findProduct,
                    amount : 1,
                };
            }

        };

 printProductsInCart();
});

// funcion para botones añadir y eliminar
carProducts.addEventListener("click", function (e) {
    if (e.target.classList.contains("bx-minus")) {
        const id = e.target.parentElement.id;
        
        if (objCart[id].amount === 1) {
            const res = confirm("Seguro quieres eliminar este producto");
           if (res) delete objCart[id];
        }else{
            objCart[id].amount--;
        }
    }; 


    if (e.target.classList.contains("bx-plus")) {
        const id = e.target.parentElement.id;

        let findProduct = ropas.find(function(ropa){
                return ropa.id === id;
            });

        if (findProduct.stock === objCart[id].amount) {
            alert("No tengo mas en stock");
            return
        }else{
            objCart[id].amount++;
        }
     };



    if (e.target.classList.contains("bx-trash")) {
        const id = e.target.parentElement.id;

        const res = confirm("Seguro quieres eliminar este producto");
                if (res) delete objCart[id]
    };

    printProductsInCart()
});

printProducts();