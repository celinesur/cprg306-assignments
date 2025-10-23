import ItemList from "./item-list";

export default function Page () {
  return (
    <main className="p-6 min-h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}