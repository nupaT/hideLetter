"use strict";

const textBox = document.querySelector(".text__box");
const str = document.getElementById("str");
console.log(str);
const arrStr = [...str.innerHTML];
console.log(arrStr);

str.remove();
arrStr.forEach((el) => {
  let newLett = document.createElement("span");
  if (el === " ") {
    newLett.innerHTML = " ";
    newLett.classList.add("space");
  } else {
    newLett.innerHTML = el;
  }
  textBox.appendChild(newLett);
  newLett.addEventListener("mouseover", () => {
    newLett.classList.add("change__opacity");
  });
  newLett.addEventListener("mouseout", () => {
    newLett.classList.remove("change__opacity");
  });
});
