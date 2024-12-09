import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Chabbi Quiz!</h1>
        <p className="text-lg md:text-xl font-light">Test your knowledge with exciting layouts and challenging questions.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-6">
        <Link to='/user'
          className="px-6 py-3 text-lg font-medium bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-500 transition"
          
        >
          Explore As User
        </Link>

        <Link to='/admin'
          className="px-6 py-3 text-lg font-medium bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-500 transition"
          
        >
          Explore As Admin
        </Link>
      </div>

      <footer className="absolute bottom-5 text-center">
        <p className="text-sm">Powered by <span className="font-bold">Chabbi</span></p>
      </footer>
    </div>
    </>
  );
}

