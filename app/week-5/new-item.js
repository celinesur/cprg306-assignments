"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName ] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity -1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);
    alert(`Item: ${name}
          Quantity: ${quantity}
          Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white text-black rounded-lg shadow-md p-6 w-full max-w-sm">
        <p className="text-lg">
          Quantity: <span className="font-bold">{quantity}</span>
      </p>

      <div className="flex justify-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded 
            ${quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"} 
            text-white`}
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded 
            ${quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} 
            text-white`}
        >
          +
        </button>
      </div>
    </div>
  </div>
  );
}