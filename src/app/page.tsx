import githubIcon from "@/for portfolio/github.svg";
import linkedinIcon from "@/for portfolio/linkedin.svg";
import facebook from "@/for portfolio/facebook.svg";
import twitter from "@/for portfolio/twitter.svg";
import gmail from "@/for portfolio/gmail.svg";
import Image from "next/image";

import { linkItems } from "@/helper/links";
import { FaLink } from "react-icons/fa";
import ThemeToggler from "@/components/ThemeToggler";

import BackgroundEffect from "@/components/BackgroundEffect";
import About from "@/components/section/About";
import Experiences from "@/components/section/Experiences";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
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
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>
            </div>
            <div className="mt-[150px] hidden lg:block ">
              {linkItems?.map((item, ind) => (
                <div
                  key={ind}
                  className="my-8 flex items-center text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white gap-4 cursor-pointer group"
                >
                  <div className="w-[45px] h-px dark:bg-white bg-black group-hover:w-[70px] transition-[width] duration-200 ease-in-out "></div>
                  <a href={`#${item.link}`} className="text-base font-semibold">
                    {" "}
                    {item.label}{" "}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex gap-4 py-14  ">
              <Image
                src={githubIcon}
                alt="github image"
                width={30}
                height={30}
                className="bg-white/80 rounded-full border border-black"
              />
              <Image
                src={linkedinIcon}
                alt="linkedin image"
                width={30}
                height={30}
                className="bg-white/80 rounded-full border border-black"
              />
              <Image
                src={facebook}
                alt="linkedin image"
                width={30}
                height={30}
                className="bg-white/80 rounded-full border-black"
              />
              <Image
                src={twitter}
                alt="linkedin image"
                width={30}
                height={30}
                className="bg-white/80 rounded-full border border-black"
              />
              <Image
                src={gmail}
                alt="linkedin image"
                width={30}
                height={30}
                className="bg-white/80 rounded-full border border-black"
              />
            </div>
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
