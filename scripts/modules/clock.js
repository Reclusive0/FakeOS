export const clock = document.querySelector(".clock");

export const clockUpdate = () => {
  let date = new Date();
  let time = date.toLocaleTimeString("en-AU", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  clock.textContent = time;
  setTimeout(clockUpdate, 1000);
};
