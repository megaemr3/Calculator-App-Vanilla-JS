 const numbers = document.querySelectorAll(".numbers");
 const screen = document.querySelector(".input p");
 const operators = document.querySelectorAll(".operators");
 const root = document.querySelector(":root");
 
 let number1;
 let operator;
 let number2;

let theme = 1;
//All the numbers function
numbers.forEach(item => {
  item.addEventListener("click", function() {
    screen.innerText = screen.innerText + this.innerText;
  })
})

//dot button function
  document.querySelector(".dot").addEventListener("click", function() {
    screen.innerText = screen.innerText + this.innerText;
  })

//del button function
  document.querySelector(".del").addEventListener("click", function() {
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1)
  })
//Operators functions
operators.forEach(item => {
  item.addEventListener("click", function() {
    number1 = Number(screen.innerText);
    screen.innerText = "";
    operator = this.classList[1];
  })
})

//Reset button function
document.querySelector(".reset").addEventListener("click", function() {
  number1 = undefined;
  operator = undefined;
  number2 = undefined;
  screen.innerText = "";
})

//equal button function
document.querySelector(".equal").addEventListener("click", function() {
  number2 = Number(screen.innerText);
  screen.innerText = window[operator](number1, number2, operator);
})



function calcu(numb1, numb2, operator) {
  return operator(numb1, numb2);
}



function addiction(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function times(num1, num2) {
  return num1 * num2;
}



document.querySelector(".theme-bar").addEventListener("click", function() {
if (theme === 1) {
  document.querySelector(".toggle").style.marginLeft = "50%";
  document.querySelector(".toggle").style.transform = "translateX(-50%)";
  root.style.setProperty("--main-bg", "hsl(0, 0%, 90%)")
  root.style.setProperty("--keypad-bg", "hsl(0, 5%, 81%)")
  root.style.setProperty("--screen-bg", "hsl(0, 0%, 93%)")
  root.style.setProperty("--key-bg", "hsl(45, 7%, 89%)")
  root.style.setProperty("--key-shadow", "hsl(35, 11%, 61%)")
  root.style.setProperty("--eq-bg", "hsl(25, 98%, 40%)")
  root.style.setProperty("--eq-shadow", "hsl(25, 99%, 27%)")
  root.style.setProperty("--res-bg", "hsl(185, 42%, 37%)")
  root.style.setProperty("--res-shadow", "hsl(185, 58%, 25%)")
  root.style.setProperty("--dark-text", "hsl(60, 10%, 19%)")
  root.style.setProperty("--light-text", "hsl(60, 10%, 19%)")
  
  
  theme = 2;

} else if (theme === 2) {
  document.querySelector(".toggle").style.marginLeft = "100%";
  document.querySelector(".toggle").style.transform = "translateX(-100%)";
  root.style.setProperty("--main-bg", "hsl(268, 75%, 9%)")
  root.style.setProperty("--keypad-bg", "hsl(268, 71%, 12%)")
  root.style.setProperty("--screen-bg", "hsl(268, 71%, 12%)")
  root.style.setProperty("--key-bg", "hsl(268, 47%, 21%)")
  root.style.setProperty("--key-shadow", "hsl(290, 70%, 36%)")
  root.style.setProperty("--eq-bg", "hsl(176, 100%, 44%)")
  root.style.setProperty("--eq-shadow", "hsl(177, 92%, 70%)")
  root.style.setProperty("--res-bg", "hsl(281, 89%, 26%)")
  root.style.setProperty("--res-shadow", "hsl(285, 91%, 52%)")
  root.style.setProperty("--dark-text", "hsl(52, 100%, 62%)")
  root.style.setProperty("--light-text", "hsl(52, 100%, 62%)")
  root.style.setProperty("--eq-color", "hsl(198, 20%, 13%)")

  theme = 3;
} else if (theme === 3) {

  document.querySelector(".toggle").style.marginLeft = "0";
  document.querySelector(".toggle").style.transform = "translateX(0)";
  root.style.setProperty("--main-bg", "hsl(222, 26%, 31%)")
  root.style.setProperty("--keypad-bg", "hsl(223, 31%, 20%)")
  root.style.setProperty("--screen-bg", "hsl(224, 36%, 15%)")
  root.style.setProperty("--key-bg", "hsl(30, 25%, 89%)")
  root.style.setProperty("--key-shadow", "hsl(28, 16%, 65%)")
  root.style.setProperty("--eq-bg", "hsl(6, 63%, 50%)")
  root.style.setProperty("--eq-shadow", "hsl(6, 70%, 34%)")
  root.style.setProperty("--res-bg", "hsl(225, 21%, 49%)")
  root.style.setProperty("--res-shadow", "hsl(224, 28%, 35%)")
  root.style.setProperty("--dark-text", "hsl(221, 14%, 31%)")
  root.style.setProperty("--light-text", "white")
  root.style.setProperty("--eq-color", "white")

  theme = 1;
}



})
