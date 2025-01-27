"use client";
import { useEffect,useRef } from "react";

const BackgroundEffect = () => {
  const bgRef = useRef<HTMLDivElement>(null)
  const handleMouseMove = (event: MouseEvent) => {
    if(bgRef.current) {
        bgRef.current.style.left = `${event.clientX - 300}px`
        bgRef.current.style.top = `${event.clientY - 300}px`
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className={`w-[600px] h-[600px] shadow-xl bg-slate-800/10 dark:bg-slate-200/5 rounded-full  fixed blur-3xl  transition-['position'] duration-150 ease-linear z-0 pointer-events-none  `}
      ref={bgRef}
    ></div>
  );
};

export default BackgroundEffect;
