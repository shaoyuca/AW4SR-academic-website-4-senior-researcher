import { RESEARCH_DIRECTIONS } from '@/content/about'
import type { ProjectItem } from '@/components/about/ResearchSection'

export function getProjectSlug(title: string) {
  return title
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '') || 'project'
}

export function getProjectHref(project: Pick<ProjectItem, 'title' | 'href'>) {
  return project.href ?? `/projects/${getProjectSlug(project.title)}`
}

export function getProjectRouteId(project: Pick<ProjectItem, 'title' | 'href'>) {
  const href = getProjectHref(project)

  if (href.startsWith('/projects/')) {
    return href.replace(/^\/projects\//, '').replace(/^\/+|\/+$/g, '')
  }

  return getProjectSlug(project.title)
}

export function getAboutProjects() {
  return RESEARCH_DIRECTIONS.flatMap((direction) => direction.projects)
}

export function getProjectBySlug(slug: string) {
  return getAboutProjects().find((project) => getProjectRouteId(project) === slug)
}
