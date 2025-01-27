'use client'

import { linkItems } from "@/helper/links"
import useGetCurrentSection from "@/hooks/useGetCurrentSection"

const SidebarLinks = () => {
    const {currentSection} = useGetCurrentSection()
  return (
    <div className="mt-10 hidden lg:block ">
    {linkItems?.map((item, ind) => (
      <div
        key={ind}
        className={`my-8 flex group  items-center ${currentSection === item.link ? 'text-green-500 dark:text-orange-500' : 'text-black/70 group-hover:text-black dark:text-white/70 dark:group-hover:text-white'}  gap-4 cursor-pointer group`}
      >
        <div className={`w-[45px]  ${currentSection === item?.link ? ' bg-green-500 dark:bg-orange-500 h-2 ' : 'dark:bg-white/70 bg-black/70 dark:group-hover:bg-white bg-black h-px group-hover:w-[70px] '}   transition-[width,height] duration-200 ease-in-out `}></div>
        <a href={`#${item.link}`} className="text-base font-semibold">
          {item.label}
        </a>
      </div>
    ))}
  </div>
  )
}

export default SidebarLinks