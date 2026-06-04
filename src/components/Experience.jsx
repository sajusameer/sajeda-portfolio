export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto bg-slate-900 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold">
            Freelance Web Developer
          </h3>

          <p className="text-green-500 mt-2">
            Fiverr
          </p>

          <ul className="list-disc pl-5 mt-5 space-y-3 text-slate-300">
            <li>
              Develop responsive web applications using
              React.js and Next.js.
            </li>

            <li>
              Build REST APIs using Node.js and Express.js.
            </li>

            <li>
              Integrate MongoDB databases.
            </li>

            <li>
              Implement authentication systems using JWT.
            </li>

            <li>
              Deploy applications using Vercel.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}