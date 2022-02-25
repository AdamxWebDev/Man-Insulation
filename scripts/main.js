
/* Mobile Nav Menu */

const mobileMenuButton = document.getElementById("MENU_BUTTON");
const mobileNavBlock = document.getElementById('HIDDEN_NAV');
const menuClose = document.getElementById('MENU_CLOSE');

const myFunction = () => {
    if (mobileNavBlock.style.display === "none") {
        mobileNavBlock.style.display = "block";
    } else {
        mobileNavBlock.style.display = "none";
    }
}

mobileMenuButton.onclick = myFunction;
menuClose.onclick = myFunction;

/* Slideshow */

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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if(n > slides.length) {
    slideIndex = 1
  }

  if(n < 1) {
    slideIndex = slides.length
  }

  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
