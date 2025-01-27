import React from 'react'
import Image from 'next/image';
import myImage from "@/image/LMC_20241211_131318_Color boost by Expert Mistry.PORTRAIT-min (1).jpg";
const About = () => {
  return (
    <div id="about" className='my-10 my-section ' >
  <h2 className="text-xl dark:text-white mb-5 font-semibold  ">ABOUT ME</h2>
     <div className="relative">
       {/* Image */}
       <Image
         src={myImage}
         alt="Description of the image"
         placeholder='blur'
         className=" max-w-[300px] object-cover float-right ml-2 mr-6 mb-4 r "
       />

       {/* Text */}
       <p className=" text-gray-700 dark:text-white/80">
         Hello, I’m Shehab, a passionate Full Stack Developer with
         expertise in both frontend and backend technologies. I create
         dynamic, efficient, and user-friendly applications. With a strong
         foundation in JavaScript, TypeScript, React, and Node.js, I
         specialize in building scalable, performant solutions across the
         entire development stack. I am experienced in working with modern
         frontend frameworks like React.js and Next.js. On
         the backend, I am confidient Node.js, Express, and MongoDB to build
         robust, data-driven applications with real-time functionality.
       </p>
       <p className=" text-gray-700 dark:text-white/80 my-4 " > I
         have hands-on experience deploying applications using Docker, AWS,
         and CI/CD pipelines, ensuring seamless integration and
         scalability. I also work with popular authentication mechanisms
         and third-party APIs to enhance user experiences, along with
         integrating systems to communicate smoothly via websockets and
         RESTful APIs. My goal is to continue growing and learning while
         creating innovative solutions that address real-world problems.  If you’re looking for
         someone who is dedicated, detail-oriented, and always eager to
         take on new challenges, let’s connect!</p>
     </div>
    </div>
  )
}

export default About