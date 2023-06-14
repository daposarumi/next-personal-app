import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
// import 'bootstrap/dist/css/bootstrap.css';

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      <h1 className="lg:text-6xl sm:text-4xl text-gray-300 font-bold ">Hi, I&apos;m Adedapo</h1>
      <h2 className='lg:text-xl sm:text-md text-gray-300 mt-3 font-semibold'>Frontend Engineer, UI/UX Enthusiast</h2>
      <p className="mt-5 text-l text-gray-400 max-w-2xl">I&apos;m passionate about creating user-centred systems. These are my most recent front-end projects, and I look forward to working with you!</p>
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
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
    </div>
  )
}
