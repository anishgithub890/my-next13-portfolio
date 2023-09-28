'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  const router = useRouter();
  return (
    <div className="pl-2 flex-row cursor-pointer">
      <MotionLink
        href="/"
        className="w-12 h-12 pl-2 bg-black text-white flex items-center rounded-full text-xl font-bold"
        whileHover={{
          scale: 1.1,
          backgroundColor: [
            '#121212',
            'rgb(131,58,180,1)',
            'rgb(253,29,29,1)',
            'rgb(252,176,69,1)',
            'rgb(131,58,180,1)',
          ],
          transition: { duration: 1, repeat: Infinity, scale: 1.1 },
        }}
      >
        AM
      </MotionLink>
    </div>
  );
};

export default Logo;
