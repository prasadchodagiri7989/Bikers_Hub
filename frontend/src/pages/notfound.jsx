import React from "react";
import Footer from "../components/footer";

const NotFound = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-[#DEAD68]">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
      <a
        href="/"
        className="mt-6 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded shadow"
      >
        Go Back Home
      </a>
    </div>
    <Footer />
    </>
  );
};

export default NotFound;
