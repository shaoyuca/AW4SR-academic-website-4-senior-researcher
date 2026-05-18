import { getAboutProjects, getProjectBySlug, getProjectRouteId } from '@/lib/projectRoutes'

export function generateStaticParams() {
  const slugs = new Set(getAboutProjects().map((project) => getProjectRouteId(project)))

  return Array.from(slugs).map((id) => ({ id }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectBySlug(params.id)
  const title = project?.title ?? params.id

  return (
    <main className="max-w-content mx-auto px-10 py-section">
      <h1 className="text-h1 font-bold font-serif">{title}</h1>
      <p className="text-body text-[#6B6B6B] mt-4">Project detail page coming soon.</p>
    </main>
  )
}
