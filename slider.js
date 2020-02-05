var slideIndex = 1;
showSlides(slideIndex);
var timeout;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  reset(slides, dots);
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  clearTimeout(timeout);
  goOn(slides, dots);
}


function autoSlides() {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  reset(slides, dots);
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  goOn(slides, dots);
}

function reset(slides, dots) {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
}

function goOn(slides, dots) {
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timeout = setTimeout(autoSlides, 4000); // Change image every 4 seconds
}