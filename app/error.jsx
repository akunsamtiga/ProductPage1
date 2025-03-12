// app/error.jsx
"use client";
import React from 'react';

export default function Error({ error, reset }) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-600">Something went wrong!</h1>
        <p className="mt-4">{error.message}</p>
        <button onClick={() => reset()} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
          Try again
        </button>
      </body>
    </html>
  );
}
