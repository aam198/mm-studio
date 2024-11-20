// Media Scroller Button Scroll Snap

const scrollContainer = document.querySelector('.media-scroller');
const scrollAmount = 220; // Amount to scroll each time the button is clicked, adjust as needed

// Button event listeners
const scrollLeftButton = document.getElementById('scroll_left');
const scrollRightButton = document.getElementById('scroll_right');


// Click Event for scrolling left
scrollLeftButton.addEventListener('click', () => {
  console.log("Left clicked");

  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth' 
  });
});

scrollRightButton.addEventListener('click', () => { 
  console.log("Right clicked");

  scrollContainer.scrollBy({
    right: scrollAmount,
    behavior: 'smooth'
  });
});
