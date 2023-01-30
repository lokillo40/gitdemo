const header = document.querySelector("h1");
const letters = header.querySelectorAll(".letter");

letters.forEach((letter, index) => {
  letter.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
});
