// Hamburger Menu
let hamburger = document.querySelector('.hamburger-menu');
let menuIcon = document.querySelector('.menuIcon');
let xIcon = document.querySelector('.xIcon');
let menu = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.nav__item')

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    menuIcon.style.display = 'block';
    xIcon.style.display = 'none';
  } else {
    menu.classList.add('showMenu');
    menuIcon.style.display = 'none';
    xIcon.style.display = 'block';
  }
}

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleMenu);
  }
)

hamburger.addEventListener('click', toggleMenu);