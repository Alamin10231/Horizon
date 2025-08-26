import { useEffect, useState } from "react";

export function Usecards() {
  const [cards, setCards] = useState<Carddata[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("/Cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data.cards || []))
      .finally(() => setloading(false));
  }, []);
  return {
    cards,
    loading,
  };
}
