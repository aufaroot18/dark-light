const theme = document.querySelector(".theme");

theme.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
});
