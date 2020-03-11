let input = document.querySelector(".inputNumber");

let reset = document.querySelector(".resetButton");

let equal = document.querySelector(".equalButton");

let add = document.querySelector("#addButton");

let minus = document.querySelector("#substractButton");

let multiplication = document.querySelector("#multiplicationButton");

let division = document.querySelector("#divisionButton");

let result = document.querySelector("#resultValue");

let log = document.querySelector("#logInformation");

reset.addEventListener("click",(event)=>{

  input.value = ""
  result.value = ""
  log.value = ""
})

equal.addEventListener("click",(event)=>{

  log.value += input.value
  result.value = eval(log.value)
  log.value += " = "
  log.value += result.value
})

add.addEventListener("click",(event)=>{

  log.value += input.value
  log.value += " + "
  erase_input()
})

minus.addEventListener("click",(event)=>{

  log.value += input.value
  log.value += " - "
  erase_input()
})

multiplication.addEventListener("click",(event)=>{

  log.value += input.value
  log.value += " * "
  erase_input()
})

division.addEventListener("click",(event)=>{

  log.value += input.value
  log.value += " / "
  erase_input()
})

function erase_input(){
  input.value = "";
}
