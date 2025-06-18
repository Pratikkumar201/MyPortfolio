
// import VisitorCounter from "./VisitorCounter";
export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#1f1f1f] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">My Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#2a2a2a] p-6 rounded-2xl text-center hover:shadow-lg hover:shadow-cyan-500">
            <h3 className="text-2xl font-semibold mb-2">Website Development</h3>
            <p className="mb-4 text-gray-300">Custom websites using modern technologies tailored to your needs.</p>
            <button className="bg-cyan-500 text-black px-4 py-2 rounded-md">Read More</button>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-2xl text-center hover:shadow-lg hover:shadow-cyan-500">
            <h3 className="text-2xl font-semibold mb-2">Machine Learning / Deep Learning</h3>
            <p className="mb-4 text-gray-300">Creative designs that communicate brand values visually.</p>
            <button className="bg-cyan-500 text-black px-4 py-2 rounded-md">Read More</button>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-2xl text-center hover:shadow-lg hover:shadow-cyan-500">
            <h3 className="text-2xl font-semibold mb-2">Data Analyst / Business Analyst</h3>
            <p className="mb-4 text-gray-300">SEO, PPC, and social media strategies to grow your online presence.</p>
            <button className="bg-cyan-500 text-black px-4 py-2 rounded-md">Read More</button>
          </div>
        </div>
        {/* <VisitorCounter/> */}
      </div>
    </section>
  );
}
