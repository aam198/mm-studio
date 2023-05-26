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

