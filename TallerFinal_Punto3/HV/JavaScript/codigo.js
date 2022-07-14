const button = document.getElementById("selec-theme");
const ulTheme = document.getElementById("nav__ul_theme");
const buttonTheme = document.querySelectorAll(".nav_li_theme");

//* -------------------------------------------------------
const navColor = document.querySelector(".nav-color");
const navTextColor = document.querySelector(".nav_li");
const bodyColor = document.getElementById("index");

function modifyValueMouseover(){
    ulTheme.style.display = "block";
    button.value = "Tema";
}

function modifyValueMouseout(){
    button.value = "";
}

function modifyDislay(){
    ulTheme.style.display = "none";
}

function themeOriginal(){
    navColor.style.backgroundColor = `#000000`;
    navTextColor.style.color = `#FAFAFA`;
    bodyColor.style.background = `linear-gradient(70deg, #fb5d92bc,white)`;
}

function themeBender(){
    navColor.style.backgroundColor = `rgb(144, 144, 144)`;
    navTextColor.style.color = `#FAFAFA`;
    bodyColor.style.background = `linear-gradient(70deg, #fdfac2,white)`;
}

function themeFullGreen(){
    navColor.style.backgroundColor = `#00C853`;
    navTextColor.style.color = `#FAFAFA`;
    bodyColor.style.background = `linear-gradient(70deg,#d5ffdd,white)`;
}

button.addEventListener("mouseover", modifyValueMouseover);
button.addEventListener("mouseout", modifyValueMouseout);
ulTheme.addEventListener("mouseleave", modifyDislay);
buttonTheme[0].addEventListener("click", themeOriginal);
buttonTheme[1].addEventListener("click", themeBender);
buttonTheme[2].addEventListener("click", themeFullGreen);
