import { UserButton } from '@clerk/nextjs';
import HomePage from './(main)/(routes)/home/page';

export default function Home() {
  return (
    <>
      <div className="h-full">
        <div className="flex justify-end">
          <UserButton afterSignOutUrl="/" />
        </div>
        <p className="text-2xl text-red-500 font-semibold">
          My Next-13 Portfolio
        </p>
        <HomePage />
      </div>
    </>
  );
}
