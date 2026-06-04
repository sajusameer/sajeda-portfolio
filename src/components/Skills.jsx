"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "JWT", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-14">
            Skills
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    viewport={{ once: true }}
                    className="bg-green-500 h-3 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-5 mt-14">
            <div className="bg-slate-900 p-5 rounded-xl text-center">
              Frontend
            </div>

            <div className="bg-slate-900 p-5 rounded-xl text-center">
              Backend
            </div>

            <div className="bg-slate-900 p-5 rounded-xl text-center">
              Database
            </div>

            <div className="bg-slate-900 p-5 rounded-xl text-center">
              Tools
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}