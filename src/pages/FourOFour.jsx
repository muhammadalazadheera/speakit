import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

function FourOFour() {
  return (
    <div class="h-screen flex items-center justify-center">
      <Helmet><title>404</title></Helmet>
      <div class="text-center px-6">
        <h1 class="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 class="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p class="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          class="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default FourOFour;