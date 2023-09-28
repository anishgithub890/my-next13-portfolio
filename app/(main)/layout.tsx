import Navbar from '@/components/navigation/navigation-navbar';

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
