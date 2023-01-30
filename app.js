const header = document.querySelector("h1");
const letters = header.querySelectorAll(".letter");

setInterval(() => {
  letters.forEach((letter, index) => {
    letter.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  });
}, 2000);
