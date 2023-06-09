import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);

    return (
        <div>
            <h1 className="text-gray-300 text-4xl font-extrabold">{page.title}</h1>
        <div className="text-lg text-gray-400 mt-10">
            <PortableText value={page.content}/>
        </div>
        
        </div>


    )
}
