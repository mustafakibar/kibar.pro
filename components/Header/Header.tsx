import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='w-full mx-auto flex p-4 items-end justify-between'>
      <div className='relative'>
        <span className='absolute bottom-2 right-2 size-4 text-2xl font-extrabold'>
          Kibar
        </span>
        <Image
          className='w-12 h-12'
          src='/crab.png'
          width={512}
          height={512}
          alt='kibar.pro Logo'
        />
      </div>

      {/* TODO: Add a theme switcher here. */}

      {/* On small screens, show a hamburger menu icon. */}
      <nav className='md:hidden flex-shrink'>
        <button>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </nav>

      {/* On large screens, show the navigation links on the right side of the logo. */}
      <nav className='hidden md:flex flex-shrink justify-end items-end'>
        <ul className='inline-flex'>
          <li>Home</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Snippets</li>
          <li>About</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
