import Header from '@/components/Header';
import React from 'react';
import Link from 'next/link';  // Import Link from next/link

const Login = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex justify-center items-center h-screen bg-white">
        <form className="bg-black p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-white text-2xl mb-4 text-center">Login</h2>

          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="text-white mb-2 block">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="text-white mb-2 block">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Submit button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>

          {/* Link to Sign Up page */}
          <div className="mt-4 text-center">
            <p className="text-white">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
