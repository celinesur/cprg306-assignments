"use client";
import Item from "./item";
import { useState } from "react";
import data from "./items.json";

export default function ItemList() {
  // use state for sorting
  const [sortBy, setSortBy] = useState("name");

  // sort items based on sortBy
  const sortedItems = [...data].sort ((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  // render
  return (
    <div className="p-4 bg-white text-black rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name"
              ? "bg-rose-300 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded $ ${
            sortBy === "category"
              ? "bg-rose-300 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
      </div>
          
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            />
        ))}
      </ul>
    </div>
  );
}