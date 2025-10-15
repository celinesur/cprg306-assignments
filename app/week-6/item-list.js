"use client";
import Item from "./item";
import { useState } from "react";
import data from "./items.json";

export default function ItemList() {
  // use state for sorting
  const [sortBy, setSortBy] = useState("name");

  // sort items based on sortBy
  const sortedItems = [...data].sort =((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  // render
  
}