const exploreArrow = document.querySelector('.drop-down');
const navDrop = document.querySelector('.nav-dropdown');

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

// Mobile Navigation
const openBtn= document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
  navs.forEach(nav => nav.classList.add('visible'))
});

closeBtn.addEventListener('click', () => {
  navs.forEach(nav => nav.classList.remove('visible'))
});