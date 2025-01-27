import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface IProps {
  project: {
    img: StaticImageData;
    name: string;
    description: string;
    technologies: string[];
    'live-link': string
    'source-code' : string
  };
}

const Project: FC<IProps> = ({ project }) => {
  return (
    <div className="my-10 hover:bg-slate-700/5 dark:hover:bg-slate-50/5 py-3" >
        <div className="flex flex-col items-center cursor-pointe  group ">
      <div className=" mb-5 ">
        <Image
          src={project?.img}
          alt="product image"
          className="object-cover"
        />
      </div>
      <div className="px-3 py-2" >
        <Link target="_blank" rel="noopener noreferrer" href={project?.["live-link"]} className="flex gap-1 dark:text-white group-hover:text-green-500 dark:group-hover:text-orange-500 ">
          <h3 className=" font-semibold  "> {project?.name} </h3>
          <FiArrowUpRight className="font-semibold text-xl translate-y-1 group-hover:translate-y-0  " />
        </Link>
        <p className=" text-sm dark:text-white/90 "> {project?.description} </p>
        <Link target="_blank" href={project?.["source-code"]} className="dark:text-white/90 underline group-hover:text-green-500 font-semibold dark:group-hover:text-orange-500 "  > Source code </Link>
      </div>
    </div>
    <div className="flex flex-wrap px-3 py-1 items-baseline gap-2 " >
        <div>
            <h4 className="font-semibold dark:text-white text-nowrap " >Technology used:</h4>
        </div>
        <div className="flex gap-2 flex-wrap " >
            {project?.technologies?.map((item,ind)=> <button key={ind} className="text-xs px-3 py-2 ring-1 ring-green-500 bg-green-500 dark:ring-orange-500 dark:bg-orange-500 text-white  rounded-full "  > {item} </button>)}
        </div>
    </div>
    </div>
  );
};

export default Project;
