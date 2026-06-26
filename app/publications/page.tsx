import { PUBLICATIONS, CORRESPONDING_NOTE } from '@/content/publications'
import PublicationCard from '@/components/publications/PublicationCard'

export default function PublicationsPage() {
  return (
    <main className="max-w-content mx-auto px-10 pt-6 pb-section">
      <h1 className="text-h1 font-bold font-serif mb-6">Publications</h1>

      {PUBLICATIONS.map((group) => (
        <section key={group.year} className="mb-6">
          <h2 className="text-h2 font-bold font-serif mb-0">{group.year}</h2>
          {group.papers.map((paper, i) => (
            <PublicationCard key={i} {...paper} />
          ))}
        </section>
      ))}

      {CORRESPONDING_NOTE && (
        <p className="text-meta text-[#6B6B6B] dark:text-gray-400 mt-4">
          {CORRESPONDING_NOTE}
        </p>
      )}
    </main>
  )
}
