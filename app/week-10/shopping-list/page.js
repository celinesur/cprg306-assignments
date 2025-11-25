"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page () {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const {user} = useUserAuth();

  useEffect(() => {
    async function loadItems() {
      if (!user) return;
      const loadedItems = await getItems(user.uid);
      setItems(loadedItems);
    }

    loadItems();
  }, [user]);

  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-gray-700 bg-gradient-to-b from-pink-100 via-rose-200 to-pink-300">
        <p className="text-xl font-semibold mb-4">
          You must be logged in to view this page.
        </p>
        <a
          href="/week-10"
          className="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-500"
          >
            Go back to login
          </a>
      </main>
    );
  }

  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    newItem.id = id;
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