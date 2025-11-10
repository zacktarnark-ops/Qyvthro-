// pages/signup.js

// Background: min-h-screen gradient + glowing divs (like index.js)
// Centered card: semi-transparent dark panel with shadow/glow
// Form fields: Email, Password, Confirm Password
// CTA: Gradient “Create Q-ID” button

import React from 'react';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-black/70 p-8 rounded-xl shadow-lg">
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 rounded bg-gray-800 text-white"
          />
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded">
            Create Q-ID
          </button>
        </form>
      </div>
    </div>
  );
              }
