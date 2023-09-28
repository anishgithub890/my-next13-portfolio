import HomePage from '@/app/(main)/(routes)/home/page';
import Navbar from '@/components/navigation/navigation-navbar';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <main>
        <Navbar />
        <HomePage />
        {children}
      </main>
    </div>
  );
}
