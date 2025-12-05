let textPara = document.querySelector("#text");
let box = document.querySelector("#box");
let hideBtn = document.querySelector(".container button:nth-child(6)");
let showBtn = document.querySelector(".container button:nth-child(7)");
let changeTextBtn = document.querySelector(".container button:nth-child(4)");
let changeColorBtn = document.querySelector(".container button:nth-child(5)");
let itemInput = document.querySelector("#itemInput");
let addItemBtn = document.querySelector(".container div button");
let list = document.querySelector("#list");




btnChangeText.addEventListener("click", changeText);
btnChangeColor.addEventListener("click", changeColor);
btnHide.addEventListener("click", hideBox);
btnShow.addEventListener("click", showBox);
btnAddItem.addEventListener("click", addItem);


// 1. Change Paragraph Text
function changeText() {
  textPara.textContent = "The text has now been changed!";
}

// 2. Change Background Color of the Box
function changeColor() {
  // generate a random color
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = randomColor;
}

// 3. Hide the Box
function hideBox() {
  box.style.display = "none";
}

// 4. Show the Box
function showBox() {
  box.style.display = "flex";
}

// 5. Add a New Item to the List
function addItem() {
  let value = itemInput.value.trim();

  if (value === "") {
    alert("Please enter a valid item!");
    return;
  }

  // create new li element
  let li = document.createElement("li");
  li.textContent = value;

  // add li to the ul
  list.appendChild(li);

  // clear input
  itemInput.value = "";
}
