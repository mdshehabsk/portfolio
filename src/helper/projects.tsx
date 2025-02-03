


import korean2 from '@/image/projects/korean-2.png'
import korean3 from '@/image/projects/korean-3.png'
import korean4 from '@/image/projects/korean-4.png'


import ecomerce1 from '@/image/projects/ecomerce-1.png'
import ecomerce2 from '@/image/projects/ecomerce-2.png'
import ecomerce3 from '@/image/projects/ecomerce-3.png'
import ecomerce4 from '@/image/projects/ecomerce-4.png'
import ecomerce5 from '@/image/projects/ecomerce-5.png'
export const projectItems = [
  {
    imgs : [korean2,korean3,korean4],
    'live-link': "https://korean.mdshehabsk.xyz",
    'source-code' : 'https://github.com/mdshehabsk/korean-exam-quiz.git',
    name: "Korean Language Exam Practice Website",
    description: `I developed a web application for users to practice Korean language exams with multiple question sets. Each set contains 20 reading and 20 listening questions. Before starting an exam, all necessary files are cached for a seamless experience. The admin panel allows administrators to add and manage multiple sets along with their corresponding questions.`,
    technologies: [
      "React.js",
      "RTK Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
  },
  {
    imgs: [ecomerce1,ecomerce2,ecomerce3,ecomerce4,ecomerce5],
    'live-link': "https://ecomerce.mdshehabsk.xyz/product/smartphones?page=1",
    'source-code': 'https://github.com/mdshehabsk/pickaboo-ecomerce.git',
    name: "An Ecomerce Project",
    description: `
An e-commerce platform featuring user authentication, product filtering, sorting, and search capabilities. Includes pagination for smooth navigation, ensuring a seamless user experience. The project integrates a robust backend and a responsive frontend for efficient online shopping.`,
    technologies: [
      "Next.js",
      "RTK Query",
      "SSR",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Firebase Auth",
    ],
  },

];
