import {
  FaGithub,
  FaLinkedin,
  FaFiverr,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <div>
            <h3 className="text-xl font-bold">
              Sajeda Begum
            </h3>

            <p className="text-slate-400">
              Junior Full Stack Developer
            </p>
          </div>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/sajusameer"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/sajedadeveloper"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://fiverr.com/sajedadeveloper"
              target="_blank"
            >
              <SiFiverr />
            </a>

          </div>

        </div>

        <div className="text-center mt-6 text-slate-500">
          © 2026 Sajeda Begum. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}