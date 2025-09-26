import ItemList from "./item-list";

export default function Page () {
  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}