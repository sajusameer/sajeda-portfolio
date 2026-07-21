"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950 text-white pt-20">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-green-500 font-medium mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Sajeda
            <span className="text-green-500"> Begum</span>
          </h1>

          <h2 className="text-2xl mt-4 text-slate-300">
            Junior Full Stack Developer (MERN Stack)
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl">
            I build responsive, scalable and modern web
            applications using React, Next.js, Node.js,
            Express.js and MongoDB.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://drive.google.com/file/d/1pntuGCnXwSsZrmeqnzAblCI_sWGf1HrW/view?usp=sharing"
              target="_blank"
              className="btn btn-success"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="btn btn-outline btn-success"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-5 mt-8 text-3xl">
            <a
              href="https://github.com/sajusameer"
              target="_blank"
              className="hover:text-green-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/sajedadeveloper"
              target="_blank"
              className="hover:text-green-500 transition"
            >
              <FaLinkedin />
            </a>

            {/* <a
              href="https://fiverr.com/sajedadeveloper"
              target="_blank"
            >
             Fiver

            </a> */}

            <a
              href="https://fiverr.com/sajedadeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-green-500 transition"
            >
              Fiverr
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full"></div>

            <Image
              src="/profile.jpeg"
              alt="Sajeda Begum"
              width={420}
              height={420}
              className="rounded-3xl border-4 border-green-500 object-cover relative"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}