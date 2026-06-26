import { getAboutProjects, getProjectBySlug, getProjectRouteId } from '@/lib/projectRoutes'
import { PROJECT_DETAILS } from '@/content/projectDetails'
import MediaGrid from '@/components/projects/MediaGrid'

export function generateStaticParams() {
  const slugs = new Set(getAboutProjects().map((project) => getProjectRouteId(project)))
  return Array.from(slugs).map((id) => ({ id }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectBySlug(params.id)
  const title = project?.title ?? params.id
  const detail = PROJECT_DETAILS[params.id]

  if (!detail) {
    return (
      <main className="max-w-content mx-auto px-10 pt-6 pb-section">
        <h1 className="text-h1 font-bold font-serif mb-4">{title}</h1>
        <p className="text-body text-[#6B6B6B] dark:text-gray-400">
          Project detail page coming soon.
        </p>
      </main>
    )
  }

  return (
    <main className="max-w-content mx-auto px-10 pt-6 pb-section">
      <h1 className="text-h1 font-bold font-serif mb-6">{title}</h1>

      {detail.description && (
        <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-8">
          {detail.description}
        </p>
      )}

      {detail.media && detail.media.length > 0 && (
        <div className="mb-10">
          <MediaGrid items={detail.media} />
        </div>
      )}

      {detail.publication && (
        <section>
          <h2 className="text-h2 font-bold font-serif mb-4">Publication</h2>
          <div className="text-body text-[#6B6B6B] dark:text-gray-400">
            {detail.publication}
          </div>
        </section>
      )}
    </main>
  )
}
