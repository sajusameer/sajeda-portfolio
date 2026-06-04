"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10 text-center">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-slate-300 leading-8 text-lg">
              I am a passionate Junior Full Stack Developer specializing in
              the MERN Stack. My programming journey started with curiosity
              about how websites and applications work behind the scenes.
              Over time, I developed strong skills in React.js, Next.js,
              Node.js, Express.js, and MongoDB.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              I enjoy building responsive, user-friendly, and scalable web
              applications. Solving real-world problems through clean code
              and modern technologies is what motivates me most.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              Beyond programming, I enjoy learning new technologies,
              exploring modern web design trends, reading, and continuously
              improving my skills through projects and freelance work.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-slate-800 p-6 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-green-500">2+</h3>
                <p className="text-slate-400 mt-2">
                  Years Learning
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-green-500">10+</h3>
                <p className="text-slate-400 mt-2">
                  Projects Built
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-green-500">MERN</h3>
                <p className="text-slate-400 mt-2">
                  Specialization
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}