import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hi I&apos;m <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Adedapo</span>, a prolific frontend engineer</h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl">I&apos;m passionate about creating user-centred systems, it&apos;s what I do best. These are my most recent front-end projects. Check them out and let me know what you think. Also, i look forward to working with you</p>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Hire Me</button>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid md: grid-cols-2 lg:grid-cols-2 gap-8">
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
