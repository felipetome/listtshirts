import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="w-full bg-white h-12 sm:h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center justify-start w-full max-w-screen-lg mx-auto pl-4">
        <Link href="/">
          <span className="flex items-center text-blue-600 hover:underline cursor-pointer">
            <FiArrowLeft className="mr-2" /> Voltar
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center">
      </div>
    </header>
  );
};

export default Header;
