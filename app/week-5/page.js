import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Item</h1>
      <NewItem />
    </main>
  );
}