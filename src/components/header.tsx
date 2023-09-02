import React from 'react';


const Header = () => {
    return (
      <header className="bg-black p-4 fixed w-full top-0 z-10 border-b-8 border-red-500 pb-4">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-white text-xl font-semibold">
                DnD vault
              </a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-white hover:text-yellow-300">
                Create character
              </a>
            </div>
            {/* Add your navigation items here */}
          </nav>
        </div>
      </header>
    );
  };
  


export default Header