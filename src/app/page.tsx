"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "./components/Footer";
import botLogo from "../../public/botlogo.png";

export default function Home() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black-100">
        <div className="flex flex-col items-center mb-8">
          <Image
            src={botLogo}
            alt="GitBot Logo"
            width={200}
            height={200}
            className="mb-4"
          />
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to AIthlete
          </h1>
          <p className="text-xl text-white text-center max-w-2xl">
            AIthlete is your personalized fitness assistant, offering tailored
            workout plans, diet guidance, and support to help you gain or lose
            weight based on your goals. Achieve your fitness journey with
            AIthlete&apos;s intelligent, goal-driven approach
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleSignIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Sign In
          </button>
          <button
            onClick={handleSignUp}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Sign Up
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
