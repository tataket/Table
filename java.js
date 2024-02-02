const buttons = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    //console.log(e.target.innerHTML);
  });
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
      //console.log(e.target.innerHTML);
    });
  }

  function handleButtonClick(event) {
    const buttonValue = event.target.innerText;
    const display = document.getElementById("display");
    if (buttonValue === "=") {
    } else if (buttonValue === "C") {
      display.value = "";
    } else {
      display.value += buttonValue;
    }
  }

  function conectTable() {
    let userInput = document.getElementById("display").value;
    let num = document.getElementsByClassName("num");
    for (let i = 0; i < 10; i++) {
      num[i].innerHTML = userInput;
    }
    let inputNumber = parseFloat(userInput);
    for (let i = 1; i <= 10; i++) {
      let result = inputNumber * i;
      document.getElementById("result" + i).innerHTML = result;
    }
  }
}
