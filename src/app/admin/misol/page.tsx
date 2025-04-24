"use client";

import React, { useState } from "react";

type Card = {
  id: string;
  title: string;
};

const initialData: Record<string, Card[]> = {
  open: [{ id: "1", title: "Card 1" }],
  inprogress: [{ id: "2", title: "Card 2" }],
  close: [
    { id: "3", title: "Card 3" },
    { id: "4", title: "Card 3" },
    { id: "5", title: "Card 3" },
    { id: "6", title: "Card 3" },
  ],
};

export default function Orders() {
  const [columns, setColumns] = useState(initialData);
  const [dragged, setDragged] = useState<Card | null>(null);

  const handleDragStart = (card: Card) => setDragged(card);

  const handleDrop = (key: string) => {
    if (!dragged) return;

    // Remove from old column
    const newCols = { ...columns };
    Object.keys(newCols).forEach((k) => {
      newCols[k] = newCols[k].filter((c) => c.id !== dragged.id);
    });

    // Add to new column
    newCols[key].push(dragged);
    setColumns(newCols);
    setDragged(null);
  };

  return (
    <div className="flex gap-4 p-6">
      {["open", "inprogress", "close"].map((key) => (
        <div
          key={key}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(key)}
          className="w-1/3 bg-gray-100 p-4 rounded shadow min-h-[300px]"
        >
          <h2 className="text-center font-bold mb-2 uppercase">{key}</h2>
          {columns[key].map((card) => (
            <div
              key={card.id}
              draggable
              onDragStart={() => handleDragStart(card)}
              className="bg-white p-4 mb-2 rounded shadow cursor-move"
            >
              {card.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
