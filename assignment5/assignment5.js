// 1 We need all the instance
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

// 2. Generate a Rnadom Number betwenn 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// 2.1 creat a varible of score
let scr = 20;

// Button Functionalities
// 1.event  that we want to occur 2. Callback
checkBtn.addEventListener("click", () => {
  console.log("Button Clicked", randomNumber);
  let inputVal = Number(guess.value);
  if (!inputVal) {
    msg.textContent = "No Number!";
  } else if (randomNumber === inputVal) {
    console.log("Value is correct");
    number.textContent = randomNumber;
    msg.textContent = "Correct value!";
    highScore.textContent = scr;
    document.body.style.backgroundColor = "green";
  } else if (randomNumber < inputVal) {
    console.log("Value is too high");
    scr -= 1;
    msg.textContent = "Too high!";
  } else {
    console.log("Value is too low");
    scr -= 1;
    msg.textContent = "Too low!";
  }
});
againBtn.addEventListener("click", () => {
  msg.textContent = "Start guessing..";
  document.body.style.backgroundColor = "black";
  number.textContent = "?";
  scr = 20;
});


//4. again button functionality
let init=()=>{
  scr=20;
   score.textContent=scr;
   number.textContent="?";
   guess.value="";
   msg.textContent="Start guessing..";
   randomNumber=Math.trunc(Math.random()*20)+1;

   document.body.style.backgroundColor="black";
}
againBtn.