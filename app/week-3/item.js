export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-300 rounded-md p-4 mb-4 bg-black text-white">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}