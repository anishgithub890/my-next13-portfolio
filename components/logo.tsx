'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex cursor-pointer w-auto">
      <MotionLink
        href="/"
        className="w-10 h-10 pt-2 text-center justify-center bg-[#7376c7] text-white rounded-full text-base font-bold"
        whileHover={{
          scale: 1.1,
          backgroundColor: [
            'rgb(131,58,180,1)',
            'rgb(253,29,29,1)',
            'rgb(252,176,69,1)',
            'rgb(131,58,180,1)',
          ],
          transition: { duration: 1, repeat: Infinity, scale: 1.2 },
        }}
      >
        AM
      </MotionLink>
    </div>
  );
};

export default Logo;
