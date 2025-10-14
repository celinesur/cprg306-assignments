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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black rounded-lg shadow-md p-6 w-full max-w-sm mx-auto space-y-4"
    >
      {/* Name Field */ }
      <div>
        <label className="block font semibold mb-1">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Enter item name"
        />
      </div>

      {/* Quantity Section */}
      <div className="text-center">
        <p className="text-lg mb-2">
          Quantity: <span className="font-bold">{quantity}</span>
        </p>

        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 rounded 
              ${quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-red-300 hover:bg-red-400"} 
             text-white`}
          >
            -
          </button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 rounded 
              ${quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-green-300 hover:bg-green-400"} 
             text-white`}
          >
            +
          </button>
        </div>
      </div>
    
      {/* Category Field */}
      <div>
        <label className="block font-semibold mb-1">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-rose-300 hover:bg-rose-400 text-white font-semibold py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}