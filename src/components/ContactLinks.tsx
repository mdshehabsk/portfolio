"use client";
import Image from "next/image";
import useGetContact from "@/hooks/useGetContact";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";

const ContactLinks = () => {
  const { contactItems } = useGetContact();
  return (
    <div className="my-5">
        <div className="flex gap-1 dark:text-white  p-2 " >
            <div className="flex items-center gap-1">
                <SiGmail/>
            <span className="" >Email:</span>
            </div>
            <span>mdshehabsk@gmail.com</span>
        </div>
        <div className="flex gap-1 dark:text-white p-2 " >
           <div className="flex items-center gap-1 ">
            <FaPhone/>
           <span className="" >Mobile No:</span>
           </div>
            <span>+8801612212699</span>
        </div>
      <div className=" flex gap-2  flex-wrap  ">
        {contactItems?.map((item, ind) => (
          <Link href={item?.link ? item?.link : '#'} key={ind} target="_blank" >
          <Image

            src={item?.img}
            alt="github image"
            width={50}
            height={50}
            className="cursor-pointer"
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactLinks;
