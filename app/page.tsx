import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-end">
          <UserButton afterSignOutUrl="/" />
        </div>
        <p className="text-2xl text-red-500 font-semibold">
          My Next-13 Portfolio
        </p>
      </div>
    </>
  );
}
