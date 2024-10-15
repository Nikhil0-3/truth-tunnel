import Navbar from "@/components/Navbar";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Eye, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Import the new component
import ScrollProgressBar from "@/components/ScrollProgressBar"; // Import the progress bar

const Page = async () => {
  const session = await getServerSession();
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <ScrollProgressBar /> {/* Add the scroll progress bar here */}
        <Navbar />
        {/* Hero Section */}
        <section
          style={{ padding: "12rem" }}
          className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
        >
          {/* Checkered background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 grid grid-cols-12 gap-2">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="w-full h-full bg-red-600"></div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Secure Communication in a Dangerous World
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience unbreakable encryption and total anonymity. Truth
              Tunnel: Where your secrets remain hidden.
            </p>
            <Link href={session ? "/dashboard" : "/sign-in"}>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg">
                Enter the Shadows <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        {/* Advanced Covert Features Section */}
        <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-black dark:bg-black">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
            Advanced Covert Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature Cards */}
            <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-red-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Shield className="h-16 w-16 text-red-500" />
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Top Secret
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">
                  Impenetrable Security
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Military-grade encryption protects your messages from prying
                  eyes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-red-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Zap className="h-16 w-16 text-red-500" />
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Quantum Speed
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">
                  Instant Transmission
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Messages delivered at the speed of light, leaving no trace
                  behind.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-red-800 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Eye className="h-16 w-16 text-red-500" />
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Ghost Protocol
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">
                  Invisible Presence
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced cloaking ensures your digital footprint remains
                  undetectable.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* CTA Section */}
        <section
          className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 text-center text-white"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 0, 0, 0.1))",
          }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
            Ready to Disappear?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the elite network of shadow communicators. Sign up for priority
            access now.
          </p>
          <Link href={session ? "/dashboard" : "/sign-in"}>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
              Infiltrate
            </Button>
          </Link>
        </section>
        {/* Footer */}
        <footer className="relative z-10 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-600 dark:text-gray-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>
              &copy; 2024 Truth Tunnel. All rights reserved. Secured by quantum
              encryption.
            </p>
          </div>
        </footer>
        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Page;
