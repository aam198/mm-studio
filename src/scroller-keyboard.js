const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const projectList = document.querySelector(".projects");
const projects = [...projectList.querySelectorAll("a")];
let focusedProjectIndex = -1;

const handleKeyPress = (e) => {
  if (e.key === "ArrowRight") {
    if (focusedProjectIndex === projects.length - 1) {
      focusedProjectIndex = 0;
    } else {
      focusedProjectIndex++;
    }
  }

  if (e.key === "ArrowLeft") {
    if (focusedProjectIndex === 0 || focusedProjectIndex === -1) {
      focusedProjectIndex = projects.length - 1;
    } else {
      focusedProjectIndex--;
    }
  }

  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    const selected = projects[focusedProjectIndex];

    e.preventDefault();
    selected.scrollIntoView({
      block: "nearest",
      inline: "start",
      behavior: reducedMotion.matches ? "auto" : "smooth"
    });
    selected.focus({ preventScroll: true });
  }
};

const initProjectListKeyboardControl = () => {
  projects.forEach((child) => child.setAttribute("tabIndex", -1));
  projectList.setAttribute("tabIndex", 0);
  projectList.addEventListener("keydown", (e) => handleKeyPress(e));
  projectList.insertAdjacentHTML(
    "afterend",
    `<p id="projects-focus-text">Navigate with left and right arrow keys</p>`
  );
  projectList.setAttribute("aria-describedby", "projects-focus-text");
};

initProjectListKeyboardControl();
