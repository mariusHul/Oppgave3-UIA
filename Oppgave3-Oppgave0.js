// Oppgave 1
const removeButton = document.getElementById("remove-btn");

const deleteText = () => {
  document.getElementById("remove").innerHTML = null;
};
removeButton.addEventListener("click", deleteText);

// Oppgave 2
let changeText = "Dette skal jeg få til :)";
const changeButton = document.getElementById("change-btn");

const changeIt = () => {
  document.getElementById("change").innerHTML = changeText;
};

changeButton.addEventListener("click", changeIt);

// Oppgave 3
let wordKeeper = "";

const livePrint = (event) => {
  wordKeeper += event.key;

  document.getElementById("input-text").innerHTML = wordKeeper;
};

document.addEventListener("keyup", livePrint);

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const btn = document.getElementById("write-list");
let listHtml = "";

const listFunction = () => {
  let countArray = 0;
  while (countArray < myList.length) {
    listHtml += "<li>" + myList[countArray] + "</li>";
    countArray++;
  }
  document.getElementById("ul").innerHTML = listHtml;
};
btn.addEventListener("click", listFunction);

// Oppgave 5
let selector = document.getElementById("select");
let textInput = document.getElementById("text");
let placeHolder = document.getElementById("placeholder");
let buttonChange = document.getElementById("create");

const elementMaker = () => {
  let typedText = textInput.value;
  let chosen = selector.value;
  placeHolder.innerHTML += "<" + chosen + ">" + typedText + "</" + chosen + ">";
};

buttonChange.addEventListener("click", elementMaker);

// Oppgave 6
//Jeg må klikke to ganger for å fjerne et li-element..
const removeLi = document.getElementById("remove-li");

const remover = () => {
  const fullList = document.getElementById("list");
  fullList.removeChild(fullList.childNodes[0]);
};

removeLi.addEventListener("click", remover);

// Oppgave 7
let maxInput = document.getElementById("name");
let styleBtn = document.getElementById("order");

const maxLength = () => {
  let typedLength = maxInput.value;
  if (typedLength.length >= 4) {
    styleBtn.disabled = true;
    console.log(typedLength);
  } else {
    styleBtn.disabled = false;
  }
};
maxInput.addEventListener("keyup", maxLength);

// Oppgave 8
let colorBtn = document.getElementById("color");

const colorChanger = () => {
  let listing = document.querySelector(".children").children;
  for (let c = 0; c < listing.length; c++) {
    if (c % 2 === 0) {
      listing[c].style.border = "thin dotted pink";
    } else {
      listing[c].style.border = "thin solid green";
    }
  }
};
colorBtn.addEventListener("click", colorChanger);
