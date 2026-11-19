import { useState } from "react";
import { cards } from "./cards";
import StartScreen from "./components/StartScreen";
import Flashcard from "./components/Flashcard";
import Summary from "./components/Summary";
import "./App.css";

type Screen = "start" | "cards" | "done";

function App() {
  const [screen, setScreen] = useState<Screen>("start");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const card = cards[index];
  const isLast = index === cards.length - 1;
  const isAnswered = answers.length > index;
  const currentAnswer = isAnswered ? answers[index] : null;

  function handleNext() {
    if (isLast) {
      setScreen("done");
      return;
    }
    setIndex(index + 1);
    setFlipped(false);
  }

  function handleAnswer(knew: boolean) {
    if (isAnswered) return;
    setAnswers([...answers, knew]);
  }

  function handleRestart() {
    setIndex(0);
    setFlipped(false);
    setAnswers([]);
    setScreen("start");
  }

  return (
    <main>
      <h1>Glósuspjöld</h1>
      {screen === "start" && <StartScreen total={cards.length} onStart={() => setScreen("cards")} />}
      {screen === "cards" && (
        <section>
          <p className="progress">
            Spjald {index + 1} af {cards.length}
          </p>
          <Flashcard card={card} flipped={flipped} answer={currentAnswer} onFlip={() => setFlipped(!flipped)} />
          {flipped && (
            <div className="answer-buttons">
              <button className="known-btn" onClick={() => handleAnswer(true)} disabled={isAnswered}>
                ✓ Ég kunni þetta
              </button>
              <button className="unknown-btn" onClick={() => handleAnswer(false)} disabled={isAnswered}>
                ✗ Kunni ekki
              </button>
            </div>
          )}
          <button className="next" onClick={handleNext} disabled={!isAnswered}>
            {isLast ? "Sjá niðurstöður" : "Næsta spjald"}
          </button>
        </section>
      )}
      {screen === "done" && <Summary cards={cards} answers={answers} onRestart={handleRestart} />}
    </main>
  );
}

export default App;
