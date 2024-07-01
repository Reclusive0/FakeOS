import { clock, clockUpdate } from "./modules/clock.js";
import { mail } from "./modules/data.js";
import { loadTableData, showEmail } from "./modules/mail.js";
import { dancingBaby } from "./modules/dancing-baby.js";
import { errorSound, oogaSound } from "./modules/audio.js";
import { shutdown } from "./modules/shutdown.js";

clockUpdate();

const startBtn = document.getElementById("start-btn");
const startMenu = document.getElementById("start-menu");

const mailBtn = document.getElementById("mail-btn");
const IEBtn = document.getElementById("ie-btn");
const DOOMBtn = document.getElementById("doom-btn");
const allDesktop = [mailBtn, IEBtn, DOOMBtn];

const babyTrigger = document.getElementById("baby-trigger");

const mailWindow = document.getElementById("mail-window");
const IEWindow = document.getElementById("ie-window");
const DOOMWindow = document.getElementById("doom-window");

const shutdownBtn = document.getElementById("shutdown");

allDesktop.forEach((e) => {
  e.addEventListener("click", (element) => {
    e.classList.toggle("highlighted");
  });
});
loadTableData(mail);

startBtn.addEventListener("click", (e) => {
  console.log("Showing menu!");
  startMenu.classList.toggle("hidden-modal");
});

mailBtn.addEventListener("dblclick", (e) => {
  mailWindow.classList.remove("hidden-modal");
  mailWindow.classList.add("modal");
  document.querySelectorAll("td").forEach((e) =>
    e.addEventListener("click", function () {
      const allRows = document.querySelectorAll("tr");
      console.log(allRows);
      allRows.forEach((row) => {
        row.classList.remove("highlighted");
      });
      console.log(allRows);
      console.log("clicked in cell");
      console.log(this);
      this.parentElement.classList.add("highlighted");
      console.log(this.parentNode.rowIndex);
      showEmail(this.parentNode.rowIndex, mail);
    })
  );
});
IEBtn.addEventListener("dblclick", (e) => {
  IEWindow.classList.remove("hidden-modal");
  IEWindow.classList.add("modal");
  oogaSound.loop = true;
  oogaSound.play();
  babyTrigger.addEventListener("click", () => {
    oogaSound.pause();
    dancingBaby();
  });
});
DOOMBtn.addEventListener("dblclick", (e) => {
  DOOMWindow.classList.remove("hidden-modal");
  DOOMWindow.classList.add("modal");
  errorSound.play();
});

const clickDeselect = (element, callback) => {
  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};

clickDeselect(mailBtn, () => {
  mailBtn.classList.remove("highlighted");
});
clickDeselect(IEBtn, () => {
  IEBtn.classList.remove("highlighted");
});
clickDeselect(DOOMBtn, () => {
  DOOMBtn.classList.remove("highlighted");
});

clickDeselect(startMenu, () => {
  if (!startBtn.matches(":hover")) {
    startMenu.classList.add("hidden-modal");
    console.log("Fire!");
  }
});

const closeButton = () => {
  document.querySelectorAll('[aria-label="Close"]').forEach((e) => {
    e.addEventListener("click", () => {
      console.log(e.parentElement.parentElement.parentElement);
      e.parentElement.parentElement.parentElement.classList.add("hidden-modal");
      e.parentElement.parentElement.parentElement.classList.remove("modal");
    });
  });
};

closeButton();

shutdownBtn.addEventListener("click", (e) => {
  shutdown();
});
