// JavaScript for sliding the images
const slider = document.querySelector('.slider');
let slideIndex = 0;

function slideNext() {
    if (slideIndex === 2) { // Adjust the number based on the number of images
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(slideNext, 3000); // Change image every 3 seconds (adjust as needed)