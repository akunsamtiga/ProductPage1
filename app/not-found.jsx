export default function NotFound() {
    return (
      <main className="flex items-center justify-center h-screen text-center">
        <div>
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! Page not found.</p>
          <a href="/" className="text-blue-500 hover:underline">
            Go back home
          </a>
        </div>
      </main>
    );
  }
  