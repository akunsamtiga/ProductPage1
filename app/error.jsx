"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
        <p className="text-2xl text-gray-700 mb-8">
          Something went wrong. Please try again later.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
