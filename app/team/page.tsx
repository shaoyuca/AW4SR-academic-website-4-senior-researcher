import TeamSection from '@/components/team/TeamSection'
import { TEAM_INTRO, TEAM_SECTIONS } from '@/content/team'

export default function TeamPage() {
  return (
    <main className="w-full px-10 pt-6 pb-section">
      <h1 className="text-h1 font-bold font-serif mb-6">Team</h1>
      <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-12">
        {TEAM_INTRO}
      </p>

      {TEAM_SECTIONS.map((section) => (
        <TeamSection key={section.title} title={section.title} members={section.members} />
      ))}
    </main>
  )
}
