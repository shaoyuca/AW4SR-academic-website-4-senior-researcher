import Image from 'next/image'
import InlineLink from '@/components/ui/InlineLink'

export type ApproachItem = {
  title: string
  description?: React.ReactNode
  bullets?: React.ReactNode[]
  blocks?: {
    description: React.ReactNode
    bullets: React.ReactNode[]
  }[]
  linkLabel?: string
  linkHref?: string
}

export type ExternalImage = {
  src: string
  alt: string
  href: string
}

type Props = {
  title: string
  description: React.ReactNode
  items: ApproachItem[]
  images?: ExternalImage[]
}

function ApproachEntry({ item }: { item: ApproachItem }) {
  return (
    <div className="mb-10">
      <h3 className="text-h3 font-bold font-serif text-[#0A0A0A] dark:text-[#FAFAF8] mb-2">
        {item.title}
      </h3>
      {item.description && (
        <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-3">
          {item.description}
        </p>
      )}
      {item.bullets && (
        <ul className="list-disc list-outside ml-5 space-y-1 mb-4">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="text-body text-[#6B6B6B] dark:text-gray-400">
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {item.blocks?.map((block, blockIndex) => (
        <div key={blockIndex} className="mb-4">
          <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-3">
            {block.description}
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1">
            {block.bullets.map((bullet, i) => (
              <li key={i} className="text-body text-[#6B6B6B] dark:text-gray-400">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {item.linkHref && item.linkLabel && (
        <InlineLink href={item.linkHref}>
          {item.linkLabel}
        </InlineLink>
      )}
    </div>
  )
}

export default function OurApproachSection({ title, description, items, images }: Props) {
  return (
    <section className="mb-16">
      <h2 className="text-h2 font-bold font-serif text-[#0A0A0A] dark:text-[#FAFAF8] mb-3">
        {title}
      </h2>
      <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-8">
        {description}
      </p>

      {items.map((item) => (
        <ApproachEntry key={item.title} item={item} />
      ))}

      {images && images.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-2">
          {images.map((img) => (
            <a
              key={img.href}
              href={img.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-40 h-28 overflow-hidden bg-gray-200 dark:bg-gray-700"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="160px"
                className="object-cover"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
