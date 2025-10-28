export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)} 
      className="border border-gray-300 rounded p-2 mb-2 cursor-pointer hover:bg-rose-100 transition">
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}