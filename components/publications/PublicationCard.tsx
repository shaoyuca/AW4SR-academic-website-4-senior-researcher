import InlineLink from '@/components/ui/InlineLink'

export type PublicationLink = {
  label: string
  href: string
}

export type PublicationCardProps = {
  title: string
  authors: React.ReactNode
  venue: React.ReactNode
  award?: React.ReactNode
  links: PublicationLink[]
}

export default function PublicationCard({ title, authors, venue, award, links }: PublicationCardProps) {
  return (
    <div className="py-4 flex flex-col gap-0.5">
      <p className="text-[17px] font-semibold font-serif leading-snug break-words text-[#0A0A0A] dark:text-[#FAFAF8]">
        {title}
      </p>
      <p className="text-body italic leading-snug break-words text-[#6B6B6B] dark:text-gray-400">
        {authors}
      </p>
      <p className="text-body leading-snug break-words text-[#6B6B6B] dark:text-gray-400">
        {venue}
      </p>
      {award && (
        <p className="text-body leading-snug text-[#6B6B6B] dark:text-gray-400">
          {award}
        </p>
      )}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-body">
          {links.map((link) => (
            <InlineLink key={link.label} href={link.href} external>
              {link.label}
            </InlineLink>
          ))}
        </div>
      )}
    </div>
  )
}
