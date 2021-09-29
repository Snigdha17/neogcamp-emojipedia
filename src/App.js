import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "smiling",
  "😏": "smirking",
  "🤥": "lying",
  "🤧": "sneezing",
  "😟": "worried",
  "🥵": "hot face",
  "🥶": "cold face",
  "🤯": "exploding head",
  "😲": "astonished face",
  "😉": "winking Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeEventHandler(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("Unknown emoji");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji - pretor</h1>
      <h3>Enter an emoji below to find its meaning</h3>
      <input onChange={onChangeEventHandler}></input>
      <h2 id="meaning">{meaning} </h2>
      <h3>Or try one of the emojis below!</h3>
      <div id="emojiDisplay">
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
