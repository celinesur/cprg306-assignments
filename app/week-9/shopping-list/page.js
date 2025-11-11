"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page () {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  const handleItemSelect = (item) => {
    let clean = item.name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "")
      .trim()
      .toLowerCase();
    setSelectedItemName(clean);
  };

  return (
    <main className="p-6 min-h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List & Meal Ideas</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <NewItem onAddItem = {handleAddItem} />
          <ItemList items = {items} onItemSelect={handleItemSelect} />
        </div>

      <MealIdeas ingredient={selectedItemName} />
    </div>
    </main>
  );
}