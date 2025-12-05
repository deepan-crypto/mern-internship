let textPara = document.querySelector("#text");
let box = document.querySelector("#box");
let hideBtn = document.querySelector(".container button:nth-child(6)");
let showBtn = document.querySelector(".container button:nth-child(7)");
let changeTextBtn = document.querySelector(".container button:nth-child(4)");
let changeColorBtn = document.querySelector(".container button:nth-child(5)");
let itemInput = document.querySelector("#itemInput");
let addItemBtn = document.querySelector(".container div button");
let list = document.querySelector("#list");



// Change the paragraph text
changeTextBtn.addEventListener("click", () => {
  changeText();
});

// Change the box background color
changeColorBtn.addEventListener("click", () => {
  changeColor();
});

// Hide box
hideBtn.addEventListener("click", () => {
  hideBox();
});

// Show box
showBtn.addEventListener("click", () => {
  showBox();
});

// Add list item
addItemBtn.addEventListener("click", () => {
  addItem();
});


// Function 1: Change paragraph text
function changeText() {
  textPara.textContent = "The text has now been changed!";
}

// Function 2: Change background color of box
function changeColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = randomColor;
}

// Function 3: Hide box
function hideBox() {
  box.style.display = "none";
}

// Function 4: Show box
function showBox() {
  box.style.display = "flex";
}

// Function 5: Add a new item to the list
function addItem() {
  let value = itemInput.value.trim();

  if (!value) {
    alert("Please enter an item!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);

  itemInput.value = "";
}