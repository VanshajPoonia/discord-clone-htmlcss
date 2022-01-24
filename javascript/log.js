const checkbox = document.querySelector(".checkbox");
const tick = document.querySelector(".tick");
const button = document.querySelector(".login__card__left__from__regbtn");
const monthdiv = document.querySelector("#month");
const daydiv = document.querySelector("#day");
const yeardiv = document.querySelector("#year");
const logincard = document.querySelector(".login__card");
const registercard = document.querySelector(".register__card");
const loginbtn = document.querySelector(".login__card__left__from__text");
const registerbtn = document.querySelector(".gotologin");
var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let i = 0; i < month.length; i++) {
  let opt = document.createElement("option");
  opt.innerText = month[i];

  monthdiv.appendChild(opt);
}
for (let i = 1; i < 32; i++) {
  let opt = document.createElement("option");
  opt.innerText = `${i}`;

  daydiv.appendChild(opt);
}
for (let i = 1870; i < 2020; i++) {
  let opt = document.createElement("option");
  opt.innerText = `${i}`;

  yeardiv.appendChild(opt);
}

checkbox.addEventListener("click", () => {
  tick.classList.toggle("notall");
  button.classList.toggle("disabled");
  checkbox.classList.toggle("bg");
});
registerbtn.addEventListener("click", () => {
  registercard.classList.toggle("notall");
  logincard.classList.toggle("notall");
});
loginbtn.addEventListener("click", () => {
  registercard.classList.toggle("notall");
  logincard.classList.toggle("notall");
});
const animationdiv = document.querySelector(".animationdiv");
const qrdiv = document.querySelector(".qr__div");

setTimeout(() => {
  console.log("after 3 sec");
  animationdiv.style.display = "none";
  qrdiv.style.display = "flex";
}, 4000);
