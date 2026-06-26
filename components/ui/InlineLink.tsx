import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
  external?: boolean
}

export default function InlineLink({ href, children, external = false }: Props) {
  const className = 'underline text-[#6B6B6B] dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-[#FAFAF8]'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
