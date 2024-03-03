const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCvv = document.querySelector("#inputCvv");

//definimos la estructura de la mascara:
const maskNumber = "####-####-####-####";
const maskDate = "##/##";
const maskCvv = "###";

//para cada uno de los inputs creo un arreglo donde se almacenan los valores, luego los transformo y los voy a mostrar en el input
let current = "";
let cardNumber = [];
let cardDate = [];
let cardCvv = [];

//funciones para la validación:
inputCard.addEventListener("keydown", (e) => {
  if (e.key == "Tab") {
    return;
  }
  e.preventDefault();
  handleInput(maskNumber, e.key, cardNumber);
  inputCard.value = cardNumber.join("");
});
function handleInput(mask, key, arr) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (key === "Backspace" && arr.length > 0) {
    arr.pop();
    return;
  }
  if (numbers.includes(key) && arr.length + 1 <= mask.length) {
    if (mask[arr.length] == "-" || mask[arr.length] == "/") {
      arr.push(mask[arr.length], key);
    } else {
      arr.push(key);
    }
  }
}
