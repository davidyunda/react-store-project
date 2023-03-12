import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center 
        justify-between px-2 py-3 bg-gradient-to-r from-sky-500 to-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-md font-semibold tracking-widest leading-relaxed inline-block mr-2 py-0 whitespace-nowrap uppercase text-white"
            >
              Qatu
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}