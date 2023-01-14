// -- NavBar --------------------------------------------------------------->
// ------------------------------------------------------------------------->
window.onload = getMenuLinks();

function getMenuLinks() {
    let navBarlinks = document.querySelector(".navBar-links");
    let nElemento = "";

    dataLinksMenu.map((d) => {
        // nElemento = nElemento + `<a id=${d.id} name="${d.link}" onclick="menuLink_click(this)">${d.nombre}</a>`;
        nElemento = nElemento + `<a id=${d.id} href="${d.link}" target="_blank" onclick="menuLink_click(this)">${d.nombre}</a>`;
    });

    navBarlinks.innerHTML = nElemento;
};

function menuLink_click(obj) {
    console.dir(obj.name);
    navBarBtn_click();
};

function navBarBtn_click() {
    let navBarBtn = document.querySelector(".navBar-btn");
    let navBarlinks = document.querySelector(".navBar-links"); 
    navBarBtn.classList.toggle("navBar-btn_click");
    navBarlinks.classList.toggle("navBar-links_noOcultar");
};


// -- Carrusel ------------------------------------------------------------->
// ------------------------------------------------------------------------->




// -- Acordion ------------------------------------------------------------->
// ------------------------------------------------------------------------->
window.addEventListener("resize", () => {
    accord = document.getElementsByClassName("acordion");

    for (let i = 0; i < accord.length; i++) {
        if (accord[i].nextElementSibling.style.maxHeight) {
            accord[i].nextElementSibling.style.maxHeight = null
            accord[i].classList.remove("active");
        }  
    }
});

function acordion_click(obj) {
    obj.classList.toggle("active");
    let hijo = obj.nextElementSibling;

    if (hijo.style.maxHeight) {
        hijo.style.maxHeight = null;
    } else {
        hijo.style.maxHeight = hijo.scrollHeight + "px";
    }
};

function acordion_llenarItems(){
    let addItems = document.querySelector(".acordion-list");
    let newItem = `<div key=${1} value="${1}" class="acordion-list-titulo">${"Cervezas Artesanales"}</div>`;

    dataItem.map((d) => {
        newItem = newItem + `<button class="acordion" onclick="acordion_click(this)">${d.nombre}</button>`;
        newItem = newItem + `<div class="acordion-contenido">`;
        newItem = newItem + `<img class="acordion-contenido-img" src="${d.link}">`;
        newItem = newItem + `<p>${d.descripcion}</p>`;
        newItem = newItem + `<p>Precio <strong>${d.precio} .-</strong></p>`;
        newItem = newItem + `<button value=${d.id} class="btn animacion" onclick="agregarItem_click(this)"><span>Agregar</span></button></div>`;
    });

    addItems.innerHTML = newItem;
};

let carrito = [];

function agregarItem_click(obj) {
    let carritoCant = document.querySelector(".carrito-cont");
    
    dataItem.map((d, index, arr) => {
        if (d.id == obj.value) {
            carrito.push(d);
            console.log(d);
            console.log(arr);
        }
    });

    carrito.sort;
    carritoCant.textContent = carrito.length;
    console.log(carrito);
};


// ------------------------------------------------------------------------->
// ------------------------------------------------------------------------->

