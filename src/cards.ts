export type Card = {
  id: number;
  front: string;
  back: string;
};

export const cards: Card[] = [
  { id: 1, front: "Hvað gerir useState?", back: "Gefur componentinum minni: gildi og fall sem breytir því." },
  { id: 2, front: "Hvað eru props?", back: "Gögn sem foreldri sendir til barns. Barnið breytir þeim ekki." },
  { id: 3, front: "Af hverju ekki push() á fylki í state?", back: "React tekur bara eftir nýju fylki. Notið [...items, nýtt]." },
  { id: 4, front: "Hvað þýðir && í JSX?", back: "Ef vinstri hliðin er sönn birtist hægri hliðin, annars ekkert." },
  { id: 5, front: "Til hvers er key í map()?", back: "Svo React viti hvaða stak er hvað þegar listinn breytist." },
  {
    id: 6,
    front: "Hvernig lætur barn foreldri vita af smelli?",
    back: "Foreldrið sendir fall sem prop, t.d. onDelete, og barnið kallar á það.",
  },
];
