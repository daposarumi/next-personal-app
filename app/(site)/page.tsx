import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
// import 'bootstrap/dist/css/bootstrap.css';

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      <h1 className="lg:text-6xl text-5xl text-gray-300 font-bold ">Hi, I&apos;m Adedapo</h1>
      <h2 className='lg:text-xl text-lg text-gray-300 mt-3 font-semibold'>Frontend Engineer, UI/UX Enthusiast</h2>
      <p className="mt-4 text-l text-gray-400 max-w-2xl">I&apos;m passionate about creating user-centred systems. These are my most recent front-end projects, and I look forward to working with you!</p>
      <a href="mailto:sarumiadedapo@gmail.com" target="_blank"><button className="cta text-neutral-800 font-bold py-2 mt-7 px-10 rounded-lg">Hire Me</button></a>
      <h2 className="mt-24 font-bold text-gray-300 text-3xl">My Projects</h2>
      <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:gradient-to-r from-orange-400 via-red-500 to-purple-600 transition">

          {project.image && (
            <Image 
            src={project.image}
            alt={project._id}
            width={750}
            height={300}
            className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="text-md text-neutral-300 mt-2 font-semibold">{project.name}</div>
        </Link>
      ))}
      </div>
    </div>
  )
}
