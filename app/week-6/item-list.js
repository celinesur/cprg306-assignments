"use client";
import Item from "./item";
import { useState } from "react";
import data from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
}