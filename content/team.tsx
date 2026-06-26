// ================================================================
//  TEAM PAGE CONTENT
//  Edit this file to update everything on the Team page.
//  No other files need to be changed.
// ================================================================

export type TeamSectionContent = {
  title: string
  members: string[]
}


// ── 1. INTRO ────────────────────────────────────────────────────

/**
 * Main paragraph shown below the Team page title.
 *
 * Replace this placeholder with a short description of the lab, team culture,
 * or research community. Plain text is enough.
 */
export const TEAM_INTRO =
  'Our team brings together research staff and students working on multimodal interaction, immersive reality, wearable interfaces, haptics, and design-led technology research.'


// ── 2. TEAM SECTIONS ────────────────────────────────────────────

/**
 * Each entry creates one section:
 *   title     -> H2 heading, such as "Current"
 *   members   -> bullet-point list shown below the heading
 *
 * To add a member, add a new string inside members.
 * To remove a member, delete that line.
 */
export const TEAM_SECTIONS: TeamSectionContent[] = [
  {
    title: 'Current Research Members',
    members: [
      //'Huanhuan Liu - Research Fellow, 2026.06-present.',
      'Tao Lin - Research Engineer, 2025.05-present.',
      'Tingxiao Wu - MSc Engineering Design and Innovation, 2025.08-present.',
      'Yuheng Tao - MSc Engineering Design and Innovation, 2025.08-present.',
      'Reagan Moses Widjaja - Research intern, 2026.05-present.',
      'Matthew Chan - Research Engineer, co-advised with Prof. Khoo Eng Tat, 2026.01-present.',
    ],
  },
  {
    title: 'Alumni Members',
    members: [
      'Tao Lin - MSc Engineering Design and Innovation, now Research Staff at NUS, 2024.01-2025.04.',
      'Fuxi Ouyang - MSc Engineering Design and Innovation, now PhD Student at SUTD, 2024.01-2024.12.',
      'Quanhao Gan - MSc Engineering Design and Innovation, now Research Staff at HKBU, 2024.08-2025.12.',
      'Jiarui Feng - MSc Engineering Design and Innovation, now Research Staff at HKUST, 2024.08-2025.12.',
      'Hao Zheng - MSc Engineering Design and Innovation, now at Bambu, 2024.08-2025.12.',
      'Huzhaorui Kang - MSc Engineering Design and Innovation, now PhD Student at NUS, 2025.01-2025.08.',
      'Rui Zhang - MSc Engineering Design and Innovation, 2024.08-2025.12.',
      'Zhansen Shi - Research Engineer, co-advised with Prof. Khoo Eng Tat, 2024.01-2025.08.',
      'Shaun Ong - Research Engineer, co-advised with Prof. Khoo Eng Tat, 2024.01-2025.12.',
      'Xinpeng Liu - Research Intern, SMU, 2024.05-2025.09.',
    ],
  },
  {
    title: 'Former Capstone Students (CDE3301/4301/UROP)',
    members: [
      'I have supervised up to 50 stduents for their capstone projects or research modules.',
      //'Student Team 2023 - explored a lightweight toolkit for classroom interaction.',
    //'Student Team 2022 - designed a sensing mockup for public exhibition settings.',
      //'Student Team 2021 - investigated physical data representations for learning activities.',
    ],
  },
]
