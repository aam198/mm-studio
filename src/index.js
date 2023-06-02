// Mobile Nav
const hamburgerNav = document.getElementById('hamburger_nav');
const mainNav = document.getElementById('main_nav');
// Dropdown
const exploreArrow = document.querySelector('.drop-down');
const navDrop = document.querySelector('.nav-dropdown');

// For Dropdown
const showThemeContainer = () => {
  navDrop.classList.add("visible");
};

const hideThemeContainer = () => {
  navDrop.classList.remove("visible");
}

exploreArrow.addEventListener("mouseover", () => {
    showThemeContainer();
});

exploreArrow.addEventListener("mouseout", () => {
  hideThemeContainer();
});

// Mobile Navigation based on viewport

const size = window.matchMedia("(min-width: 725px)");
// Checks for size when page is loaded
winSize(size);

function winSize(size) {
  if (size.matches){
    hamburgerNav.classList.add('hidden');
    mainNav.classList.remove('hidden');
    console.log("Screen is at least 725px")
  }
  else{
    hamburgerNav.classList.remove('hidden');
    mainNav.classList.remove('hidden');
    console.log("Screen is less than 725px")
  }
}

// Updates classes when viewport is resized.

// Mobile Navigation open/close buttons
const openBtn= document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
  navs.forEach(nav => nav.classList.add('visible'))
});

closeBtn.addEventListener('click', () => {
  navs.forEach(nav => nav.classList.remove('visible'))
});