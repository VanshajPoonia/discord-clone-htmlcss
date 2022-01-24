const burgermenu = document.querySelector(".hero__header__login__burgericon");
const closemenu = document.querySelector(".hero__burgermenu__header__close");
const sidebar = document.querySelector(".hero__burgermenu");
const login = document.querySelector(".hero__header__login__btn");
burgermenu.addEventListener("click", () => {
  sidebar.classList.toggle("toggler");
  console.log("hi");
});
closemenu.addEventListener("click", () => {
  sidebar.classList.toggle("toggler");
});

login.addEventListener("click", () => {
  window.location = "login.html";
});
