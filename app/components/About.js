// app/components/About.js
export default function About() {
  return (
    <section id="about" className="py-20 bg-[#1f1f1f] text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <img
          src="/pratik image.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-3xl border-4 border-cyan-400 shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-2">About <span className="text-cyan-400">Me</span></h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I&apos;m a Application Developer passionate about building modern web apps. 
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I have completed Masters of Computer Applications (MCA) from Banaras Hindu University (BHU), Varanasi, Uttar Pradesh, India in 2024.
            </p>
          </p>
          <a href="#" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition">Read More</a>
        </div>
      </div>
    </section>
  );
}
