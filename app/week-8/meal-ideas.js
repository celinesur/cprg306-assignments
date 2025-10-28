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
  
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-rose-500">
        Meal Ideas for: {ingredient || "-"}
      </h2>

      {meals.length === 0 ? (
        <p className="text-gray-500">No meal ideas yet</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center space-x-3">
              <img 
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-12 h-12 rounded-md object-cover"
              />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}