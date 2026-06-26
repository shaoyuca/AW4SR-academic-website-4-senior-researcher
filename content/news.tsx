// ================================================================
//  NEWS PAGE CONTENT
//  Edit this file to update everything on the News page.
//  No other files need to be changed.
// ================================================================

import Strong from '@/components/ui/Strong'

export type NewsItem = {
  date: string          // e.g. "May 2024" — keep concise so it fits on one line
  text: React.ReactNode // plain text, or use <Strong> / <InlineLink> for rich content
}

/**
 * News items are displayed in the order listed here — newest first recommended.
 *
 * DISPLAY LIMIT: The main /news page shows only the first 8 items.
 * If the array has more than 8 entries, a "More →" link appears automatically
 * and links to /news/all, where every item is shown.
 * No code changes are needed — just keep adding items here.
 *
 * Plain text:  'Some news description.'
 * Bold text:   <>Our paper <Strong>Title</Strong> was accepted.</>
 * With link:   <>Read more at <InlineLink href="…" external>link text</InlineLink>.</>
 */
export const NEWS_ITEMS: NewsItem[] = [
  {
    date: 'Apr 2026',
    text: <>One paper was accepted by <Strong>DIS 2026</Strong>. Congrats to Rui and Yitian!</>,
  },
  {
    date: 'Mar 2026',
    text: <><Strong>Signals of Aggression</Strong> was accepted by <Strong>CHI 2026</Strong>. Congrats to Shaun and Aiden!</>,
  },
  {
    date: 'Jan 2026',
    text: <><Strong>EgoPoseVR</Strong> was accepted by <Strong>IEEE TVCG</Strong> and presented at <Strong>IEEE VR 2026</Strong>. Congrats to Haojie!</>,
  },
  {
    date: 'Jan 2026',
    text: <>I will serve as Local Chair for <Strong>DIS 2026</Strong> in Singapore and Program Manager for <Strong>SIGGRAPH Asia 2026 Emerging Technologies</Strong> in Kuala Lumpur.</>,
  },
  {
    date: 'Nov 2025',
    text: <>One paper was accepted by <Strong>PAINE 2025</Strong> and won the <Strong>Best Paper Award</Strong>. Congrats to Jie, Zhansen, and Quanhao!</>,
  },
  {
    date: 'Oct 2025',
    text: <>One paper was accepted by <Strong>CSCW 2025</Strong>. Congrats to Xinpeng!</>,
  },
  {
    date: 'Jul 2025',
    text: <><Strong>Somewhere in This Fog of Memory</Strong> was accepted by <Strong>GoodIT 2025</Strong>. Congrats to Zhansen!</>,
  },
  {
    date: 'Jul 2025',
    text: <><Strong>AromaCanvas</Strong> was accepted by <Strong>CEXR</Strong>. Congrats to Tao, Quanhao, and Fuxi!</>,
  },
  {
    date: 'May 2025',
    text: <>I will serve as Program Manager (Co-Chair) for <Strong>SIGGRAPH Asia 2025 Emerging Technologies</Strong> and Program Committee member for <Strong>UbiComp/ISWC 2025</Strong>.</>,
  },
  {
    date: 'Apr 2025',
    text: <><Strong>VirCHEW Reality</Strong> was accepted by <Strong>SIGGRAPH 2025</Strong> as a technical paper.</>,
  },
  {
    date: 'Sep 2024',
    text: <><Strong>ThermOuch</Strong> was accepted by <Strong>SIGGRAPH Asia 2024</Strong> as a technical paper.</>,
  },
  {
    date: 'Apr 2024',
    text: <><Strong>ViboPneumo</Strong> was accepted by <Strong>IEEE TVCG</Strong>.</>,
  },
  {
    date: 'Jan 2024',
    text: <><Strong>Skin-integrated haptic interface</Strong> was accepted by <Strong>Nature Electronics</Strong>.</>,
  },
  {
    date: 'Dec 2023',
    text: <>One paper was accepted by <Strong>Computers & Graphics</Strong>.</>,
  },
  {
    date: 'Dec 2023',
    text: <>I started a new position as Lecturer at the College of Design and Engineering, <Strong>National University of Singapore</Strong>.</>,
  },
  {
    date: 'Oct 2022',
    text: <>I received multiple honors from <Strong>CCVR 2022</Strong>.</>,
  },
  {
    date: 'Oct 2022',
    text: <>I attended <Strong>ISMAR 2022</Strong> in Singapore.</>,
  },
  {
    date: 'Sep 2022',
    text: <><Strong>PropelWalker</Strong> was accepted by <Strong>IEEE TVCG</Strong>.</>,
  },
  {
    date: 'Aug 2022',
    text: <>One poster paper was accepted by <Strong>ISMAR 2022</Strong>.</>,
  },
  {
    date: 'Mar 2022',
    text: <>I started a visiting study in the <Strong>Wearable Systems Lab</Strong> at Shanghai Jiao Tong University.</>,
  },
  {
    date: 'Sep 2021',
    text: <>The invited submission of <Strong>FrictGAN</Strong> was accepted by <Strong>Computers & Graphics</Strong>.</>,
  },
  {
    date: 'Sep 2021',
    text: <><Strong>WeightedWalking</Strong> was accepted by <Strong>ACM SIGGRAPH Asia Emerging Technologies</Strong>.</>,
  },
  {
    date: 'Jul 2021',
    text: <>One paper was accepted by <Strong>IEEE Robotics and Automation Letters</Strong> with <Strong>IROS 2021</Strong>.</>,
  },
  {
    date: 'Dec 2020',
    text: <><Strong>FrictGAN</Strong> received the <Strong>Best Paper Audience Choice Award</Strong>.</>,
  },
  {
    date: 'Oct 2020',
    text: <>One paper was accepted by <Strong>ICAT-EGVE 2020</Strong>.</>,
  },
  {
    date: 'Mar 2020',
    text: <>One paper was accepted by <Strong>IEEE VR 2020</Strong>.</>,
  },
  {
    date: 'Nov 2019',
    text: <><Strong>Demonstration of ThermAirGlove</Strong> was accepted by <Strong>SIGGRAPH Asia Emerging Technologies 2019</Strong>.</>,
  },
]
