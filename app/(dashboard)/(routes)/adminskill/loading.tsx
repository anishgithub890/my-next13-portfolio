'use client';

import { Loader } from '@/components/ui/loader';

const Loading = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
