const navOpen = document.querySelector(".nav-hamburger");
const navClose = document.querySelector(".close-toggle");
const menu = document.querySelector(".nav-menu");

navOpen.addEventListener("click", () => {
  const navLeft = menu.getBoundingClientRect().left;

  if (navLeft < 0) {
    menu.style.left = "0";
    document.body.classList.add("active");
  } else {
    menu.style.left = "-50rem";
    document.body.classList.remove("active");
  }
});

navClose.addEventListener("click", () => {
  const navLeft = menu.getBoundingClientRect().left;

  if (navLeft > 0) {
    menu.style.left = "0";
    document.body.classList.add("active");
  } else {
    menu.style.left = "-50rem";
    document.body.classList.remove("active");
  }
});
