"use client";

import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return[];
  }
}

export default function MealIdeas({ ingredient}) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    if (!ingredient) return;
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  }
  
  
}