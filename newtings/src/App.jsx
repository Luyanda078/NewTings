import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import GroupProjects from './components/GroupProject/GroupProjects';
import SkillsMatrix from './components/SkillsMatrix/SkillsMatrix';
import Education from './components/education/education';
import ScrollToTop from './components/scrollbutton/scrollbutton';


export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-[#0d182e]'>
    <Hero /> 
    <Skills />
    <Education/>
    <Experience />
    <SkillsMatrix/>
    <Projects />
    <GroupProjects />
    <Contact />
    <ScrollToTop/>
    <Footer />
   </main>
  )
}
