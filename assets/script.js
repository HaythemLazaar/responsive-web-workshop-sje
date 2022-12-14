const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const closeIcon = document.querySelector(".closeIcon")
const menuIcon = document.querySelector(".menuIcon")
const overlay = document.querySelector(".overlay")

function toggleMenu(){
    if(menu.classList.contains(".showMenu")){
        menu.classList.remove(".showMenu")
        menuIcon.style.display = "block"
        closeIcon.style.display = "none"
        overlay.style.display = "none"
    }else{
        menu.classList.add(".showMenu")
        menuIcon.style.display = "none"
        closeIcon.style.display = "block"
        overlay.style.display = "block"
    }
}


hamburger.addEventListener("click", toggleMenu())