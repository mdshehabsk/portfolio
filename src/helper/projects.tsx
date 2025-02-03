import ecomerceImage from "@/image/projects/ecomerce.png";


import korean2 from '@/image/projects/korean-2.png'
import korean3 from '@/image/projects/korean-3.png'
import korean4 from '@/image/projects/korean-4.png'
export const projectItems = [
  {
    imgs: [ecomerceImage],
    'live-link': "https://google.com",
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
  {
    imgs : [korean2,korean3,korean4],
    'live-link': "https://korean.mdshehabsk.xyz",
    'source-code' : 'https://github.com/mdshehabsk/korean-exam-quiz.git',
    name: "Korean Language Exam",
    description: `
    An e-commerce platform featuring user authentication, product filtering, sorting, and search capabilities. Includes pagination for smooth navigation, ensuring a seamless user experience. The project integrates a robust backend and a responsive frontend for efficient online shopping.`,
    technologies: [
      "React.js",
      "RTK Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
  }
];
