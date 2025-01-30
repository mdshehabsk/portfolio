'use client'

import useGetLangues from "@/hooks/useGetLangues"
import Image from "next/image"

const Skills = () => {
    const {languagesAndFrameworks,technologiesAndTools} = useGetLangues()
  return (
    <div id="skills" className="my-20 my-section">
      <h2 className="text-xl dark:text-white mb-5 font-semibold  ">
        SKILLS
      </h2>

        <div className=' mb-12' >
            <h3 className='text-xl dark:text-white my-3 ' >Languages & Frameworks</h3>
           <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-2 " >
           {
                languagesAndFrameworks?.map((item,ind)=> <div  key={ind} className="  flex-col flex items-center  items-center  bg-slate-100 dark:bg-slate-800/50 px-4 py-2  cursor-pointer " >
                    <Image src={item?.img} alt="skill item"  />
                    <p className="dark:text-white text-xs md:text-sm text-nowrap text-center " > {item?.name} </p>
                </div>)
            }
           </div>
        </div>
        <div className=' my-12' >
            <h3 className='text-xl dark:text-white my-3 ' >Technologies & Tools</h3>
           <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-2" >
           {
                technologiesAndTools?.map((item,ind)=> <div  key={ind} className=" flex-col flex items-center bg-slate-100 dark:bg-slate-800/50 px-4 py-2  cursor-pointer " >
                    <Image src={item?.img} alt="skill item"  width={90}  />
                    <p className="dark:text-white text-xs md:text-sm text-nowrap text-center " > {item?.name} </p>
                </div>)
            }
           </div>
        </div>


    </div>
  )
}

export default Skills