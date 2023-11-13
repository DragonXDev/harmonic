"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuth } from "@/components/providers/supabase-auth-provider";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { signOut, signInWithEmail, signInWithGithub, user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const error = await signInWithEmail(email, password);
      if (error) {
        setError(error);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        className="p-10 rounded-2xl shadow-xl w-1/3"
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign In</h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-800">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-bordered w-full"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "0.5rem",
              color: "black",
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-800">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input input-bordered w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "0.5rem",
              color: "black",
            }}
          />
        </div>
        <button className="btn btn-primary w-full" type="submit">
          Sign In
        </button>
        <p className="text-sm font-light text-gray-500 mt-4">
          Don’t have an account yet?{" "}
          <a
            href="signup"
            className="font-medium text-primary-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
