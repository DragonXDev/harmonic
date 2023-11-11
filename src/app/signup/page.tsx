"use client";
import { useRouter } from "next/navigation";
import { supabase } from "../../../supabase/supabase";
import React, { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username, "Password:", password);
    // Here you can add logic to handle the submission, like sending data to a server.
  };

  const signUp = async () => {
    let { data, error } = await supabase.auth.signUp({
      email: username,
      password: password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>
        <input
          className="input input-bordered w-full mb-4"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "0.5rem",
            color: "black",
          }}
        />
        <input
          className="input input-bordered w-full mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "0.5rem",
            color: "black",
          }}
        />
        <button
          className="btn btn-primary w-full"
          type="submit"
          onClick={signUp}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
