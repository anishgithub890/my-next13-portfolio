'use client';

import { useEffect, useState } from 'react';
import { MobileSidebar } from './navigation-mobilesidebar';
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../mode-toggle';

const TOP_OFFSET = 66;

const NavigationHeader = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full bg-white dark:bg-zinc-700 z-10 shadow-sm ${
        showBackground ? 'bg-zinc-200 bg-opacity-90 transition-all' : ''
      }`}
    >
      <div
        className="
          py-1
          pt-4
          border-b-[2px]
        "
      >
        <div
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-1
            md:gap-0
          "
        >
          <div className="pl-2">
            <MobileSidebar />
          </div>
          <div className="pb-2 mt-auto flex items-center flex-row gap-y-4 gap-2 pr-2 pt-4">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: 'h-[35px] w-[35px]',
                },
              }}
            />
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
