"use client";

import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@example.com"
            className="w-100 border-b-2 px-2 py-3"
          />
          <div className="relative">
            {showPassword ? (
              <EyeClosed
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-3"
              />
            ) : (
              <Eye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-3"
              />
            )}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="password"
              className="w-100 border-b-2 px-2 py-3"
            />
          </div>
          <button type="submit" className="w-100 px-1 py-2">
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}
