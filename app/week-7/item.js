export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-300 rounded p-2 mb-2">
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}