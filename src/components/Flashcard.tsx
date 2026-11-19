import type { Card } from "../cards";

type FlashcardProps = {
  card: Card;
  flipped: boolean;
  answer: boolean | null;
  onFlip: () => void;
};

function Flashcard({ card, flipped, answer, onFlip }: FlashcardProps) {
  let className = "card";

  if (answer === true) className += " known";
  if (answer === false) className += " unknown";

  return (
    <div className={className}>
      <p className="side">{flipped ? "Svar" : "Spurning"}</p>
      <p className="text">{flipped ? card.back : card.front}</p>
      <button className="flip" onClick={onFlip}>
        {flipped ? "Fela svar" : "Sýna svar"}
      </button>
    </div>
  );
}

export default Flashcard;
