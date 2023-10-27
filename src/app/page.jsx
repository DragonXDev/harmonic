import Image from "next/image";
import Link from "next/link";
import { navbar } from "./components/navbar"; // Adjust the path if Navbar is in a different directory

export default function HomePage() {
  return (
    <>
      <navbar />
      <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        {/*<Header />*/}
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-8xl leading-relaxed">
            Bringing<span className="block mb-2"></span>mathematics to{" "}
            <span className="relative whitespace-nowrap animate-textColorAnimation duration-5000 ease-linear infinite">
              <span className="relative">music</span>
            </span>
          </h1>

          <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
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
        {/* <Footer /> */}
      </div>
    </>
  );
}
