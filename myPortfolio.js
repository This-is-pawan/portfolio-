const a = document.querySelector("body").addEventListener("click", () => {
  document.querySelector(".fa-sun").classList.toggle("show-sun");
});

const target = document
  .querySelector(".nav-btn")
  .addEventListener("click", () => {
    document.querySelector(".nav-display").classList.toggle("nav-display2");
  });
const mark = document
  .querySelector(".fa-xmark")
  .addEventListener("click", () => {
    document.querySelector(".nav-display").classList.toggle("nav-display2");
  });

const Target = document
  .querySelector(".moon-sun1")
  .addEventListener("click", () => {
    document.querySelector(".fa-sun").classList.toggle("show-sun");
    document.querySelector(".fa-moon").classList.toggle("show-moon");
    document.querySelector("body").classList.toggle("color");
    document.querySelector(".hireMe").classList.toggle("font-color");
  });
