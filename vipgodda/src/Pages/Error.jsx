
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl mt-4">Oops! Page Not Found</h2>
            <p className="text-gray-400 mt-2">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition duration-300">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
