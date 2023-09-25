import { UserButton } from '@clerk/nextjs';

import { MobileSidebar } from '@/components/navigation/navigation-mobilesidebar';

const Navbar = async () => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="text-base font-semibold px-3 flex items-center h-12 border-neutral-200">
        Navigation Header
      </div>
    </div>
  );
};

export default Navbar;
