"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page () {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <main className="p-6 min-h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
      
      <NewItem onAddItem = {handleAddItem} />
      <ItemList items = {items} />
    </main>
  );
}