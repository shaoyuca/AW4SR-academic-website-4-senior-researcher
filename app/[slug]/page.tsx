import { notFound } from 'next/navigation'
import { CUSTOM_PAGES } from '@/content/site'

export const dynamicParams = false

export function generateStaticParams() {
  // Static export requires at least one entry; the placeholder renders notFound()
  // and is never linked in the nav, so it's unreachable in practice.
  if (CUSTOM_PAGES.length === 0) return [{ slug: '__placeholder__' }]
  return CUSTOM_PAGES.map((p) => ({ slug: p.slug }))
}

export default function CustomPage({ params }: { params: { slug: string } }) {
  const page = CUSTOM_PAGES.find((p) => p.slug === params.slug)
  if (!page) notFound()

  return (
    <main className="max-w-content mx-auto px-10 pt-6 pb-section">
      <h1 className="text-h1 font-bold font-serif mb-6">{page.title}</h1>
      <div className="text-body text-[#6B6B6B] dark:text-gray-400 whitespace-pre-wrap">
        {page.content}
      </div>
    </main>
  )
}
