
let textPara = document.getElementById("text");
let box = document.getElementById("box");
let itemInput = document.getElementById("itemInput");
let list = document.getElementById("list");

let btnChangeText = document.querySelector('button[onclick="changeText()"]');
let btnChangeColor = document.querySelector('button[onclick="changeColor()"]');
let btnHide = document.querySelector('button[onclick="hideBox()"]');
let btnShow = document.querySelector('button[onclick="showBox()"]');
let btnAddItem = document.querySelector('button[onclick="addItem()"]');




btnChangeText.addEventListener("click", changeText);
btnChangeColor.addEventListener("click", changeColor);
btnHide.addEventListener("click", hideBox);
btnShow.addEventListener("click", showBox);
btnAddItem.addEventListener("click", addItem);

