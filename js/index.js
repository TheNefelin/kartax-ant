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
//  var acc = document.getElementsByClassName("acordion");
//  var i;

//  console.log(acc.length);

//  for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//      var panel = this.nextElementSibling;
//      if (panel.style.maxHeight) {
//        panel.style.maxHeight = null;
//      } else {
//        panel.style.maxHeight = panel.scrollHeight + "px";
//      } 
//    });
//  }

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
}



// ------------------------------------------------------------------------->
// ------------------------------------------------------------------------->

