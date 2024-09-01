import React from "react";
import {
  SiNextdotjs,
  SiFoodpanda,
  SiReactquery,
  SiFirebase,
  SiFramer,
  SiNestjs,
  SiSocketdotio,
  SiAxios,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiStyledcomponents,
  SiReact,
  SiRedux,
  SiGit,
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiPostgresql,
  SiPrisma,
  SiVercel,
  SiReduxsaga,
  SiHtml5,
  SiMui,
  SiMobx,
  SiGithub,
  SiMinutemailer,
  SiNodemon,
  SiTsnode,
  SiJsonwebtokens,
  SiMysql,
  SiShadcnui,
  SiPython,
  SiTensorflow,
  SiExpo,
  SiPhp,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { HiDatabase } from "react-icons/hi";

import { TbBrandReactNative } from "react-icons/tb";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import "./Skills.css";
export default function Skills() {
  const frontend = [
    {
      name: "NextJS",
      icon: <SiNextdotjs />,
      info: "Next.js is a React framework that enables functionality such as server-side rendering and static site generation.",
      level: "90%",
    },
    {
      name: "React",
      icon: <SiReact />,
      info: "React is a JavaScript library for building user interfaces, especially single-page applications.",
      level: "95%",
    },
    {
      name: "React Query",
      icon: <SiReactquery />,
      info: "React Query is a data-fetching library that simplifies fetching, caching, and updating server state in React apps.",
      level: "85%",
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux />,
      info: "Redux Toolkit is a toolset for efficient Redux development, simplifying state management in React apps.",
      level: "80%",
    },
    {
      name: "Redux Saga",
      icon: <SiReduxsaga />,
      info: "Redux Saga is a middleware library that helps in handling complex asynchronous tasks in React-Redux applications.",
      level: "75%",
    },
    {
      name: "React-Native",
      icon: <TbBrandReactNative />,
      info: "React Native is a framework for building native apps using React, allowing for cross-platform mobile development.",
      level: "85%",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      info: "JavaScript is a versatile programming language that enables dynamic content and interactivity on web pages.",
      level: "95%",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      info: "TypeScript is a superset of JavaScript that adds static typing, improving code quality and reducing errors.",
      level: "85%",
    },
    {
      name: "HTML",
      icon: <SiHtml5 />,
      info: "HTML (HyperText Markup Language) is the standard markup language for creating web pages.",
      level: "98%",
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
      info: "CSS (Cascading Style Sheets) is used to style and layout web pages, including design, colors, and fonts.",
      level: "90%",
    },
    {
      name: "SASS",
      icon: <SiSass />,
      info: "SASS (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS.",
      level: "80%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      info: "Tailwind CSS is a utility-first CSS framework for quickly building custom designs without leaving HTML.",
      level: "85%",
    },
    {
      name: "Shadcnui",
      icon: <SiShadcnui />,
      info: "Shadcnui is a modern, customizable UI component library for React applications.",
      level: "70%",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
      info: "Bootstrap is a popular CSS framework for building responsive, mobile-first websites.",
      level: "85%",
    },
    {
      name: "Framer Motion",
      icon: <SiFramer />,
      info: "Framer Motion is a library for React that makes it easy to create animations and transitions.",
      level: "80%",
    },
    {
      name: "Material UI",
      icon: <SiMui />,
      info: "Material UI is a popular React UI framework that implements Google's Material Design guidelines.",
      level: "75%",
    },
    {
      name: "Style Component",
      icon: <SiStyledcomponents />,
      info: "Styled-components is a library for React and React Native that allows you to use component-level styles in your application.",
      level: "80%",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      info: "Firebase is a platform developed by Google for building mobile and web applications, offering services like authentication, real-time databases, and more.",
      level: "75%",
    },
    {
      name: "Git",
      icon: <SiGit />,
      info: "Git is a distributed version control system for tracking changes in source code during software development.",
      level: "90%",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      info: "GitHub is a web-based platform for version control using Git, providing repositories to host code and collaborate with others.",
      level: "90%",
    },
  ];

  const backend = [
    {
      name: "Python",
      icon: <SiPython />,
      info: "Python is a high-level, versatile programming language known for its readability and wide range of applications.",
      level: "90%",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      info: "MySQL is an open-source relational database management system.",
      level: "85%",
    },
    {
      name: "NodeJS",
      icon: <SiNodedotjs />,
      info: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine for server-side programming.",
      level: "88%",
    },
    {
      name: "ExpressJS",
      icon: <SiExpress />,
      info: "Express.js is a web application framework for Node.js designed for building web applications and APIs.",
      level: "85%",
    },
    {
      name: "NestJS",
      icon: <SiNestjs />,
      info: "NestJS is a framework for building efficient, scalable Node.js server-side applications.",
      level: "80%",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      info: "MongoDB is a NoSQL database known for its flexibility in handling unstructured data.",
      level: "87%",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      info: "PostgreSQL is a powerful, open-source object-relational database system.",
      level: "83%",
    },
    {
      name: "TensorFlowJs",
      icon: <SiTensorflow />,
      info: "TensorFlow.js is a JavaScript library for training and deploying machine learning models in the browser and on Node.js.",
      level: "70%",
    },
    {
      name: "AI",
      icon: <FaRobot />,
      info: "AI (Artificial Intelligence) involves the development of systems that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.",
      level: "70%",
    },
    {
      name: "Expo ",
      icon: <SiExpo />,
      info: "Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.",
      level: "80%",
    },
    {
      name: "Convex",
      icon: <HiDatabase />,
      info: "Convex is a backend-as-a-service platform designed to simplify building full-stack applications by handling the database, storage, and real-time updates.",
      level: "70%",
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
      info: "Prisma is a next-generation ORM that helps in building GraphQL and RESTful APIs, working with databases in a type-safe way.",
      level: "82%",
    },

    {
      name: "Axios",
      icon: <SiAxios />,
      info: "Axios is a promise-based HTTP client for making HTTP requests in both the browser and Node.js.",
      level: "85%",
    },
    {
      name: "php",
      icon: <SiPhp />,
      info: "PHP (Hypertext Preprocessor) is a widely-used, open-source scripting language designed for web development. It is embedded within HTML and primarily used to develop dynamic and interactive websites. PHP code is executed on the server, generating HTML that is sent to the client's browser. It is popular for creating web applications, especially when paired with databases like MySQL. PHP is known for its simplicity, flexibility, and large community support.",
      level: "85%",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      info: "Vercel is a platform for frontend frameworks and static sites, providing fast global deployment.",
      level: "80%",
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      info: "Docker is a platform designed to help developers build, ship, and run applications inside containers.",
      level: "75%",
    },
    {
      name: "JWT",
      icon: <SiJsonwebtokens />,
      info: "JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties.",
      level: "82%",
    },
  ];

  return (
    <section className=" skills ">
      <div className="frontend ">
        <p>Frontend skills</p>
        <div className="wrapper h-full">
          {frontend.map((item, i) => (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  style={{ all: "unset" }}
                  className="flex items-center justify-center"
                >
                  <div className={`skill ${item.name} cursor-pointer`} key={i}>
                    <div>{item.icon}</div>
                    <span>{item.name}</span>
                  </div>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <div className="relative">
                  <button
                    className="absolute -top-10 -right-8 bg-slate-900 flex items-center justify-center text-[20px] w-10 h-10 rounded-full text-gray-400 hover:text-gray-600"
                    onClick={() =>
                      document.querySelector('[data-state="open"]')?.click()
                    }
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <div className="w-full flex flex-col items-center">
                        <div
                          className={`skill ${item.name} text-[35px] cursor-pointer`}
                        >
                          {item.icon}
                        </div>
                        <div>{item.name}</div>
                      </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {item?.info}
                      <h1 className="sm:text-[20px] mt-2">Level me:</h1>
                      <div className="flex items-center gap-2 w-full">
                        <input
                          type="range"
                          value={parseInt(item?.level)}
                          min="0"
                          max="100"
                          step="1"
                          readOnly
                          className="w-full"
                        />
                        <span>{item?.level}</span>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </div>
      </div>
      <div className="backend">
        <p>Backend skills</p>
        <div className="wrapper">
          {backend.map((item, i) => (
            <>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    style={{ all: "unset" }}
                    className="flex items-center justify-center"
                  >
                    <div
                      className={`skill ${item.name} cursor-pointer`}
                      key={i}
                    >
                      <div>{item.icon}</div>
                      <span>{item.name}</span>
                    </div>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <div className="relative">
                    <button
                      className="absolute -top-10 -right-8 bg-slate-900 flex items-center justify-center text-[20px] w-10 h-10 rounded-full text-gray-400 hover:text-gray-600"
                      onClick={() =>
                        document.querySelector('[data-state="open"]')?.click()
                      }
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <div className="w-full flex flex-col items-center">
                          <div
                            className={`skill ${item.name} text-[35px] cursor-pointer`}
                          >
                            {item.icon}
                          </div>
                          <div>{item.name}</div>
                        </div>
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        {item?.info}
                        <h1 className="sm:text-[20px] mt-2">Level me:</h1>
                        <div className="flex items-center gap-2 w-full">
                          <input
                            type="range"
                            value={parseInt(item?.level)}
                            min="0"
                            max="100"
                            step="1"
                            readOnly
                            className="w-full"
                          />
                          <span>{item?.level}</span>
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
