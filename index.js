const form = document.querySelector(".navbar .search-form");

const searchBtn = document.querySelector("#search-btn");

const menuBtn = document.querySelector("#menu-btn");

const menu = document.querySelector(".menu");

searchBtn.onclick = () => {
    searchBtn.classList.toggle("fa-times");
    form.classList.toggle("active");
};

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    menu.classList.toggle("active");
};

window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    form.classList.remove("active");
    menuBtn.classList.remove("fa-times");
    menu.classList.remove("active");
};

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        console.log("hello");
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex - 1].style.display = "flex";
    setTimeout(carousel, 10000);
}

let slide = document.querySelectorAll(".home .slide");
let index = 0;

next = () => {
    slide[index].style.display = "none";
    index = (index + 1) % slide.length;
    slide[index].style.display = "flex";
};

prev = () => {
    slide[index].style.display = "none";
    index = (index - 1 + slide.length) % slide.length;
    slide[index].style.display = "flex";
};