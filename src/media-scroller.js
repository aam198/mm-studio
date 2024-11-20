// Media Scroller Button Scroll Snap

const scrollContainer = document.querySelector('.media-scroller');
const scrollAmount = 220; // Amount to scroll each time the button is clicked, adjust as needed

// Button event listeners
const scrollLeftButton = document.getElementById('scroll_left');
const scrollRightButton = document.getElementById('scroll_right');


// Click Event for scrolling left
scrollLeftButton.addEventListener('click', () => {
  console.log("Left clicked")

  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth' 
  })
});

scrollRightButton.addEventListener('click', function() {
  console.log('right clicked')

  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
});



// document.getElementById('scroll_right').addEventListener('click', function() {
//   const scroller = document.querySelector('.media-scroller');
//   scroller.scrollBy({
//       left: 300, // Change this value to adjust the scroll amount
//       behavior: 'smooth' // Adds smooth scrolling
//   });
// });