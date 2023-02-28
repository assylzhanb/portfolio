import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import DotGroup from './components/DotGroup';
import Landing from './components/Landing';
import LineGradient from './components/LineGradient';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Extracurriculars from './components/Extracurriculars';
import Res from './components/Res';








function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 1060px)');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // NAVBAR COMPONENT
    <div className="app bg-my-purple">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {/* DOT GROUP COMPONENT */}
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
      {/* LANDING COMPONENT */}
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
      >
        <Landing setSelectedPage={setSelectedPage} />
      </motion.div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'></div>
      {/* SKILLS COMPONENT */}
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>

      <LineGradient />
      {/* PROJECTS COMPONENT */}
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      {/* CARDS COMPONENT */}
      <div className="flex justify-center mx-auto md:h-full">
        <Res />
      </div>
      <p>SOME SHIT</p>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("extracurriculars")}
        >
          <Extracurriculars />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
// Res component is not working why?
// A: because it is not a component, it is a function
