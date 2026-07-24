// import { projects } from "@/data/projects";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// export default async function ProjectDetails({ params }) {
//   const { id } = await params;

//   const project = projects.find(
//     (item) => item.id === id
//   );

//   if (!project) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-slate-950 text-white py-20">
//       <div className="max-w-6xl mx-auto px-5">

//         <Image
//           src={project.image}
//           alt={project.name}
//           width={1200}
//           height={700}
//           className="rounded-2xl w-full"
//         />

//         <h1 className="text-5xl font-bold mt-10">
//           {project.name}
//         </h1>

//         <p className="text-slate-400 mt-6 text-lg">
//           {project.description}
//         </p>

//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">
//             Technology Stack
//           </h2>

//           <div className="flex flex-wrap gap-3">
//             {project.tech.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-4 py-2 rounded-full bg-green-600"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">
//             Challenges Faced
//           </h2>

//           <ul className="list-disc pl-6 space-y-2">
//             {project.challenges.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">
//             Future Improvements
//           </h2>

//           <ul className="list-disc pl-6 space-y-2">
//             {project.future.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="flex gap-4 mt-12">
//           <a
//             href={project.live}
//             target="_blank"
//             className="btn btn-success"
//           >
//             Live Project
//           </a>

//           <a
//             href={project.github}
//             target="_blank"
//             className="btn btn-outline btn-success"
//           >
//             GitHub Repository
//           </a>
//         </div>

//         <Link
//           href="/"
//           className="btn mt-8"
//         >
//           Back Home
//         </Link>
//       </div>
//     </div>
//   );
// }  
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = projects.find(
    (item) => item.id === id
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white py-20">

      <div className="max-w-6xl mx-auto px-5">


        {/* Project Image */}
        <Image
          src={project.image}
          alt={project.name}
          width={1200}
          height={700}
          className="rounded-2xl w-full h-[500px] object-cover"
        />


        {/* Title */}
        <h1 className="text-5xl font-bold mt-10">
          {project.name}
        </h1>


        {/* Description */}
        <p className="text-slate-400 mt-6 text-lg leading-relaxed">
          {project.description}
        </p>



        {/* Technology Stack */}
        <section className="mt-12">

          <h2 className="text-3xl font-bold mb-5">
            Technology Stack
          </h2>


          <div className="flex flex-wrap gap-3">

            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  px-4 
                  py-2 
                  rounded-full 
                  bg-green-600
                  text-white
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </section>



        {/* Challenges */}
        <section className="mt-12">

          <h2 className="text-3xl font-bold mb-5">
            Challenges Faced
          </h2>


          <ul className="list-disc pl-6 space-y-3 text-slate-300">

            {project.challenges.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}

          </ul>

        </section>




        {/* Future */}
        <section className="mt-12">

          <h2 className="text-3xl font-bold mb-5">
            Future Improvements
          </h2>


          <ul className="list-disc pl-6 space-y-3 text-slate-300">

            {project.future.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}

          </ul>

        </section>




        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">


          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            Live Project ↗
          </a>



          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-success"
          >
            GitHub Repository
          </a>


        </div>




        {/* Back */}
        <Link
          href="/"
          className="btn mt-10"
        >
          ← Back Home
        </Link>


      </div>

    </main>
  );
}