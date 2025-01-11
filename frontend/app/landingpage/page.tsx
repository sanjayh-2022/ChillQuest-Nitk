"use client";

import Head from "next/head";
import { useRef } from "react";
import UploadCard from "../Cardlp";

const LandingPage = () => {
  // Create a reference to the UploadCard section
  const uploadCardRef = useRef<HTMLDivElement>(null);

  // Scroll to the UploadCard section on button click
  const handleScrollToUploadCard = () => {
    if (uploadCardRef.current) {
      uploadCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-12">
      <Head>
        <title>Product Landing Page</title>
        <meta
          name="description"
          content="An amazing product developed by an awesome team."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative hero bg-base-200 min-h-screen">
        {/* Moving Gradient Background */}
        <div
  className="absolute inset-0 bg-gradient-to-r from-black via-gray-500 to-green-900 animate-bgMove opacity-60 z-0"
  style={{
    backgroundSize: "300% 300%",
  }}
></div>

        <div className="hero-content flex-col lg:flex-row z-10 relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Product Image"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-100 animate-shine">
  Welcome to Product X
</h1>
            <p className="py-6">
              Product X is a revolutionary solution designed to make your life
              simpler and more productive. Created by Team Innovators, it
              delivers cutting-edge features and seamless user experience.
            </p>
           
            <button
  className="relative bg-black text-white px-6 py-3 rounded-lg group overflow-hidden transition-all duration-300"
  onClick={handleScrollToUploadCard}
>
  {/* Hover background effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-900 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  {/* Button text */}
  <span className="relative z-10">Get Started</span>
</button>

          </div>
        </div>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="bg-base-200 py-4 overflow-hidden">
        <p className="text-center text-xl font-semibold text-gray-700 animate-marquee">
          🚀 Discover the future of innovation with Product X! 🚀 Empower your productivity! 🚀 Revolutionizing tomorrow, today!
        </p>
      </div>

      {/* UploadCard Section */}
      <div ref={uploadCardRef} className="hero bg-base-200 min-h-screen py-12">
        <div className="hero-content flex-col text-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-600 to-green-500">
            Understand each IPO better! Analyse RHP now!
          </h1>
          <UploadCard />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full py-6 px-8 bg-base-200 text-center">
        <p className="text-sm">
          &copy; 2025 Team Innovators. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
