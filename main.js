// Button Open Menu
const openMenu = document.querySelector("#menu-open-button");

openMenu.addEventListener("click", () => {
  document.body.classList.toggle("show-menu-mobile");
});
// Button Close Menu
const closeMenu = document.querySelector("#menu-close-button");
closeMenu.addEventListener("click", () => openMenu.click());
// close menu in mobile
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => openMenu.click());
});
//Initialize Swiper

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grapCursor: true,
  spaceBetween: 25,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPreView: 1,
    },
    768: {
      slidesPreView: 2,
    },
    1024: {
      slidesPreView: 3,
    },
  },
});

// Copy Right

document.querySelector(
  ".copyright-text"
).textContent = `© ${new Date().getFullYear()} Coffe Shop`;
