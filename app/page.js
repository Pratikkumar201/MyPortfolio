import Head from 'next/head';
import Navbar from "./components/Navbar";
import Hero from './components/hero';
import About from "./components/About";
import Services from "./components/Services";
import Projects from './components/projects';
import projects from './data/projects';
import Contact from './components/contact';
import VisitorCounter from './components/VisitorCounter';
import ShareButton from './components/ShareButton';


export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name='twitter:card' content='summary_large_image'/>
        <meta name='twitter:title' content='Pratik Portfolio Website'/>
        <meta name='twitter:description' content='You are going to visit Pratik (an Application Developer) Profile '/>
        <meta name='twitter:image' content='https://drive.google.com/file/d/1KONEk0ntILJVOFWRKlYehFNSJlNajRQp/view?usp=sharing'/>
        <meta name='twitter:site' content ='@Pratik4887'/>  

        <meta property='og:title' content='Pratik Portfolio'/>
        <meta property='og:description' content='Explore Who is Pratik, his interests, his projects, his experience, his expertise, you are going to get all details about Pratik'/>
        <meta property='og:url' content='https://my-portfolio-green-mu-65.vercel.app/'/>
        <meta property='og:site_name' content='Pratik Portfolio'/>
        <meta property='og:image' content='https://drive.google.com/file/d/1rJYv30SFw_skrsuu2OBleYnKno69YJUq/view?usp=sharing'/>
        <meta property='og:type' content='website'/>
      </Head>
      <main>
      <Hero />
      <Projects />
      <Contact />
      <About />
      <Services />
      <VisitorCounter />
      <ShareButton />
      </main>
    </div>
  );
}
