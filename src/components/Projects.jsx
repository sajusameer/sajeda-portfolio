// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { projects } from "@/data/projects";

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-24 bg-slate-900 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-5">
//         <h2 className="text-4xl font-bold text-center mb-14">
//           Projects
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-slate-800 rounded-2xl overflow-hidden"
//             >
//               <Image
//                 src={project.image}
//                 alt={project.name}
//                 width={500}
//                 height={300}
//                 className="w-full h-56 object-cover"
//               />

//               <div className="p-6">
//                 <h3 className="text-xl font-bold">
//                   {project.name}
//                 </h3>

//                 <p className="text-slate-400 mt-3">
//                   {project.description}
//                 </p>

//                 {/* <Link
//                   href={`/projects/${project.id}`}
//                   className="btn btn-success mt-5"
//                 >
//                   View Details
//                 </Link> */}
//                 <div className="flex flex-col sm:flex-row gap-3 mt-5">

//                 <Link
//                   href={`/projects/${project.id}`}
//                   className="btn btn-success"
//                 >
//                   View Details
//                 </Link>

//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-outline btn-success"
//                 >
//                   Live Demo ↗
//                 </a>

//               </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// } 
// 
"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-lg flex flex-col"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={350}
                className="w-full h-52 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold">{project.name}</h3>

                <p className="text-slate-400 mt-3 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-sm flex-1 text-center"
                  >
                    Live Demo ↗
                  </a>

                  <Link
                    href={`/projects/${project.id}`}
                    className="btn btn-outline btn-success btn-sm flex-1 text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}