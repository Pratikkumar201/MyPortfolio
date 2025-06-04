// 'use client';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-[#111827] text-white">
//       <h1 className="text-2xl font-bold">Welcome to Pratik's Profile</h1>
//       <ul className="flex gap-6 text-sm md:text-base">
//         {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
//           <li key={item}>
//             <Link href={`#${item.toLowerCase()}`} className="hover:text-cyan-400">
//               {item}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#111827] shadow-md py-2' : 'bg-[#111827] py-4'
      } text-white`}
    >
      <div className="flex justify-between items-center px-6 max-w-8xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold">Welcome to Pratik's Profile</h1>
        <ul className="flex gap-4 md:gap-6 text-sm md:text-base">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors duration-200">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

