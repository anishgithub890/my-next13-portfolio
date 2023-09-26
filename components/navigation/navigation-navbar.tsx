import NavigationHeader from './navigation-header';

const Navbar = async () => {
  return (
    <div className="text-base font-semibold flex items-center h-12 w-full border-neutral-200 dark:border-neutral-800">
      <NavigationHeader />
    </div>
  );
};

export default Navbar;
