import Image from 'next/image'
import Link from 'next/link'
import { getProjectHref } from '@/lib/projectRoutes'
import { withBasePath } from '@/lib/assets'

export type ProjectItem = {
  title: string
  href?: string
  imageSrc?: string
}

type Props = {
  title: string
  description: React.ReactNode
  projects: ProjectItem[]
}

export default function ResearchSection({ title, description, projects }: Props) {
  const displayed = projects.slice(0, 5)

  return (
    <section className="mb-16">
      <h2 className="text-h2 font-bold font-serif text-[#0A0A0A] dark:text-[#FAFAF8] mb-3">
        {title}
      </h2>
      <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-6">
        {description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-start">
        {displayed.map((project) => (
          <Link key={project.title} href={getProjectHref(project)} className="w-full">
            <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-200 dark:bg-gray-700">
              {project.imageSrc ? (
                <Image
                  src={withBasePath(project.imageSrc)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) calc(50vw - 24px), 20vw"
                  className="object-cover"
                  loading="lazy"
                />
              ) : null}
            </div>
            <p className="text-small font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-gray-400 text-center mt-2">
              {project.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
