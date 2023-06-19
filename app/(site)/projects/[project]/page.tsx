import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string };
};

export default async function Project({ params }: Props) {

    const slug = params.project;

    const project = await getProject(slug);

    return (
    <div>
        <header className="flex items-center justify-between">
            <h1 className="text-gray-300 text-2xl/9 font-extrabold">{project.name}</h1>
            <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="vproject text-neutral-800 rounded-lg font-bold py-2 px-5 whitespace-nowrap transition">
                View Project
            </a>
        </header> 
        <div className="text-lg text-gray-400 mt-5">
        <PortableText value={project.content}/>
        </div>

        <Image 
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-gray-700 border-2 object-cover rounded-xl"
            />
    </div>
    
    )
}