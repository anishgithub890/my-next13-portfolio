import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      <div className="flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="text-2xl text-red-500 font-semibold">
        My Next-13 Portfolio
      </div>
    </>
  );
}
