window.onload = getMenuLinks();

function getMenuLinks() {
    let navBar = document.querySelector(".navBar-links");
    let nElemento = "";

    dataLinksMenu.map((d) => {
        nElemento = nElemento + `<a id=${d.id} href="${d.link}">${d.nombre}</a>`;
    });

    navBar.innerHTML = nElemento;
};

function navBarBtn_click(elemento) {
   elemento.classList.toggle("navBar-btn_click");
}