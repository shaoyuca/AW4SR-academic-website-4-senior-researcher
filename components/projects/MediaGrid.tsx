import Image from 'next/image'
import { withBasePath } from '@/lib/assets'

type ImageItem = {
  type: 'image'
  src: string
  alt: string
}

type VideoItem = {
  type: 'video'
  embedUrl: string  // YouTube: https://www.youtube.com/embed/ID  |  Vimeo: https://player.vimeo.com/video/ID
  title: string
}

export type MediaItem = ImageItem | VideoItem

export default function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, i) =>
        item.type === 'image' ? (
          <div key={i} className="relative w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={withBasePath(item.src)}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) calc(100vw - 80px), calc(50vw - 60px)"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div key={i} className="relative w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
            <iframe
              src={item.embedUrl}
              title={item.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )
      )}
    </div>
  )
}
