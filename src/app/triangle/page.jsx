"use client";
import React, { useState } from "react";
import Link from "next/link";
import GenerateTriangle from "../components/p5Sketches/GenerateTriangle";

export default function TrianglePage() {
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [side3, setSide3] = useState("");

  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20">
        <h1 className="mx-auto max-w-4xl font-bold text-5xl sm:text-7xl text-gray-300">
          Triangle Generator
        </h1>
        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Enter Side 1 Length"
            value={side1}
            onChange={(e) => setSide1(e.target.value)}
            className="p-2 border rounded"
            style={{ color: "black", fontSize: "16px" }}
          />
          <input
            type="text"
            placeholder="Enter Side 2 Length"
            value={side2}
            onChange={(e) => setSide2(e.target.value)}
            className="p-2 border rounded"
            style={{ color: "black", fontSize: "16px" }}
          />
          <input
            type="text"
            placeholder="Enter Side 3 Length"
            value={side3}
            onChange={(e) => setSide3(e.target.value)}
            className="p-2 border rounded"
            style={{ color: "black", fontSize: "16px" }}
          />
        </div>

        <button
          onClick={() => {}}
          className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Generate Triangle
        </button>

        <div className="justify-center mt-10 w-full flex items-center overflow-visible">
          {side1 && side2 && side3 && (
            <GenerateTriangle
              sides={[parseFloat(side1), parseFloat(side2), parseFloat(side3)]}
            />
          )}
        </div>

        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}
