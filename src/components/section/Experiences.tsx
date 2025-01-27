import React from "react";
import Experience from "../Experience";
import { experienceItems } from "@/helper/experiences";

const Experiences = () => {
  return (
    <div id="experiences" className="mt-24 my-section">
      <h2 className="text-xl dark:text-white mb-5 font-semibold  ">
        EXPERIENCES
      </h2>
      {experienceItems?.map((item, ind) => (
        <Experience key={ind} experience={item} />
      ))}
      <div className="py-4 px-2 bg-slate-800/5 my-4 dark:bg-slate-50/5 dark:text-white/80 " >
      <u>
        <b> NOTE:  In addition to my full-time professional experience, I have successfully completed several freelance projects, which allowed me to refine my skills in [specific areas, e.g., front-end development, API integration]. These projects have enchance my ability to manage multiple responsibilities effectively and deliver high-quality results while collaborating with diverse clients.</b>
      </u>
      </div>
    </div>
  );
};

export default Experiences;
