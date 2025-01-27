import React, { FC } from "react";
interface IProps {
  experience: {
    startDate: string;
    company?: { name: string; link?: string };
    endDate: string;
    title: string;
    "job-description": { list: string }[];
    skills: { name: string; link?: string  }[];
    certificate? : boolean
  };
}
const Experience: FC<IProps> = ({ experience }) => {
  return (
    <div className="flex flex-col lg:flex-row items-baseline gap-5 lg:gap-10 justify-between my-10 px-3 py-3 dark:hover:bg-slate-50/5 hover:bg-slate-700/5 backdrop-blur-3xl rounded group ">
      <div className="flex gap-2 dark:text-white text-sm ">
        <span className="text-xs text-nowrap"> {experience?.startDate} </span>
        <span className="text-xs text-nowrap">-</span>
        <span className="text-xs text-nowrap"> {experience?.endDate} </span>
      </div>
      <div>
        <h3 className="dark:text-white font-semibold ">
          {experience?.title}
          <a
            className={` dark:group-hover:text-orange-500 group-hover:text-green-500 group-hover:ml-2 transition-['color,margin']  duration-150 ease-in-out `}
            href={experience?.company?.link}
            target="_blank"
          >
            {experience?.company?.name}
          </a>
        </h3>
        <ul>
          {experience?.["job-description"]?.map((item, ind) => (
            <li
              className="dark:text-white/70 text-black/70 text-sm list-disc ml-5 my-2 "
              key={ind}
            >
              {item?.list}
            </li>
          ))}
        </ul>
          {
            experience?.certificate && <a href="./internship-certificate.pdf" target="_blank"  className="text-sm px-4 py-2 font-bold dark:text-white/80 underline hover:text-green-500 dark:hover:text-orange-500 " > View Certificate </a>
          }
        <div className="flex flex-wrap  mt-3 gap-2 ">
          {experience?.skills?.map((skill, ind) => (
            skill?.link ? <a
            key={ind}
            href={skill?.link}
            target="_blank"
            className={` ${
              skill?.link
                ? 'dark:lg:group-hover:bg-orange-500 lg:group-hover:bg-green-500 lg:group-hover:text-blue-50 lg:group-hover:scale-105 transition-["background,scale"]  duration-150 ease-in-out   '
                : ""
            } dark:text-blue-50 ring-1 ring-green-500 dark:ring-blue-300 dark:bg-blue-800  text-xs px-6 py-2 rounded-full  cursor-pointer `}
          >

            {skill?.name}
          </a> : <button
            key={ind}

            className={`  dark:text-blue-50 ring-1 ring-green-500 dark:ring-blue-300 dark:bg-blue-800  text-xs px-6 py-2 rounded-full  cursor-pointer `}
          >

            {skill?.name}
          </button> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
