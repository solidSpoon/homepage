import {type Metadata} from 'next'
import Image from 'next/image'

import {Card} from '@/components/Card'
import logoDashPlayr from '@/images/logos/dash-player.png'
import {Container} from './Container'
import LinkIcon from "@/components/LinkIcon";
const projects = [
    {
        name: 'DashPlayer',
        description:
            'A video player tailored for English learners, immersing you in authentic English settings to boost your English skills effectively.',
        link: {href: 'http://dash-player.solidspoon.xyz', label: 'planetaria.tech'},
        logo: logoDashPlayr,
    },
    // {
    //     name: 'Animaginary',
    //     description:
    //         'High performance web animation library, hand-written in optimized WASM.',
    //     link: {href: '#', label: 'github.com'},
    //     logo: logoAnimaginary,
    // },
    // {
    //     name: 'HelioStream',
    //     description:
    //         'Real-time video streaming library, optimized for interstellar transmission.',
    //     link: {href: '#', label: 'github.com'},
    //     logo: logoHelioStream,
    // },
    // {
    //     name: 'cosmOS',
    //     description:
    //         'The operating system that powers our Planetaria space shuttles.',
    //     link: {href: '#', label: 'github.com'},
    //     logo: logoCosmos,
    // },
    // {
    //     name: 'OpenShuttle',
    //     description:
    //         'The schematics for the first rocket I designed that successfully made it to orbit.',
    //     link: {href: '#', label: 'github.com'},
    //     logo: logoOpenShuttle,
    // },
]


export const metadata: Metadata = {
    title: 'Projects',
    description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
    return (
        <Container className="mt-24 md:mt-28">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Things I’ve made trying to put my dent in the universe.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of.
                    Many of them are open-source, so if you see something that piques your interest, check out the code
                    and contribute if you have ideas for how it can be improved.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <Card as="li" key={project.name}>
                            <div
                                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image
                                    src={project.logo}
                                    alt=""
                                    className="h-8 w-8"
                                    unoptimized
                                />
                            </div>
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
                </ul>
            </div>
        </Container>

    )
}
