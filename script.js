const pwd = document.querySelector("form input");
const btn = document.querySelector("form button");
const btn1 = document.getElementById("lower-case");
const btn2 = document.getElementById("upper-case");
const btn3 = document.getElementById("number");
const btn4 = document.getElementById("symbol");

const genPassword = (length, lowercase, uppercase, num, symbol) => {
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChar = "0123456789";
  const symbolChar = `!@#\\$%^&*()_+-={}[]:;"'<>,.?/~|\``;
  let allowedChars = "";
  let password = "";
  allowedChars += isLowerCase ? lowercaseChar : "";
  allowedChars += isUpperCase ? uppercaseChar : "";
  allowedChars += isNumber ? numberChar : "";
  allowedChars += isSymbol ? symbolChar : "";

  if (length < 12) {
    console.log("password must be atleast of 12 character");
  }

  for (i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[index];
  }
  pwd.value = password;
  if (allowedChars.length === 0) {
    pwd.value = `Select atleast one set of character`;
  }
};

let isLength = 12;
let isLowerCase = true;
let isUpperCase = true;
let isNumber = true;
let isSymbol = true;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  genPassword(isLength, isLowerCase, isUpperCase, isNumber, isSymbol);
});

btn1.addEventListener("click", (e) => {
  isLowerCase = !isLowerCase;
  if (isLowerCase) {
    e.target.style.backgroundColor = "rgb(7, 159, 7)";
  } else {
    e.target.style.backgroundColor = "red";
  }
});
btn2.addEventListener("click", (e) => {
  isUpperCase = !isUpperCase;
  if (isUpperCase) {
    e.target.style.backgroundColor = "rgb(7, 159, 7)";
  } else {
    e.target.style.backgroundColor = "red";
  }
});
btn3.addEventListener("click", (e) => {
  isNumber = !isNumber;
  if (isNumber) {
    e.target.style.backgroundColor = "rgb(7, 159, 7)";
  } else {
    e.target.style.backgroundColor = "red";
  }
});
btn4.addEventListener("click", (e) => {
  isSymbol = !isSymbol;
  if (isSymbol) {
    e.target.style.backgroundColor = "rgb(7, 159, 7)";
  } else {
    e.target.style.backgroundColor = "red";
  }
});
