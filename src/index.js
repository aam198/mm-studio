// const exploreArrow = document.querySelector('.drop-down');
// const animateArrow=document.querySelector('.animate');

// exploreArrow.addEventListener("mouseover", () => {
//   console.log(123);
//   animateArrow.classList.add("more");
//   animateArrow.classList.remove("less");
// });

// exploreArrow.addEventListener("mouseout", () => {
//   console.log(123);
//   animateArrow.classList.add("less");
//   animateArrow.classList.remove("more");
// });


// Testimonial Section
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');


const testimonials = [ 
  {
    name: 'Cathie Massaro',
    position: 'Instructional Production Specialist',
    photo: 'https://cataas.com/cat/cute',
    text: 'We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.',
  },
  {
    name: 'Pete Warren',
    position: 'Multimedia Specialist',
    photo: 'https://cataas.com/cat/cute',
    text: 'We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.',
    },
  ]

  let index = 1;

  function updateTestimonial() {
    console.log(testimonials[1]);
    // Destructing out the fields from data above so we don't have to write out  testimonials.name etc.
    const { name, position, photo, text } = testimonials[index];
    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = [position];
    
    index++;

    // To restart the testimonial when hitting the end of the array
    if(index > testimonials.length - 1){
      index = 0;
    }
  }

  // place in setInterval to match animation of 10seconds and call the function to update content.
  setInterval(updateTestimonial, 10000);