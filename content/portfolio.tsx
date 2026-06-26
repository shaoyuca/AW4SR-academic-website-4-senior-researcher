// ================================================================
//  PORTFOLIO PAGE CONTENT
//  Edit this file to update everything on the Portfolio page.
//  No other files need to be changed.
// ================================================================

import InlineLink from '@/components/ui/InlineLink'
import Strong from '@/components/ui/Strong'
import type { ProjectCardProps } from '@/components/portfolio/ProjectCard'


// ── 1. HERO BANNER ──────────────────────────────────────────────

/**
 * Full-width banner at the top of the page.
 * Place your image in public/images/ and write "/images/filename.jpg".
 * Any image size works — it will be cropped to fill the strip.
 */
export const PORTFOLIO_HERO = {
  imageSrc: 'https://picsum.photos/seed/portfolio-hero/1600/600',
  imageAlt: 'Laboratory and research projects overview',
}


// ── 2. INTRO TEXT ───────────────────────────────────────────────

/**
 * Body paragraph shown below the banner.
 * Bold: <Strong>word</Strong>
 * Link: <InlineLink href="…" external>word</InlineLink>
 */
export const PORTFOLIO_INTRO = (
  <>
    This portfolio presents my research projects with my stduents and collaborators, spanning{' '}
    <Strong>wearable haptic interfaces</Strong>,{' '}
    <Strong>multimodal interaction and perception</Strong>, and{' '}
    <Strong>data-driven texture rendering</Strong>. These projects explore how touch,
    thermal feedback, smell, force, motion, and intelligent sensing can create richer
    interaction in virtual, mixed, and everyday environments. The work
    has been published and showcased at top venues about <Strong>computer graphics</Strong> and <Strong>human-computer interaction</Strong>, including{' '}
    <InlineLink href="https://www.siggraph.org/" external>SIGGRAPH</InlineLink>,{' '}
    <InlineLink href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=2945" external>IEEE TVCG</InlineLink>,{' '}
    <InlineLink href="https://ieeevr.org" external>IEEE VR</InlineLink>{' '}
    and {' '}
    <InlineLink href="https://chi2026.acm.org" external>CHI</InlineLink>,{' '}
    <InlineLink href="https://dis.acm.org" external>DIS</InlineLink>,{' '}
    <InlineLink href="https://cscw.acm.org" external>CSCW</InlineLink>.{' '}
 Select a project below to read more.
  </>
)


// ── 3. RESEARCH DIRECTIONS & PROJECTS ───────────────────────────

/**
 * Each direction has:
 *   title     — text shown over the direction banner (user-defined)
 *   imageSrc  — background image for the banner; place in public/images/
 *   imageAlt  — accessibility description of the image
 *   projects  — list of project cards shown below the banner
 *
 * Each project card has:
 *   title     — paper/project title (H2 size)
 *   authors   — italic author list; wrap names in <Strong> for bold
 *   venue     — conference/journal; wrap in <Strong> for bold parts
 *   links     — array of { label, href } for PDF, Video, etc.
 *               Two ways to link a PDF:
 *               External URL:  { label: 'PDF', href: 'https://dl.acm.org/…' }
 *               Self-hosted:   { label: 'PDF', href: '/papers/your-paper.pdf' }
 *                 → place the file at  public/papers/your-paper.pdf
 *                 → PDFs in that folder are git-ignored; upload them separately
 *                    to Vercel (dashboard → Storage) or your institution's server.
 *   mediaSrc  — image or GIF; place in public/images/ (".gif" files work)
 *               GIFs are lazy-loaded — they only start downloading when
 *               the user scrolls to them, keeping initial load fast.
 *   mediaAlt  — accessibility description of the media
 */
export type Direction = {
  title: string
  imageSrc: string
  imageAlt: string
  projects: ProjectCardProps[]
}

export const DIRECTIONS: Direction[] = [
  {
    title: 'Wearable Haptic Interfaces',           // ← banner text, edit freely
    imageSrc: 'https://picsum.photos/seed/dir1/1600/900',
    imageAlt: 'Wearable Haptic Interfaces',
    projects: [
      {
        title: 'ThermAirGlove: A Pneumatic Glove for Thermal Perception and Material Identification in Virtual Reality',
        authors: <><Strong>Shaoyu Cai</Strong>, Pingchuan Ke, Takuji Narumi, and Kening Zhu</>,
        venue: <>2020 IEEE Conference on Virtual Reality and 3D User Interfaces, pp. 248-257 (IEEE VR).</>,
        keywords: <>Keywords: Thermal feedback, pneumatic actuation, material simulation</>,
        links: [
          { label: 'PDF',   href: 'https://www.researchgate.net/publication/342058113_ThermAirGlove_A_Pneumatic_Glove_for_Thermal_Perception_and_Material_Identification_in_Virtual_Reality#read' },
          { label: 'Video', href: 'https://www.youtube.com/watch?v=VgsmilcO1yU' },
          ],
        mediaSrc: '/images/thermairglove.gif',
        mediaAlt: 'ThermAirGlove pneumatic glove prototype',
      },
      {
          title: 'ViboPneumo: A Vibratory-Pneumatic Finger-Worn Haptic Device for Altering Perceived Texture Roughness in Mixed Reality',
          authors: <><Strong>Shaoyu Cai</Strong>, Zhenlin Chen, Haichen Gao, Ya Huang, Qi Zhang, Xinge Yu, and Kening Zhu</>,
          venue: <>IEEE Transactions on Visualization &amp; Computer Graphics, 2024 (TVCG).</>,
          keywords: <>Keywords: Vibrotactile feedback, pneumatic actuation, texture rendering</>,
          links: [
            { label: 'PDF',   href: 'https://arxiv.org/pdf/2403.05182v1' },
            { label: 'Video', href: 'https://www.youtube.com/watch?v=6g25o7i7kSM' },
          ],
          mediaSrc: '/images/vibopneumo.gif',
          mediaAlt: 'ViboPneumo finger-worn haptic device',
      },

      {
        title: 'ThermOuch: A Wearable Thermo-Haptic Device for Inducing Pain Sensation in Virtual Reality through Thermal Grill Illusion',
        authors: <>Haichen Gao, <Strong>Shaoyu Cai</Strong>, Yuhong Wu, and Kening Zhu</>,
        venue: <>SIGGRAPH Asia 2024 Conference Papers, pp. 1-12. 2024 (SIGGRAPH Asia).</>,
        keywords: <>Keywords: Thermohaptics, thermal grill illusion, pain sensation</>,
        links: [
          { label: 'PDF',   href: 'https://dl.acm.org/doi/epdf/10.1145/3680528.3687620' },
          { label: 'Video', href: 'https://www.youtube.com/watch?v=iCKXcDOM4B4' },
        ],
        mediaSrc: '/images/thermouch.gif',
        mediaAlt: 'ThermOuch wearable thermo-haptic device',
      },
      {
        title: 'PropelWalker: A Leg-based Wearable System with Propeller-based Force Feedback for Walking in Fluids in VR',
        authors: <>Pingchuan Ke, <Strong>Shaoyu Cai</Strong>, Haichen Gao, and Kening Zhu</>,
        venue: <>IEEE Transactions on Visualization and Computer Graphics, 29(12), 5149-5164. 2022 (TVCG).</>,
        keywords: <>Keywords: Force feedback, weight simultion, liquid simulation</>,
        links: [
          { label: 'PDF',   href: 'https://ieeexplore.ieee.org/abstract/document/9881908' },
          { label: 'Video', href: 'https://youtu.be/YOUX6EwBkNQ' },
        ],
        mediaSrc: '/images/propelwalker.gif',
        mediaAlt: 'PropelWalker leg-based wearable force feedback system',
      },
      {
        title: 'VirCHEW Reality: On-Face Kinesthetic Feedback for Enhancing Food-Intake Experience in Virtual Reality',
        authors: <>Qingqin Liu, Ziqi Fang, Jiayi Wu, <Strong>Shaoyu Cai</Strong>, Jianhui Yan, Tiande Mo, Shuk Ching Chan, and Kening Zhu</>,
        venue: <>SIGGRAPH 2025 Conference Papers, pp. 1-12. 2025 (SIGGRAPH).</>,
        award: (
          <>
            🏆 Top 10 Technical Papers Fast Forward — <Strong>SIGGRAPH 2025</Strong>
            <br />
            🏆 Best Audience Choice Award — <Strong>SIGGRAPH Asia 2025 Emerging Technologies</Strong>
          </>
        ),
        keywords: <>Keywords: Kinesthetic feedback, food texture rendering, pneumatic actuation</>,
        links: [
          { label: 'PDF',   href: 'https://dl.acm.org/doi/epdf/10.1145/3721238.3730694' },
          { label: 'Video', href: 'https://www.youtube.com/watch?v=s-c_svMOjBQ' },
        ],
        mediaSrc: '/images/chewvr.gif',
        mediaAlt: 'VirCHEW Reality on-face kinesthetic feedback device',
        mediaPosition: 'left center',
      },
      {
        title: 'Skin-integrated Multimodal Haptic Interface for Immersive Tactile Feedback',
        authors: <>Ya Huang, Jingkun Zhou, Pingchuan Ke, Xu Guo, Chunki Yiu, Kuanming Yao, <Strong>Shaoyu Cai</Strong>, Dengfeng Li, Yu Zhou, Jian Li, Tsz Hung Wong, Yiming Liu, Lei Li, Yuyu Gao, Xingcan Huang, Hu Li, Jiyu Li, Binbin Zhang, Zhenlin Chen, Huanxi Zheng, Xingyu Yang, Haichen Gao,
Zichen Zhao, Xu Guo, Enming Song, Hui Wu, Zuankai Wang, Zhaoqian Xie, Kening Zhu, and Xinge Yu</>,
        venue: <>Nature Electronics 6, no. 12 (2023): 1020-1031.</>,
        keywords: <>Keywords: Flexible electronics, multimodal haptics, texture simulation</>,
        links: [
          { label: 'PDF',   href: 'https://drive.google.com/file/d/1ZQcm6eGUPOw0VIHTzRqc6QpjwPyOs3sC/view' },
          { label: 'Video', href: 'https://www.youtube.com/watch?v=3byUf94J1QM' },
        ],
        mediaSrc: '/images/ne.png',
        mediaAlt: 'Skin-integrated multimodal haptic interface',
      },
    ],
  },
  {
    title: 'Multimodal Interaction \& Perception',
    imageSrc: 'https://picsum.photos/seed/dir2/1600/900',
    imageAlt: 'Wearable and textile computing research',
    projects: [
      {
        title: 'Modulating Olfactory Perception through Localized Nasal Thermal Stimulation',
        authors: <>Rui Zhang, Yitian Ding, Ningchang Xiong, and <Strong>Shaoyu Cai*</Strong></>,
        venue: <>Proceedings of the 2026 Designing Interactive Systems Conference (DIS 2026), pp. 931-946. 2026.</>,
        links: [
          { label: 'PDF',   href: 'https://dl.acm.org/doi/epdf/10.1145/3800645.3813007' },
          { label: 'Video', href: 'https://www.youtube.com/watch?v=h_gRlk9fWIA' },
        ],
        keywords: <>Keywords: Crossmodal perception, thermal feedback, olfactory perception</>,
        mediaSrc: '/images/dis26.gif',
        mediaAlt: 'Localized nasal thermal stimulation olfactory perception project',
        mediaPosition: 'right center',
      },
      {
        title: 'Signals of Aggression: Modelling Multimodal Cues and Perceptual Effects in Virtual Agents',
        authors: <>Shaun Jing Heng Ong, Aiden Tat Yang Koh, <Strong>Shaoyu Cai*</Strong>, Felicia Fang-Yi Tan, Patrick Chia, and Eng Tat Khoo</>,
        venue: <>Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026), April 13-17, 2026, Barcelona, Spain.</>,
        links: [
          { label: 'PDF',   href: 'https://dl.acm.org/doi/epdf/10.1145/3772318.3791031' },
          { label: 'Video', href: 'https://youtu.be/x7c60RAukFw' },
        ],
        keywords: <>Keywords: Multimodal perception, aggression perception, virtual agents</>,
        mediaSrc: '/images/chi26.gif',
        mediaAlt: 'Signals of Aggression virtual agents project',
      },
      {
        title: 'From Beeping Machines to Caring Companions: Redesigning Social Robots Through Reflective Ethnography in Elderly Care Work',
        authors: <>Xinpeng Liu, Haosu Xu, Yiming Luo, and <Strong>Shaoyu Cai*</Strong></>,
        venue: <>Proceedings of the ACM on Human-Computer Interaction 9(7), 1-29. CSCW 2025.</>,
        award: <>🏆 Best Paper Honorable Mentions — <Strong>CSCW 2025</Strong></>,
        links: [          
          { label: 'PDF',   href: 'https://dl.acm.org/doi/epdf/10.1145/3757603' },
          ],
        keywords: <>Keywords: Multimodal interaction, HRI, social robots, ederly care</>,
        mediaSrc: '/images/cscw25.png',
        mediaAlt: 'Social robots in elderly care work project',
      },
    ],
  },
  {
    title: 'Data-driven Texture Rendering',
    imageSrc: 'https://picsum.photos/seed/stress/1600/900',
    imageAlt: 'Stress test direction banner',
    projects: [
      {
        title: 'Visual-Tactile Cross-Modal Data Generation using Residue-Fusion GAN with Feature-Matching and Perceptual Losses',
        authors: <><Strong>Shaoyu Cai</Strong>, Kening Zhu, Yuki Ban, and Takuji Narumi</>,
        venue: <>IEEE Robotics and Automation Letters (RA-L), vol. 6, no. 4, pp. 7525-7532 with IROS 2021 presentation. </>,
        links: [
        ],
        keywords: <>Keywords: Cross-modal visual-tactile generation, Generative adversarial networks (GANs), Tactile intelligence </>,
        mediaSrc: '/images/CMVT.png',
        mediaAlt: 'Visual-tactile cross-modal data generation project',
      },
      {
        title: 'GAN-based Image-to-Friction Generation for Tactile Simulation of Fabric Material',
        authors: <><Strong>Shaoyu Cai</Strong>, Lu Zhao, Yuki Ban, Takuji Narumi, Yue Liu, and Kening Zhu</>,
        venue: <>Computers &amp; Graphics, vol. 102, pp. 460-473, Feb. 2022.</>,
        award: <>🏆 Best Paper Audience Choice Award — <Strong>ICAT-EGVE 2020</Strong></>,
        links: [
        ],
        keywords: <>Keywords: Image-to-Friction generation, Generative adversarial networks (GANs), Electrotactile displays </>,
        mediaSrc: '/images/frictgan.gif',
        mediaAlt: 'GAN-based image-to-friction generation project',
      },
      {
        title: 'Multi-modal Transformer-based Tactile Signal Generation for Haptic Texture Simulation of Materials in Virtual and Augmented Reality',
        authors: <><Strong>Shaoyu Cai</Strong> and Kening Zhu</>,
        venue: <>2022 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct).</>,
        links: [
        ],
        keywords: <>Keywords: Multi-modal visual-tactile generation, Transformer, Texture Simulation </>,
        mediaSrc: '/images/tactransformer.png',
        mediaAlt: 'TacTransformer tactile signal generation project',
      },
    ],
  },
]
