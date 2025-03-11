const header = document.querySelector("header");
const date = document.createElement("div");
const now = new Date();

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};

date.innerText = now.toLocaleDateString("ko-KR", options);
header.appendChild(date);
