import Navbar from '@/components/navigation/navigation-navbar';
// import { Sidebar } from '@/components/navigation/navigation-sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
