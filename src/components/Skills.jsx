"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaRobot,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiTypescript,
  SiGooglegemini,
} from "react-icons/si";


const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Agentic AI",
    icon: <FaRobot />,
  },
  {
    name: "Gemini API",
    icon: <SiGooglegemini />,
  },
  {
    name: "AI Integration",
    icon: <FaRobot />,
  },
];


const categories = [
  {
    title: "Frontend",
    skills:
      "HTML • CSS • JavaScript • React • Next.js • Tailwind CSS",
  },
  {
    title: "Backend",
    skills:
      "Node.js • Express.js • REST API • JWT",
  },
  {
    title: "AI & Automation",
    skills:
      "Agentic AI • Gemini API • AI Integration",
  },
  {
    title: "Database",
    skills:
      "MongoDB • Mongoose",
  },
  {
    title: "Tools",
    skills:
      "Git • GitHub • VS Code • Postman",
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >

      <div className="max-w-7xl mx-auto px-5">


        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >


          <h2 className="text-4xl font-bold text-center mb-12">
            Skills
          </h2>



          {/* Skill Icons */}

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">


            {skills.map((skill) => (

              <motion.div
                key={skill.name}
                whileHover={{
                  y: -5,
                }}
                className="bg-slate-900 rounded-xl p-5 text-center shadow-lg"
              >

                <div
                  className="text-4xl text-green-500 flex justify-center mb-3 "
                >
                  {skill.icon}
                </div>


                <h3 className="text-sm font-semibold">
                  {skill.name}
                </h3>


              </motion.div>

            ))}


          </div>



          {/* Categories */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">


            {categories.map((category) => (

              <div
                key={category.title}
                className="bg-slate-900 p-5 rounded-xl border border-slate-800"
              >

                <h3
                  className=" text-lg font-bold text-green mb-2"
                >
                  {category.title}
                </h3>


                <p
                  className=" text-sm text-slate-400 leading-relaxed"
                >
                  {category.skills}
                </p>


              </div>

            ))}


          </div>


        </motion.div>


      </div>


    </section>
  );
}