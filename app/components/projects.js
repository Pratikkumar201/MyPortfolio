// // export default function Projects() {
// //   const sampleProjects = [
// //     {title: 'BHU News Website', desc: 'All news, achievements, activities of BHU on one website', link: 'https://news.bhu.ac.in/'},
// //     { title: 'Chat App', desc: 'Real-time chat using WebSocket', link: '#' },
// //     { title: 'Portfolio Site', desc: 'React + Tailwind + Next.js', link: 'https://start.spring.io/' },
// //     {title: 'Politicians Speech Analyzer', desc: 'Python + Streamlit', link: 'https://ed36-34-121-99-71.ngrok-free.app/'},
// //     { title: 'Weather API', desc: 'Java backend with OpenWeatherMap API', link: '#' },
// //   ];

// //   return (
// //     <section className="py-16 px-8 bg-gray-100">
// //       <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
// //       <div className="grid md:grid-cols-3 gap-8">
// //         {sampleProjects.map((project, idx) => (
// //           <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
// //             <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
// //             <p className="mb-4">{project.desc}</p>
// //             <a href={project.link} className="text-blue-600 font-medium" target="_blank">View Project →</a>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }



// // components/Projects.js
// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-[#121212] text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Latest Projects</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[1, 2, 3, 4, 5, 6].map((index) => (
//             <div
//               key={index}
//               className="h-48 bg-[#2a2a2a] rounded-xl hover:shadow-md hover:shadow-cyan-400 cursor-pointer"
//             >
//               <img
//                 src={`/project${index}.jpg`}
//                 alt={`Project ${index}`}
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      slug: "politicians-speech-analyzer",
      title: "Politicians Speech Analyzer Web App",
      image: "/politics-speech-analyzer.png",
      description:
        "A Hindi NLP app that clusters and analyzes political speeches using unsupervised learning.",
      liveLink: "https://example.com/speech-analyzer",
      githubLink: "https://github.com/Pratikkumar201/speech-analyzer",
    },
    // {
    //   slug: "bhu-news-website",
    //   title: "BHU News Website",
    //   image: "/BHU-news_site.png",
    //   description:
    //     "A media-focused content management site for BHU news and public announcements.",
    //   liveLink: "https://example.com/bhu-news",
    //   githubLink: "https://github.com/Pratikkumar201/bhu-news",
    // },
    {
      slug: "credit-card-fraud-detection",
      title: "Credit Card Fraud Detection",
      image: "https://via.placeholder.com/400x300",
      description: "Built a fraud detection model using logistic regression on anonymized credit card data.",
      githubLink: ""
    },
    {
      slug: "qr-code-generator",
      title: "QR Code Generator",
      image: "/qr-code.png",
      description: "Built QR Code Generator WebApp for PR Office, BHU to generate QR code and attach in Press Release or social media posts.",
      githubLink:""
    },
    {
      slug: "human-activity-recognition",
      title: "Human Activity Recognition",
      image: "/project-activity.jpg",
      description: "Implemented deep learning models to classify human activities from sensor datasets.",
      githubLink: ""
    },
    {
      slug: "hr-analytics-dashboard",
      title: "HR Analytics Dashboard (Power BI)",
      image: "/hr-dashboard.jpeg",
      description: "Designed Power BI dashboards using HR data and DAX for strategic insights.",
      githubLink: ""
    },
    {
      slug: "mcdonald-market-analysis",
      title: "McDonald's Market Basket Analysis",
      image: "/project-mcd.jpg",
      description: "Performed association rule mining (Apriori) on transaction data to find purchasing patterns.",
      githubLink: ""
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Latest Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={index}>
              <div className="bg-[#2a2a2a] p-4 rounded-xl hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 cursor-pointer ">
              {/* use this in just above div classname:- relative w-full h-48, if i don't want to specify width and height, then replace with only fill */}
                <img
                  src={project.image}
                  alt={project.title}
                  // width={100} height={100}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
