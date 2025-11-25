"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth() || {};

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-rose-200 to-pink-300 text-black">
      {!user ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Welcome to Week 9!</h1>
          <button
            onClick={gitHubSignIn}
            className="bg-rose-400 text-white px-6 py-2 rounded-lg shadow hover:bg-rose-500 transition"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-2 text-rose-600">
            Welcome, {user.displayName}!
          </h1>
          <p className="mb-4 text-gray-700">{user.email}</p>
          <Link
            href="/week-10/shopping-list"
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={firebaseSignOut}
            className="mt-4 bg-gray-500 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          >
            Sign Out
          </button>
        </>
      )}
    </main>
  );
}
