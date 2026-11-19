import type { Card } from "../cards";

type SummaryProps = {
  cards: Card[];
  answers: boolean[];
  onRestart: () => void;
};

function Summary({ cards, answers, onRestart }: SummaryProps) {
  const knownCount = answers.filter((knew) => knew).length;
  const toPractice = cards.filter((_, i) => !answers[i]);

  return (
    <section className="summary">
      <h2>Niðurstöður</h2>
      <p>
        Þú kunnir {knownCount} af {cards.length}
      </p>

      <h3>Spjöld sem þú þarft að æfa betur:</h3>

      {toPractice.length === 0 ? (
        <p>Fullkomið! 🎉</p>
      ) : (
        <ul>
          {toPractice.map((card) => (
            <li key={card.id}>{card.front}</li>
          ))}
        </ul>
      )}

      <button onClick={onRestart}>Byrja aftur</button>
    </section>
  );
}

export default Summary;
