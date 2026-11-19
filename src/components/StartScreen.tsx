type StartScreenProps = {
  total: number;
  onStart: () => void;
};

function StartScreen({ total, onStart }: StartScreenProps) {
  return (
    <section className="start">
      <p>Prófaðu þig í hugtökum úr React.</p>
      <p className="muted">{total} spjöld</p>
      <button onClick={onStart}>Byrja</button>
    </section>
  );
}

export default StartScreen;
