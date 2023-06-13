import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
// import 'bootstrap/dist/css/bootstrap.css';

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hi, I&apos;m <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Adedapo</span></h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl">I&apos;m a frontend engineer and I&apos;m passionate about creating user-centred systems. These are my most recent front-end projects, and I look forward to working with you!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-7 px-6 rounded">Hire Me</button>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">

          {project.image && (
            <Image 
            src={project.image}
            alt={project._id}
            width={750}
            height={300}
            className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div>
        </Link>
      ))}
      </div>
    </div>
  )
}
