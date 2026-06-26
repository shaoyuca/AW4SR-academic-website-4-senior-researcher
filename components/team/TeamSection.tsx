type Props = {
  title: string
  members: string[]
}

export default function TeamSection({ title, members }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-h2 font-bold font-serif text-[#0A0A0A] dark:text-[#FAFAF8] mb-4">
        {title}
      </h2>
      <ul className="list-disc list-outside ml-5 space-y-2">
        {members.map((member) => (
          <li key={member} className="text-body text-[#6B6B6B] dark:text-gray-400">
            {member}
          </li>
        ))}
      </ul>
    </section>
  )
}
