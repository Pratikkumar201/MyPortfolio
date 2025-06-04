import Head from 'next/head';
import Navbar from "./components/Navbar";
import Hero from './components/hero';
import About from "./components/About";
import Services from "./components/Services";
import Projects from './components/projects';
import Contact from './components/contact';


export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Hero />
      <Projects />
      <Contact />
      <About />
      <Services />
    </div>
  );
}

