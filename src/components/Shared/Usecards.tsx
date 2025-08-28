import { useEffect, useState } from "react";
export interface Carddata {
  id: number;
  image: React.ReactNode | string;
  title: string | React.ReactNode;
  subtitle: React.ReactNode | string;  
  color: string;
  category: string;
}
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
