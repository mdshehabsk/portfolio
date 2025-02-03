'use client'
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface IProps {
  project: {
    imgs: StaticImageData[];
    name: string;
    description: string;
    technologies: string[];
    "live-link": string;
    "source-code": string;
  };
}

const Project: FC<IProps> = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === project.imgs.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.imgs.length - 1 : prev - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Re-run when index changes
  return (
    <div className="my-10 hover:bg-slate-700/5 dark:hover:bg-slate-50/5 py-3">
      <div className="flex flex-col items-center cursor-pointe  group ">
      <div className="relative overflow-x-hidden ">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {project?.imgs?.map((img, ind) => (
          <Image
            key={ind}
            src={img}
            alt="product image"
            className="   "
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className={` lg:opacity-0 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto ${project.imgs.length > 1 ? 'block' : 'hidden'} `} >
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
        onClick={nextSlide}
      >
        ▶
      </button>
      </div>
    </div>

        <div className="px-3 py-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={project?.["live-link"]}
            className="flex gap-1 dark:text-white group-hover:text-green-500 dark:group-hover:text-orange-500 "
          >
            <h3 className=" font-semibold  "> {project?.name} </h3>
            <FiArrowUpRight className="font-semibold text-xl translate-y-1 group-hover:translate-y-0  " />
          </Link>
          <p className=" text-sm dark:text-white/90 ">
            {" "}
            {project?.description}{" "}
          </p>
          <Link
            target="_blank"
            href={project?.["source-code"]}
            className="dark:text-white/90 underline group-hover:text-green-500 font-semibold dark:group-hover:text-orange-500 "
          >
            {" "}
            Source code{" "}
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap px-3 py-1 items-baseline gap-2 ">
        <div>
          <h4 className="font-semibold dark:text-white text-nowrap ">
            Technology used:
          </h4>
        </div>
        <div className="flex gap-2 flex-wrap ">
          {project?.technologies?.map((item, ind) => (
            <button
              key={ind}
              className="text-xs px-3 py-2 ring-1 ring-green-500 bg-green-500 dark:ring-orange-500 dark:bg-orange-500 text-white  rounded-full "
            >
              {" "}
              {item}{" "}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
