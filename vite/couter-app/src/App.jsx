import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function App() {

  let [randomNumber,setRandomNumber]=useState(Math.trunc(Math.random() * 20) + 1);

  let [msb,SetMsg]=useState("Start guessing...");
  let [score,SetScore]=useState(20);
  let [highscore,SetHighscore]=useState(0);
   let [bg,SetBg]=useState(Black);
   let [guess,SetGuess]=useState("");

  return (
    <div>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">?</div>
      </header>
      <main>
        <section className="left">
          
          <input type="number" className="guess" value={guess} onChange={(e) => SetGuess(e.target.value)} />
          <button className="btn check">Check!</button>
        </section>
        <section className="right">
          <p className="message">{msb}</p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
