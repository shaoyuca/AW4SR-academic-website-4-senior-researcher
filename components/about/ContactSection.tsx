import Image from 'next/image'

type Props = {
  title: string
  intro: React.ReactNode
  imageSrc: string
  imageAlt: string
  mapEmbedUrl: string
  description: React.ReactNode
}

export default function ContactSection({ title, intro, imageSrc, imageAlt, mapEmbedUrl, description }: Props) {
  return (
    <section className="mb-16">
      <h2 className="text-h2 font-bold font-serif text-[#0A0A0A] dark:text-[#FAFAF8] mb-3">
        {title}
      </h2>
      <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-6">
        {intro}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-700">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) calc(100vw - 80px), calc(50vw - 64px)"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-700">
          <iframe
            src={mapEmbedUrl}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <p className="text-body text-[#6B6B6B] dark:text-gray-400">
        {description}
      </p>
    </section>
  )
}
