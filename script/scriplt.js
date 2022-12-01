"use strict";

const textBox = document.querySelector(".text__box");
const str = document.getElementById("str");
// remove str block, koz we don't need it
str.remove();
// get content from str
let newStr = str.innerHTML;
// filter extra spaces
newStr = newStr.replace(/\s+/g, " ").trim();
// get array of symbols
const arrStr = [...newStr];

arrStr.forEach((el) => {
  var newLett = document.createElement("span");
  if (el === " ") {
    newLett.innerHTML = " ";
    newLett.classList.add("space");
  } else {
    newLett.innerHTML = el;
  }
  textBox.appendChild(newLett);
  if (newLett.innerHTML !== " ") {
    newLett.addEventListener("mouseover", () => {
      newLett.classList.add("change__opacity");
    });
    newLett.addEventListener("mouseout", () => {
      newLett.classList.remove("change__opacity");
    });
  }
});
