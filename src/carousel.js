
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 



// const imgs = document.getElementById('imgs');
// const leftBtn= document.getElementById('left');
// const rightBtn= document.getElementById('right');
// const img = document.querySelectorAll('#imgs img');


// let index = 0;

// // Every 2 seconds, function run will 'run'
// let interval = setInterval(run, 2000)


// function run() {
//   index ++;
//   changeImage()
// }

// // Updating the translateX property in the CSS
// function changeImage(){
//   // To find if we are at the end of the node list
//   if(index > img.length - 1 ){
//     index = 0;
//   }
//   else if (index < 0 ){
//     index = img.length - 1;
//   }

//   imgs.style.transform = `translateX(${-index * 500}px)`;
// }

// function resetInterval() {
//   clearInterval(interval)
//   interval = setInterval(run, 2000);
// }

// rightBtn.addEventListener('click', () => {
//   index ++;
//   changeImage();
//   resetInterval();
// })

// leftBtn.addEventListener('click', () => {
//   index --;
//   changeImage();
//   resetInterval();
// })