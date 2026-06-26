// ================================================================
//  ABOUT PAGE CONTENT
//  Edit this file to update everything on the About page.
//  No other files need to be changed.
// ================================================================

import InlineLink from '@/components/ui/InlineLink'
import type { ApproachItem, ExternalImage } from '@/components/about/OurApproachSection'
import type { ProjectItem } from '@/components/about/ResearchSection'


// ── 1. BIO ──────────────────────────────────────────────────────

/**
 * Profile photo shown to the left of the bio paragraph.
 *
 * HOW TO REPLACE:
 *   1. Place your photo in public/images/  (e.g. public/images/profile.jpg)
 *   2. Change `src` to '/images/profile.jpg'
 *   3. Change `alt` to the person's name
 *
 * PORTRAIT ORIENTATION RECOMMENDED (taller than wide).
 * The photo is displayed at 180 × 200 px and automatically cropped from the
 * top, so keep the subject's face near the top of the image.
 * Any file size or resolution works — the site handles resizing.
 */
export const BIO_PHOTO = {
  src: '/images/shaoyu.JPG', // ← replace with '/images/profile.jpg'
  alt: 'Shaoyu Cai',                            // ← replace with the person's name
}

/**
 * Links shown below the bio paragraph (e.g. Google Scholar, CV, personal site).
 * external: true  → opens in a new tab
 * external: false → internal page (e.g. "/publications")
 */
export const BIO_LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: 'NUS Profile',    href: 'https://cde.nus.edu.sg/edic/staff/cai-shaoyu/',  external: true },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=wUpkNc8AAAAJ&hl=en',  external: true },
  { label: 'DBLP',           href: 'https://dblp.org/pid/246/5542.html',            external: true },
  { label: 'ORCID',          href: 'https://orcid.org/0000-0001-8808-3442',           external: true },
  { label: 'Linkedin',          href: 'https://www.linkedin.com/in/shaoyu-cai-63a96523a',           external: true },
]

/**
 * The main bio paragraph.
 *
 * Plain text  → just write your text directly.
 * With a link → wrap the word with:
 *     <InlineLink href="https://…" external>linked word</InlineLink>
 */
export const BIO_TEXT = (
  <>
    Dr. Shaoyu Cai (蔡绍禹) is a Lecturer at the Engineering Design and Innovation Centre, 
    College of Design and Engineering, National University of Singapore, where he also serves as Co-director of 
     <InlineLink href="https://blog.nus.edu.sg/immersiverealitylab/"external> NUS Immersive Reality Lab</InlineLink>. He received his Ph.D. from the School of Creative Media at City University of Hong Kong. 
    His research bridges engineering, computing, and design to develop intelligent interactive systems that enhance 
    how people perceive and interact with the physical and digital worlds. His work focuses on wearable technologies, 
    haptic interfaces, multimodal interaction, and extended reality (XR), combining human perception with innovative 
    hardware and software design to create more natural, immersive, and effective human–computer interactions.
  </>
)


// ── 2. RESEARCH DIRECTIONS ──────────────────────────────────────

/**
 * Each entry creates one research-direction block (H2 title + description + project images).
 * You can add or remove entries freely.
 *
 * How project pages are created:
 *   1. Add a project below with a title and imageSrc.
 *   2. The image appears on the About page.
 *   3. Clicking the image automatically opens a project detail route generated
 *      from the title. Example: "Project Alpha" -> "/projects/project-alpha".
 *   4. The generated detail page currently shows the project title and
 *      "Project detail page coming soon."
 *
 * projects[].title    -> label shown below the image. Keep titles unique.
 * projects[].imageSrc -> place your image in public/images/ and write "/images/filename.jpg"
 *                        Up to 5 projects are shown per row (2 columns on mobile).
 * projects[].href     -> optional advanced override. Most projects do not need this.
 */
export const RESEARCH_DIRECTIONS: {
  title: string
  description: React.ReactNode
  projects: ProjectItem[]
}[] = [
  {
    title: 'Multimodal \& Embodied Interfaces',        // ← H2 heading, edit freely
    description: (
      <>
        We focus on the design and evaluation of multimodal human-computer interfaces that 
        integrate multiple sensory modalities, such as touch, temperature, smell, sound, and visual feedback, 
        to enhance user perception, interaction, and experience in immersive environments.
      </>
    ),
    projects: [
      {
        title: 'ViboPneumo',
        imageSrc: '/images/vibopneumo.png', // ← replace with your image
      },
      {
        title: 'ViChewReality',
        imageSrc: '/images/ChewVR.png',
      },
      {
        title: 'ThermOuch',
        imageSrc: '/images/Thermouch.png',
      },
      {
        title: 'ThermOlfactory',
        imageSrc: '/images/dis26.png',
      },
    ],
  },
  {
    title: 'Tactile Intelligence',
    description:(
    <>
    My research explores how intelligent systems can leverage human perceptual abilities, 
      such as tactile sensing, and imaginative processes, such as cross-modal generation, 
      to create more natural human–computer interactions and next-generation embodied AI.
      </>
    ),
    projects: [
      {
        title: 'CMVT',
        imageSrc: '/images/CMVT.png',
      },
      {
        title: 'FrictGAN',
        imageSrc: '/images/FrictGAN.png',
      },
      {
        title: 'TacTransformer',
        imageSrc: '/images/tactransformer.png',
      },
    ],
  },
]


// ── 3. OUR APPROACH ─────────────────────────────────────────────

/**
 * `items` — each entry is one sub-section (H3 title + description + bullet points).
 *
 * bullets[] entries can be plain text or text with links:
 *   Plain:  'Some text here'
 *   Linked: <>Some <InlineLink href="…" external>word</InlineLink> here</>
 *
 * `images` (optional) — a row of clickable images at the bottom of the section.
 *   Each image opens an external URL when clicked (e.g. press coverage, awards).
 *   Place images in public/images/ and write "/images/filename.jpg" for src.
 *   Remove the entire `images` array if you don't need this row.
 */
export const OUR_APPROACH: {
  title: string
  description: React.ReactNode
  items: ApproachItem[]
  images?: ExternalImage[]
} = {
  title: 'Our Approach',                       // ← H2 heading, edit freely
  description:
    'We pursue research at the intersection of technical innovation and human-centred design, with impact spanning scientific communities, design practice, and public engagement.',
  items: [
    {
      title: 'Engineering & Scientific Impact', // ← H3 heading
      description: (
        <>
          We develop novel hardware systems and prototypes that advance the
          state of the art in human-computer interaction and immersive reality and publish at{' '}
          <InlineLink href="https://siggraph.org" external>SIGGRAPH</InlineLink>, {' '}
          <InlineLink href="https://www.computer.org/csdl/proceedings/1000791" external>IEEE VR</InlineLink>,{' '}
          <InlineLink href="https://dl.acm.org/conference/chi" external>CHI</InlineLink>,{' '}
          <InlineLink href="https://dl.acm.org/conference/cscw" external>CSCW</InlineLink>,{' '}
          and related top conferences in HCI and showcased in these top venues with awards:
        </>
      ),
      bullets: [
        '🏆 Best Paper Honorable Mention Award — ACM CSCW 2025',
        '🏆 Best Paper Award — IEEE PAINE 2025',
        '🏆 Best Demo Honorable Mention Award — ACM ICHEC (ChineseCHI) 2025',
        '🏆 Best Demo Audience Choice Award — ACM SIGGRAPH Asia Emerging Technologies 2025',
        '🏆 Silver Award — International Exhibition of Inventions Geneva 2024',
        '🏆 Bronze Award — International Exhibition of Inventions Geneva 2023',
        '🏆 Best Paper Audience Choice Award — Eurographics ICAT-EGVE 2020',
      ],
    },
    {
      title: 'Education & Teaching Impact',
      blocks: [
        {
          description:
            'We employ project-based and studio-based learning in partnership with industry to engage students in real-world challenges, fostering innovative solutions that bridge academic knowledge and practical impact. I am currently working at the following studios in NUS:',
          bullets: [
            <>
              <InlineLink href="https://cde.nus.edu.sg/edic/projects/wearable-tech-2026/" external>Intelligent Wearable Studio</InlineLink>, 2026-current
            </>,
            <>
              <InlineLink href="https://cde.nus.edu.sg/edic/projects/immersive-heritage-2025/" external>Creative Media/Multi-sensory VR Studio</InlineLink>, 2024-current
            </>
          ],
        },
        {
          description:
            'My teaching is grounded in studio-based research methods alongside engineering approaches and has been recognized through institutional awards:',
          bullets: [
            '🏆 Annual Teaching Excellence Award — NUS 2026',
            '🏆 College Educator Award — NUS College of Design and Engineering 2025',
          ],
        },
      ],
    },
    {
      title: 'Industial Collaboration',
      description:
        'We work with industry, public institutions, and community organizations to translate research into real-world impact through innovation, design, and public engagement. Some representative industrial collaborators:',
      bullets: [
        <>
          <InlineLink href="https://oceanx.org/into-the-ocean-exhibition/?utm_source=google&utm_medium=cpc&utm_campaign=2026_mbs_asm&utm_content=headline&gad_source=1&gad_campaignid=23875542172&gbraid=0AAAABB1pPhV_CQilaLBEcJmuTgPykrhkp&gclid=Cj0KCQjwxvjRBhC2ARIsAI7KJa1aTzCeD_BS9-FiNy4qLpVYJWDJRYEiXF3dtnWHp_ynchCkjUZ9PiQaAhVDEALw_wcB" external>OceanX</InlineLink>
        </>,
        <>
          <InlineLink href="https://www.nhb.gov.sg/" external>National Heritage Board (NHB)</InlineLink>
        </>,        <>
          <InlineLink href="https://www.ah.com.sg/" external>Alexandra Hospital</InlineLink>
        </>,
      ],
    },
  ],
  // Remove the lines below (from `images:` to the closing `],`) if you don't need media logos.
  //images: [
   // { src: '/images/oceanx.jpeg', alt: 'Media feature 1', href: 'https://example.com' },
   // { src: 'https://picsum.photos/seed/img2/400/280', alt: 'Media feature 2', href: 'https://example.com' },
  //  { src: 'https://picsum.photos/seed/img3/400/280', alt: 'Media feature 3', href: 'https://example.com' },
  //],
}


// ── 4. CONTACT ──────────────────────────────────────────────────

/**
 * imageSrc    → place your building/office photo in public/images/ and write "/images/filename.jpg"
 * mapEmbedUrl → go to Google Maps → find your location → Share → "Embed a map"
 *               → copy the URL inside src="…" and paste it here
 */
export const CONTACT = {
  title: 'Contact',                            // ← H2 heading, edit freely
  intro:
    'We are based in the Engineering Design & Innovation Centre, College of Design and Engineering. Prospective students and collaborators are welcome to reach out by email.',
  imageSrc: '/images/E2A.png', // ← replace with /images/your-building.jpg
  imageAlt: 'Engineering Design & Innovation Centre',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7782!2d103.7763!3d1.2966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnNDcuOCJOIDEwM8KwNDYnMzQuNyJF!5e0!3m2!1sen!2ssg!4v1700000000000', // ← paste your Google Maps embed URL here
  description:
    'Engineering Design & Innovation Centre, Block E2A #02-03, 5 Engineering Drive 2, Singapore 117579. Office hours: Monday–Friday, 9 am–5 pm. For general enquiries, please email shaoyucai@nus.edu.sg',
}
