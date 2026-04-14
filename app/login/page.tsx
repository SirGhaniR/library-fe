"use client";

import { LoaderCircle, Lock } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    alert("Login successful!");
  }, 2000);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        {/* Dummy Logo */}
        <div className="mb-4 flex justify-center">
          <span className="text-3xl font-bold text-yellow-500">⚡</span>
        </div>
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
          Login
        </h2>
        <form id="loginForm">
          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500"></span>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <Lock size={20} />
              </span>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Forgot Password nanti kalau ada fiturnya */}
            {/* <div className="mt-2 text-right">
              <a
                href="javascript:void(0)"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div> */}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-10 w-full items-center justify-center rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 disabled:bg-gray-300"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" size={20} />
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Sign up */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">New here? </span>
          <a
            href="javascript:void(0)"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
