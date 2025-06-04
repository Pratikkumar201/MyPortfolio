// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white flex items-center justify-center">
//       <div className="text-center space-y-6">
//         <h1 className="text-5xl font-bold">Hi, I'm Pratik Kumar</h1>
//         <h6 className="text-2xl">Begusarai, Bihar</h6>
//         <p className="text-2xl">Full Stack Developer | Java Backend | React/Next Frontend</p>
//         <p className="text-xl"> I have completed my <strong>Master of Computer Applications </strong> from <strong>Banaras Hindu University </strong> 
//         and have hands-on experience on HTML, Tailwind CSS, React, Next, Javascript, Java, SpringBoot Framework, Python, Machine learning, Deep Learning</p>
//         <button className="bg-white text-black px-6 py-3 rounded-xl shadow-lg hover:scale-105 transform transition" ><a href="https://news.bhu.ac.in/" target="_blank">Download Resume</a>
//         </button>
//         </div>
//     </section>
//   );
// }

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-10 gap-10 bg-[#121212]  text-white">
      <div className="max-w-xl">
        <h2 className="text-xl">Hello, It's Me</h2>
        <h1 className="text-5xl font-bold mt-2">Pratik Kumar</h1>
        <p className="text-cyan-400 text-xl mt-2">I'm an Application Developer and Machine Learning / Deep Learning Engineer</p>
        <p className="mt-4 text-gray-300">Passionate about building web applications using HTML, Tailwind CSS, React, Next, Javascript, Spring Boot.</p>
        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/in/pratik-kumar-ba467425b/" className="inline-block bg-cyan-400 text-black font-semibold px-2 py-2 rounded-full hover:bg-cyan-300" target='_blank' rel="noopener noreferrer">
          <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={30} className="hover:opacity-70" />
          </a>
          <a href="https://github.com/Pratikkumar201" className="inline-block bg-cyan-400 text-black font-semibold px-2 py-2 rounded-full hover:bg-cyan-300" target='_blank' rel="noopener noreferrer">
          <Image src="/github.svg" alt="GitHub" width={40} height={30} className="hover:opacity-70" /> </a> 
          {/* className="hover:text-cyan-400" */}
          <a href="https://leetcode.com/u/PK8320/" className="inline-block bg-cyan-400 text-black font-semibold px-2 py-2 rounded-full hover:bg-cyan-300" target='_blank' rel="noopener noreferrer">
          <Image src="/leetcode.svg" alt="LeetCode" width={40} height={30} className="hover:opacity-70" />
          </a>
          <a href="https://www.hackerrank.com/profile/pratikkumar_bhu1" className="inline-block bg-cyan-400 text-black font-semibold px-2 py-2 rounded-full hover:bg-cyan-300" target='_blank' rel="noopener noreferrer">
          <Image src="/hackerrank.svg" alt="HackerRank" width={40} height={30} className="hover:opacity-70" />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/13ARGQwQ4tJf_PLcJ4ov5CHPnDp5ufUKv/view?usp=sharing"
          className="mt-4 inline-block bg-cyan-400 text-black font-semibold px-9 py-2 rounded-full hover:bg-cyan-300" target='_blank'
        > 
        <Image src="/download-button.svg" alt="Download Resume" width={40} height={30} className="hover:opacity-70" /> Resume
        
        </a>
        
      </div>
      <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
        <Image src="/pratik image.jpg" fill alt="profile" className="object-cover" />
      </div>
    </section>
  );
}
