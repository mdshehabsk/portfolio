


import { FaLink } from "react-icons/fa";
// import ThemeToggler from "@/components/ThemeToggler";
import ThemeToggler from "../components/ThemeToggler";
import BackgroundEffect from "@/components/BackgroundEffect";
import About from "@/components/section/About";
import Experiences from "@/components/section/Experiences";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import ContactLinks from "@/components/ContactLinks";
import SidebarLinks from "@/components/SidebarLinks";
export default function Home() {
  return (
    <>
      <BackgroundEffect />
      <main className="bg-bg-light dark:bg-bg-dark ">
        <div className="px-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-24">
          {/* Left Section */}
          <div className="left flex flex-col  py-10 basis-full xl:basis-4/12 xl:mt-20 lg:sticky top-0 lg:h-screen">
            <div className="info  ">
              <h1 className="text-3xl lg:text-4xl dark:text-white/90 pb-1 font-bold">
                MD SHEHAB UDDIN
              </h1>
              <h2 className="text-lg dark:text-white/90 pb-1">
                Full Stack Web Developer
              </h2>
              <p className="dark:text-white/70">
              I build accessible, pixel-perfect web applications with expertise in both front-end and back-end development.
              </p>
            </div>
          <SidebarLinks/>
           <ContactLinks/>
          </div>

          {/* Right Section */}
          <div className="basis-full xl:basis-8/12  xl:mt-20 overflow-auto ">
            <About />
           <Experiences /> 
            <div className="inline-flex items-center gap-2 ring-1 ring-green-600 hover:bg-green-500 dark:ring-orange-500 dark:hover:bg-orange-500 px-6 py-2 ml-2 rounded-full cursor-pointer group z-10 ">
              <a className="text-green-500 dark:text-orange-500 group-hover:text-white/80 pointer-events-none ">
                View Resume
              </a>
              <FaLink className="text-black dark:text-white/80 group-hover:scale-105 animate-dance group-hover:animate-dance" />
            </div>
            <Projects />
            <Skills/>
          </div>
        </div>
        <ThemeToggler />
      </main>
    </>
  );
}
