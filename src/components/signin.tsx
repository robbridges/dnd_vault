import React from 'react';


const SignInPage = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-96 shadow-red-600 ">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white p-2 rounded-md w-full hover:bg-red-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;