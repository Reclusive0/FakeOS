import { errorSound, alarmSound } from "./audio.js";

export const dancingBaby = () => {
  console.log("You triggered the dancing baby!");
  alarmSound.play();
  const allElementsQuery = document.body.querySelectorAll("*");
  console.log(allElementsQuery);
  for (let i = 0; i < allElementsQuery.length; i++) {
    allElementsQuery[i].remove();
    console.log("one el removed");
  }
  document.body.style.background = "url(./assets/dancing-baby.gif)";
  for (let i = 0; i < 20; i++) {
    document.body.textContent += `YOU ANGERED THE BABY!!!!@ `;
  }

  Object.assign(document.body.style, {
    color: "red",
    fontFamily: "Comic Sans MS",
    fontSize: "60px",
  });

  setTimeout(() => {
    document.body.innerHTML = "";
    Object.assign(document.body.style, {
      background: "url(./assets/bluescreen.gif)",
      backgroundSize: "100%",
    });
    errorSound.play();
  }, 4000);

  setTimeout(() => {
    document.body.innerHTML = `<a class="crash" href=".">Click here to reset</a>`;
    document.body.classList.add("crash");
  }, 8000);
};
