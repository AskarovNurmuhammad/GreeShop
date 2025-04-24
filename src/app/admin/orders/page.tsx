"use client";
import React, { useState } from "react";

const initialData = {
  open: [{ id: "1", title: "8ff6bc", desc: "Open item" }],
  inprogress: [{ id: "2", title: "8ff6bc", desc: "Inprogress item" }],
  close: [{ id: "3", title: "8ff6bc", desc: "Closed item" }],
};

const Orders = () => {
  const [columns, setColumns] = useState(initialData);
  const [draggedItem, setDraggedItem] = useState<{
    id: string;
    from: string;
  } | null>(null);

  const handleDragStart = (id: string, from: string) => {
    setDraggedItem({ id, from });
  };

  const handleDrop = (to: string) => {
    if (!draggedItem) return;

    const fromColumn = [...columns[draggedItem.from as keyof typeof columns]];
    const toColumn = [...columns[to as keyof typeof columns]];

    const itemIndex = fromColumn.findIndex(
      (item) => item.id === draggedItem.id
    );
    const [item] = fromColumn.splice(itemIndex, 1);
    toColumn.push(item);

    setColumns({
      ...columns,
      [draggedItem.from]: fromColumn,
      [to]: toColumn,
    });
    setDraggedItem(null);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="d-flex justify-between">
        <div className="d-flex gap-1">
          <a
            href="/admin/dashboard"
            className="text-black text-decoration-none"
          >
            Dashboard
          </a>
          <p>/</p>
          <strong>Orders</strong>
        </div>
      </div>
      <div className="d-flex  gap-4 p-4">
        {Object.entries(columns).map(([colName, items]) => (
          <div
            key={colName}
            className="min-w-[200px] max-w-sm w-full border border-gray-300 bg-white p-3 rounded-md"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(colName)}
          >
            <h3 className="text-center font-medium text-lg capitalize">
              {colName}
            </h3>

            {items.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item.id, colName)}
                className="rounded-lg border bg-card text-card-foreground w-full shadow-md hover:cursor-move mt-2"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <div className="p-6 border border-gray-100 mx-2 rounded-md pt-1">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">sadas</p>
                    <p className="text-sky-600">4 x</p>
                  </div>
                </div>
                <div className="items-center p-6 pt-0 flex justify-between">
                  <div className="text-xl font-bold mt-2">
                    Total:
                    <span className="text-sky-600 font-medium ml-2">
                      80000 USZ
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
