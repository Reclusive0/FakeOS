import { oogaSound, shutdownSound } from "./audio.js";

export const shutdown = () => {
  const domEls = document.body.querySelectorAll("*");
  const delay = () => new Promise((resolve) => setTimeout(resolve, 50));
  async function removeEls() {
    for (let i = 0; i < domEls.length; i++) {
      console.log(domEls[i]);
      domEls[i].remove();
      await delay();
    }
  }
  removeEls();
  oogaSound.pause();
  shutdownSound.play();

  setTimeout(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = "none";
    document.body.classList.add("shutdown");
    document.body.textContent = "It's now safe to turn off your computer.";
    document.body.innerHTML += `<br><br><a href=".">Click here to reset</a>
`;
    document.body.style.fontSize = "40px";
  }, 3000);
};
