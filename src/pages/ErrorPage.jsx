import { Link } from "react-router";

function ErrorPage() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center
     text-center"
    >
      <h1 className="text-6xl font-extrabold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oops! This page isn't growing here.
      </h2>
      <p className="text-gray-500 mb-6">
        The page you’re trying to find has been pruned or is no longer here.
      </p>

      <Link
        to="/"
        className="bg-green hover:bg-green-700 text-white px-6 py-3 
        rounded-md font-medium transition"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default ErrorPage;
