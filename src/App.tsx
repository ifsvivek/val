import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pinkie please",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart 🥹",
  "Is there no love left?",
  "Think about it one more time",
  "It's not you, it's me",
  "I thought we had something special",
  "But what about our memories?",
  "Just a friendly reminder, it's Valentine's Day",
  "Love is a battlefield, but this feels like a war crime",
  "Can we at least be friends?",
  "You're like the cupid who forgot the arrows",
  "This hurts more than a thousand heartbreak songs",
  "Is this a bad dream? Pinch me!",
  "Is there a 'Maybe' option?",
  "Did someone replace your heart with a stone?",
  "Why would you say that?",
  "Not even a little love?",
  "Is this a joke?",
  "I thought we had something special",
  "I'll be in my room listening to sad songs now",
  "This hurts more than a breakup",
  "You're cold-hearted",
  "Do you even believe in love?",
  "I guess love is not in the air",
  "My heart just shattered",
  "Well, there goes my Valentine's Day",
  "I didn't see that coming",
  "I feel like I've been stabbed in the heart",
  "Is this the end of us?",
  "Valentine's Day is canceled for me now",
];


function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/ICmg8MUfSg8AAAAi/milk-and-mocha.gif"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media.tenor.com/VIChDQ6ejRQAAAAi/jumping-bear-hearts-no-png.gif"
          />

          <div className="text">Will you be my Valentine?</div>
          <div>
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="No-button">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;