// Mobile Nav
const hamburgerNav = document.getElementById('hamburger_nav');
const mainNav = document.getElementById('main_nav');
// Dropdown
const exploreArrow = document.querySelector('.drop-down');
const navDrop = document.querySelector('.nav-dropdown');
//Icon Fade-in
const icons = document.querySelectorAll('.icon-fade');



// To add/remove Dropdown on MouseOver/MouseOut
const showThemeContainer = () => {
  navDrop.classList.add("visible");
};

const hideThemeContainer = () => {
  navDrop.classList.remove("visible");
}
// Event listener for MouseOver/MouseOut
exploreArrow.addEventListener("mouseover", () => {
    showThemeContainer();
});
exploreArrow.addEventListener("mouseout", () => {
  hideThemeContainer();
});


// Mobile Navigation option based on viewport size
const size = window.matchMedia("(min-width: 1024px)");
// Checks for size when page is loaded
winSize(size);

function winSize(size) {
  if (size.matches){
    hamburgerNav.classList.add('hidden');
    mainNav.classList.remove('hidden');
    console.log("Screen is wider than 1024px")
  }
  else{
    hamburgerNav.classList.remove('hidden');
    mainNav.classList.add('hidden');
    console.log("Screen is less than 1024px")
  }
}

// Updates classes when viewport is resized.
window.addEventListener('resize', function() {
  if (size.matches){
    hamburgerNav.classList.add('hidden');
    mainNav.classList.remove('hidden');
    console.log("Screen is wider than 1024px");
  }
  else {
    hamburgerNav.classList.remove('hidden');
    mainNav.classList.add('hidden');
    console.log("Screen is less than 1024px");
  }
})

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

// End of Mobile Navigation 

// const showIconsOneByOne = () => {
//   setTimeout(() => {
//     for (let i = 0; i < icons.length; i++){
//       setTimeout(() => {
//         icons[i].style.opacity='1';
//       }, 1000 * i);
//     }
//   }, 1000);
// };

// showIconsOneByOne();




// import {rovingIndex} from "https://cdn.skypack.dev/roving-ux"

// document.querySelectorAll('.horizontal-media-scroller')
//   .forEach(scroller => rovingIndex({
//     element: scroller,
//     target: 'a',
//   }))


// window.onload = (event) => {
//   iconsFadeIn.forEach((icon) => {
//     setTimeout(() => {
//       icon.classList.add('icon-fade-in');
//     }, 800);
//   });
// };