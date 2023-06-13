
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("carousel-img");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) 
    {slideIndex = 1}
  if (n < 1) 
    {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity="0";
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // slides[slideIndex-1].style.opacity=1;
  dots[slideIndex-1].className += " active";

  // Fade-in effect
  setTimeout(function() {
    slides[slideIndex -1].style.opacity="1";
  }, 100);
} 

// setInterval added for auto 
setInterval(function() {
  plusSlides(1);
}, 4000);