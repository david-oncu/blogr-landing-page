const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".header");
const primaryNav = document.querySelector(".primary-nav");
const dropdownToggle = document.getElementById("dropdown-icon");
const dropdownContainer = document.querySelectorAll(".dropdown");

//navigation toggle animation

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  
  const visibility= primaryNav.getAttribute("data-visibility");

  if (visibility === 'false'){
    primaryNav.setAttribute('data-visibility', true);
  } else {
    primaryNav.setAttribute('data-visibility', false);
  }
});


// scroll change header background

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.style.backgroundColor = "var(--gradient-dark-start)";
    header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
};



