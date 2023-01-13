// -- NavBar ------------------------------------------------------------->
// ----------------------------------------------------------------------->
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

function menuLink_click(a) {
    console.dir(a.name);
    navBarBtn_click();
};

function navBarBtn_click() {
    let navBarBtn = document.querySelector(".navBar-btn");
    let navBarlinks = document.querySelector(".navBar-links"); 
    navBarBtn.classList.toggle("navBar-btn_click");
    navBarlinks.classList.toggle("navBar-links_noOcultar");
};


// -- Carrusel ------------------------------------------------------------->
// ----------------------------------------------------------------------->




// ----------------------------------------------------------------------->
// ----------------------------------------------------------------------->

