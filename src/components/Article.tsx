import {SimpleLayout} from "@/components/SimpleLayout";
import Image from "next/image";
import {Card} from "@/components/Card";
import LinkIcon from "@/components/LinkIcon";

const links = [
    {
        name: 'Blogs',
        description:
            'Writing on software design, company building, and the aerospace industry.',
        link: {href: 'http://solidspoon.xyz/blog', label: 'solidspoon.xyz/blog'},
    },
    {
        name: 'Notes',
        description:
            'Short-form thoughts on programming, leadership, product design, and more.',
        link: {href: 'http://solidspoon.xyz/note', label: 'solidspoon.xyz/note'},
    },
]
export default async function Articles() {

    return (
        <SimpleLayout
            title="Writing on software design, company building, and the aerospace industry."
            intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        >
            <div className="flex max-w-3xl flex-col space-y-16">
                {links.map((project) => (
                    <Card as="li" key={project.name}>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Card.Link href={project.link.href}>{project.name}</Card.Link>
                        </h2>
                        <Card.Description>{project.description}</Card.Description>
                        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                            <LinkIcon className="h-6 w-6 flex-none"/>
                            <span className="ml-2">{project.link.label}</span>
                        </p>
                    </Card>
                ))}
            </div>
        </SimpleLayout>
    )
}
