'use client'

import { useLayoutEffect, useState } from "react";

const useGetCurrentSection = () => {
    const [currentSection, setCurrentSection] = useState('');
    useLayoutEffect(() => {
        const sections = document.querySelectorAll('.my-section');
        const options = {
          root: null, // Use the viewport
          threshold: 0.6, // 60% of the section must be visible
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(entry.target.id);
            }
          });
        }, options);
    
        sections.forEach((section) => {
          observer.observe(section);
        });
    
        return () => {
          sections.forEach((section) => {
            observer.unobserve(section);
          });
        };
      }, []);
   
    return {
        currentSection
    }
}

export default useGetCurrentSection