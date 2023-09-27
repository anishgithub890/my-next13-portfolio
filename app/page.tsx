import HomePage from '@/app/(main)/(routes)/home/page';
import { Sidebar } from '@/components/navigation/navigation-sidebar';
import Navbar from '@/components/navigation/navigation-navbar';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      {/* <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900"> */}
      {/* <Sidebar /> */}
      {/* </div> */}
      <main>
        <Navbar />
        <HomePage />
        {children}
      </main>
    </div>
  );
}

//className="md:pl-72 pb-10"x
