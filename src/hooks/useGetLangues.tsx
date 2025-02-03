'use client'

import useTheme from "./useTheme"
import javascript from "@/image/skills/javascript.png";
import typescript from "@/image/skills/typescript.png";
import nodejs from "@/image/skills/node.png";
import expressjs from "@/image/skills/express.png";
import mongodb from "@/image/skills/mongodb.png";
import nextjsDark from "@/image/skills/nextjs-dark.png";
import reactjs from "@/image/skills/react.png";
import reduxjs from "@/image/skills/redux.png";
import tailwindcss from "@/image/skills/tailwind.png";
import prisma from "@/image/skills/prisma.png";
import nestjs from "@/image/skills/nestjs.png";
import postgresql from "@/image/skills/postgresql.png";
import expressjsDark from '@/image/skills/express-dark.png'
import nextjs from '@/image/skills/nextjs.png'
import firebase from '@/image/skills/firebase.png'
import git from '@/image/skills/git.png'
import docker from '@/image/skills/docker.png'
import figma from '@/image/skills/figma.png'
import github from '@/image/skills/github.png'
import aws from '@/image/skills/aws.png'
import linux from '@/image/skills/linux.png'
import postman from '@/image/skills/postman.png'
const useGetLangues = () => {
    const {theme} = useTheme()
   
    const languagesAndFrameworks = [
        {
          img: javascript,
          name: "Javascript",
        },
        {
          img: typescript,
          name:'Typescript'
        },
        {
          img: reactjs,
          name: 'React Js'
        },
        {
          img: theme === 'dark' ?  nextjs : nextjsDark,
          name:'Next Js'
        },
        {
          img: reduxjs,
          name:'Redux Js'
        },
        {
          img: tailwindcss,
          name:'Tailwind CSS'
        },
        {
          img: nodejs,
          name:'Node Js'
        },
        {
          img: theme === 'dark' ? expressjs : expressjsDark,
          name:'Express Js'
        },
        {
          img: nestjs,
          name:'Nest Js'
        },
        {
          img: mongodb,
          name:'MongoDB'
        },
        {
          img: postgresql,
          name:'Postgresql'
        },
        {
          img: prisma,
          name: 'Prisma'
        }
        
      ];
    const technologiesAndTools = [
        {
            img: firebase,
            name: "Firebase"
        },
        {
            img: aws,
            name: "Aws"
        },
        {
            img: git,
            name: "Git"
        },
        {
            img: github,
            name: "Github"
        },
        {
            img: docker,
            name: "Docker"
        },
        {
            img: figma,
            name: "Figma"
        },
        {
          img: postman,
          name: 'Postman'
        },
        {
          img: linux,
          name: 'Linux'
        }
    ]
    return {
        languagesAndFrameworks,
        technologiesAndTools
    }
}

export default useGetLangues