let root = document.querySelector(":root");
let button = document.querySelector("button");
// let iconSun = document.querySelector(".icon-sun");
// let iconDark = document.querySelector(".icon-dark");

button.addEventListener("click", () => {
  root.classList.toggle("light-theme");
  console.log(button.textContent);
  if (button.textContent === "SUN") {
  button.textContent = "NIGHT";
  } else {
    button.textContent = "SUN";
  }
 }
);