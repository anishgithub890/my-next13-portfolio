// 'use client';

// import { Menu } from 'lucide-react';
// import { useState } from 'react';

// import { useRouter } from 'next/navigation';
// import { currentProfile } from '@/lib/current-profile';
// import { UserAvatar } from '../user-avatar';
// import { UserButton, useAuth } from '@clerk/nextjs';

// const UserMenu = () => {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(true);

//   const profile = currentProfile();
//   const { isSignedIn } = useAuth();

//   return (
//     <div className="relative">
//       <div className="flex flex-row items-center gap-3">
//         <div
//           onClick={() => {}}
//           className="
//           hidden
//           md:block
//           text-sm
//           font-semibold
//           py-3
//           px-4
//           rounded-full
//           hover:bg-neutral-100
//           transition
//           cursor-pointer
//         "
//         >
//           Airbnb your home
//         </div>
//         <div
//           onClick={() => {}}
//           className="
//           p-4
//           md:py-1
//           md:px-2
//           border-[1px]
//           border-neutral-100
//           flex
//           flex-row
//           items-center
//           gap-3
//           rounded-full
//           cursor-pointer
//           hover:bg-neutral-200
//           transition
//         "
//         >
//           <Menu />
//           <div className="hidden md:block">
//             <UserAvatar />
//           </div>
//         </div>
//       </div>
//       {!isOpen && (
//         <div
//           className="
//           absolute
//           rounded-xl
//           shadow-md
//           w-[40vw]
//           md:w-3/4
//           bg-white
//           overflow-hidden
//           right-0
//           top-12
//           text-sm

//           "
//         >
//           <div className="flex flex-col cursor-pointer">
//             {isSignedIn ? (
//               <>
//                 <UserButton
//                   afterSignOutUrl="/"
//                   appearance={{
//                     elements: {
//                       avatarBox: 'h-[35px] w-[35px]',
//                     },
//                   }}
//                 />
//               </>
//             ) : (
//               <>
//                 <button onClick={() => router.push('/sign-up')}>Login</button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserMenu;
