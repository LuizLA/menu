var menuLeft = document.querySelector(".menu-left")
var btnShowLeft = document.querySelector("#btn-left")
var btnCloseLeft = document.querySelector(".menu-left button")

btnShowLeft.onclick = () => {
    menuLeft.style.display = "flex"
}

btnCloseLeft.onclick = () => {
   menuLeft.style.display = "none"
}

/* INICIO RIGHT */