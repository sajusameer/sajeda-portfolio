import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Sajeda Begum",
  description: "All projects by Sajeda Begum",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold">
            All Projects
          </h1>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Explore my full-stack projects, AI applications,
            and modern web solutions built with different technologies.
          </p>

        </div>



        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="
                bg-slate-800
                rounded-2xl
                overflow-hidden
                hover:-translate-y-2
                transition-transform
                duration-300
                shadow-lg
                flex
                flex-col
              "
            >


              {/* Image */}
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={350}
                className="
                  w-full
                  h-52
                  object-cover
                "
              />



              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">


                <h2 className="text-2xl font-bold">
                  {project.name}
                </h2>



                <p className="
                  text-slate-400
                  mt-3
                  leading-relaxed
                  flex-grow
                ">
                  {project.description}
                </p>



                {/* Buttons */}
                <div className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                  mt-6
                ">


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      btn
                      btn-success
                      btn-sm
                      flex-1
                    "
                  >
                    Live Demo ↗
                  </a>



                  <Link
                    href={`/projects/${project.id}`}
                    className="
                      btn
                      btn-outline
                      btn-success
                      btn-sm
                      flex-1
                    "
                  >
                    View Details
                  </Link>


                </div>


              </div>


            </div>

          ))}

        </div>



        {/* Back Home */}
        <div className="text-center mt-14">

          <Link
            href="/"
            className="btn"
          >
            ← Back Home
          </Link>

        </div>


      </div>

    </main>
  );
}