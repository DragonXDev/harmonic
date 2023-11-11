import Image from "next/image";
import Link from "next/link";
import { navbar } from "./components/navbar"; // Adjust the path if Navbar is in a different directory

export default function HomePage() {
  return (
    <>
      <navbar />
      <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-9xl leading-relaxed">
            Innovating<span className="block mb-2"></span>
            <span className="relative whitespace-nowrap animate-pulse text-purple-200">
              <span className="relative">music</span>
            </span>{" "}
            with
            <div className="[text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
              <span className="text-red-500 inline-flex flex-col overflow-hidden h-[auto] md:h-[calc(theme(fontSize.9xl)*theme(lineHeight.tight))]">
                <ul className="block animate-text-slide-6 text-center leading-tight [&_li]:block">
                  <li>mathematics</li>
                  <li>AI</li>
                  <li>algorithms</li>
                  <li>analysis</li>
                  <li>LLMs</li>
                  <li aria-hidden="true">technology</li>
                </ul>
              </span>
            </div>
          </h1>

          <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400 text-gray-500 leading-7">
            Simply input respective notes and chords and we will generate a
            mathematic model accordingly.
          </h2>
          <Link
            href="/triangle"
            className="cursor-pointer bg-gradient-to-r from-red-400 to-purple-400 bg-opacity-10 backdrop-blur-md rounded-3xl text-white font-medium px-6 py-4 sm:mt-10 mt-8 hover:bg-opacity-20 transition transform hover:scale-105"
          >
            Generate your math model
          </Link>

          <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
            <div className="flex flex-col space-y-10 mt-4 mb-16"></div>
          </div>
        </main>
      </div>
    </>
  );
}
