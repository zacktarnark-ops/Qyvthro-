import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <Head>
        <title>QYVTHRO | Universal Sovereign Identity</title>
        <meta
          name="description"
          content="Create your Universal Sovereign Identity (Q-ID) and unlock AI-powered trust, automation, and digital freedom."
        />
      </Head>

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-[200px] rounded-full top-20 animate-pulse"></div>

      {/* Logo + Title */}
      <div className="flex items-center space-x-3 mb-6 z-10">
        <img
          src="/logo.png"
          alt="QYVTHRO Logo"
          className="w-14 h-14 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.5)]"
        />
        <h1 className="text-5xl font-bold tracking-wide bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
          QYVTHRO
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-center text-gray-300 max-w-xl mb-10 text-lg z-10">
        <span className="text-yellow-400 font-semibold">One Sovereign ID.</span>{" "}
        Infinite AI Power.<br /> Your gateway to true digital independence.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 z-10">
        <Link href="/signup">
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-2xl hover:opacity-90 transition-all shadow-[0_0_15px_rgba(255,215,0,0.5)]">
            Create Q-ID
          </button>
        </Link>
        <Link href="/login">
          <button className="px-6 py-3 border border-yellow-400 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all">
            Log In
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-500 text-sm z-10">
        © {new Date().getFullYear()} QYVTHRO. All rights reserved.
      </footer>
    </div>
  );
            }
