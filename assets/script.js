const menu = document.querySelector(".menu");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    overlay.style.display = "none"
    hamburger.style.position = "absolute";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    overlay.style.display = "block"
    hamburger.style.position = "fixed";
  }
}

hamburger.addEventListener("click", toggleMenu);