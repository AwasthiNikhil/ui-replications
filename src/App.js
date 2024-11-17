// src/App.js
import React from 'react';
import './index.css';  // Import your Tailwind CSS

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Tailwind + React!</h1>
        <p className="mt-4 text-gray-600">
          This is a simple example of how to integrate Tailwind CSS with React. You can start building your project now!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
