// ================================================================
//  COURSES PAGE CONTENT
//  Edit this file to update everything on the Courses page.
//  No other files need to be changed.
// ================================================================

import InlineLink from '@/components/ui/InlineLink'
import Strong from '@/components/ui/Strong'

export type CourseVideo = {
  title: string
  projectBy?: string
  note?: React.ReactNode
  mediaCoverage?: React.ReactNode
  credit?: React.ReactNode
  type?: 'video' | 'image'
  src: string
  alt?: string
}

export type Course = {
  category: 'Graduate' | 'Undergraduate'
  title: string
  href: string
  linkLabel: string
  description: React.ReactNode
  videos?: CourseVideo[]
  studentWork?: React.ReactNode
}


// ── COURSES ─────────────────────────────────────────────────────

/**
 * Each object below creates one course block on the Courses page.
 *
 * To add a course:
 *   Copy one full { ... }, block and paste it inside COURSES.
 *
 * To remove a course:
 *   Delete the full { ... }, block.
 *
 * Field guide:
 *   category    -> course level shown above the course title
 *   title       -> course name shown as a large heading
 *   href        -> external course page URL
 *   linkLabel   -> link text shown below the course title
 *   description -> course description; plain text or JSX with <InlineLink>
 *   videos      -> optional external video embeds; max two videos per row
 *   studentWork -> optional Student Work section description
 *
 * Video note:
 *   Do not upload video files here. Paste an embed URL from an external platform,
 *   such as "https://www.youtube.com/embed/VIDEO_ID" or
 *   "https://player.vimeo.com/video/VIDEO_ID".
 *   The sample below uses a YouTube embed URL so the page shows a real video
 *   player template. Replace it with your own course video when ready.
 *   If a course has no video, delete the videos field entirely.
 */
export const COURSES: Course[] = [
  {
    category: 'Graduate',
    title: 'CDE5312: Beyond the Surface: Exploring Interactive Wearables',
    href: 'https://blog.nus.edu.sg/multimodalwearablelab/welcome/',
    linkLabel: 'Course website',
    // Plain description: edit the words between <> and </>.
    description: (
      <>
        This course aims to explore the limitless potential of interactive wearables — 
        from virtual and augmented reality to smart textiles and artificial intelligence-based 
        health-monitoring devices and immersive gaming gear. In this course, students will 
        learn about designing wearable interfaces for seamless interaction among wearables, 
        users, and environments; experimenting with sensors, actuators, microcontrollers, 
        and artificial intelligence-driven applications; and leveraging hardware and software 
        for wearable system prototyping. After completing this course, students should be able 
        to apply interactive wearable technologies to tackle real-world projects, turning ideas 
        into tangible solutions for various applications such as virtual and augmented reality, 
        gaming, fashion, communication, and beyond.
      </>
    ),

    // Delete studentWork if this course does not need a Student Work section.
    studentWork:
      'Selected student projects from CDE5312 exploring interactive wearable systems and applied prototyping.',
    videos: [
      {
        title: 'Olfactory Display for Artwork Appreciation in VR',
        projectBy: 'Gan Quanhao, Lin Tao, Ouyang Fuxi, Gao Muzi, Wei Leming',
        note: (
          <>
            📄 <Strong>Published in Computers & Education: X Reality (CEXR)</Strong>
            <br />doi:  <InlineLink href="https://doi.org/10.1016/j.cexr.2025.100109" external>https://doi.org/10.1016/j.cexr.2025.100109</InlineLink>
          </>
        ),
        src: 'https://www.youtube-nocookie.com/embed/fS7L8N_i6rc',
      },
      {
        title: 'Breatho: Real-Time Respiratory Guidance System for Amateur Runners',
        projectBy: 'Tao Yuheng, Chen Xialu, Liu Huayi, Huang Yutong, Lyu Chuang',
        note: (
          <>
            📄 <Strong>Published in DIS 2026 Student Design Competition</Strong>
            <br />doi: <InlineLink href="https://doi.org/10.1145/3802974.3810896" external>https://doi.org/10.1145/3802974.3810896</InlineLink>
          </>
        ),
        src: 'https://www.youtube-nocookie.com/embed/AOuSB8KtWEM',
      },
    ],
  },
  {
    category: 'Undergraduate',
    title: 'CDE3301: Ideas to Proof-of-concept',
    href: 'https://cde.nus.edu.sg/edic/projects/cde3301-projects-2026/',
    linkLabel: 'Course website',
    // Course without videos: simply omit the videos field.
    description: (
      <>
        CDE3301 Ideas to Proof-of-Concept is a two-semester project course which focuses on conceptualisation, 
        implementation and realisation of a product solution to solve an identified problem while providing 
        experience in an integrated product design and development process where technology plays a central role. 
        Through lecture classes, studio sessions and an open-ended project, students learn how to create a product 
        idea to address a problem of interest, generate and evaluate concept designs, and build proof-of-concept 
        prototypes for user testing. Students also learn how to work in a multidisciplinary team and with various 
        stakeholders.
        <br />
        <br />
        I teach the following studios/topics in CDE3301:
        <br />
        • <InlineLink href="https://cde.nus.edu.sg/edic/projects/showcase/edic-project-showcase-2024/" external>Immersive Reality Studio</InlineLink>
        <br />
        • <InlineLink href="https://cde.nus.edu.sg/edic/projects/immersive-heritage-2025/" external>Multi-sensory VR Studio</InlineLink>
        <br />
        • <InlineLink href="https://cde.nus.edu.sg/edic/projects/wearable-tech-2026/" external>Intelligent Wearable Studio</InlineLink>
      </>
    ),
    studentWork:
      'Selected student work includes problem definition, ideation, prototyping, user evaluation, and reflective reporting. The featured project below highlights an interdisciplinary student team translating cultural heritage into an immersive proof-of-concept experience.',
    videos: [
      {
        title: 'Scenting the Past: Bringing Hawker Culture to Life in VR',
        projectBy: 'Mullappalli Devesh (Year 3, Economics), Park Junha (Year 3, Industrial and Systems Engineering), Bao Ying (Year 3, Electrical Engineering), Chen Yun Feng (Year 3, Mechanical Engineering)',
        note: (
          <>
            ✨ Showcasing at <InlineLink href="https://singaporeccc.org.sg/" external>Singapore Chinese Cultural Centre (SCCC)</InlineLink> and demonstrating to <Strong>Mr Baey Yam Keng</Strong>, Minister of State for Culture, Community and Youth of Singapore<br />
            ✨ Featured in EDIC Project Showcase: <InlineLink href="https://cde.nus.edu.sg/edic/projects/innovating-with-immersive-reality/scenting-the-past/" external>CDE3301 project showcase</InlineLink>
          </>
        ),
        mediaCoverage: (
          <>
            Media coverage: <InlineLink href="https://cde.nus.edu.sg/news/scenting-the-past-bringing-hawker-culture-to-life-in-vr/" external>CDE New Student Achievements</InlineLink>
            
            
          </>
        ),
        type: 'image',
        src: '/images/hawker3301.png',
        alt: 'Scenting the Past student project showcase',
        credit: 'Photo credit: NUS EDIC',
      },
    ],
    },


  {
    category: 'Undergraduate',
    title: 'CDE4301: Innovation \& Design Capstone',
    href: 'https://cde.nus.edu.sg/edic/idp/modules/eg4301/',
    linkLabel: 'Course website',
    // Linked description: use <InlineLink href="..." external>link text</InlineLink>.
    description: (
      <>
      This final year project course is the culmination of a student's learning journey in the Innovation & Design Programme. 
      In this course, students will learn how to apply and integrate knowledge and skills acquired from preceding courses to 
      pursue an area of innovation in a design or research project. The project may be a continuation or extension of a 
      preceding one to deliver an integrated, improved, and optimised solution to the original problem of interest, 
      or a fresh project that arises from a new design problem or research question. Students are expected to 
      demonstrate a high level of independent inquiry in their project, while at the same time working effectively 
      with their project team members and mentors.
      </>
    ),
    studentWork:
      'Students independently identify and formulate a research problem, design and implement an appropriate solution or study using suitable methodologies, evaluate its effectiveness through relevant performance indicators, draw evidence-based conclusions and refine their approach based on critical analysis of results, and communicate and defend their work professionally in both written and oral forms in a timely manner.',
        videos: [
      {
        title: 'ThermoFace: Thermo-vibratory on-face haptic display for enhanced VR immersion',
        projectBy: 'Wang Bo (Year 4 Electrical Engineering), Assisted by Mingyuan Jing (Year 2 Electrical Engineering), Xinyu Li (Year 3 Electrical Engineering), Yunxuan Li (Year 3 Electrical Engineering), Yalin Peng (Year 3 Electrical Engineering) through UROP',
        note: (
          <>
            ✨ Showcasing the project to <Strong>NUS President Professor Tan Eng Chye</Strong> and <Strong>CDE Dean Prof Teo Kie Leong</Strong> at EDIC project showcase event
            <br />
            ✨ Invited oral presentation at the <InlineLink href="https://eng.kmutt.ac.th/en/ice-activities/ispc-2025/" external>International Senior Project Conference (ISPC) 2025</InlineLink> (Annual event for showcasing FYP of Year 4 students from the world)
          </>
        ),
        mediaCoverage: (
          <>
            Featured in EDIC Project Showcase: <InlineLink href="https://cde.nus.edu.sg/news/edic-project-showcase-2025/?fbclid=IwZXh0bgNhZW0CMTEAAR5nlWFgJF4xegxUzIpS8EA-qnkbSeO8H4yHDBYpyWHUMbJEllxIa4yShBCeBg_aem_svrymn65jdYHyf5twKHeyw" external>CDE4301 project showcase</InlineLink>
          </>
        ),
        type: 'image',
        src: '/images/thermoface.jpg',
        alt: 'thermoface',
        credit: 'Photo credit: NUS CDE',
      },
    ],
  },
]
