// ================================================================
//  PROJECT DETAIL PAGES — CONTENT
//  Each key in PROJECT_DETAILS matches a project slug derived from
//  the project title in content/about.tsx.
//
//  Title → slug conversion (automatic):
//    "Project Alpha"       → "project-alpha"
//    "Soft Robot Arm"      → "soft-robot-arm"
//    "My Project (2024)"   → "my-project-2024"
//
//  HOW ROUTING WORKS
//    Every project in content/about.tsx automatically gets its own route
//    at /projects/<slug>. The route is created whether or not this file
//    has an entry for it. Without an entry, the page shows "coming soon".
//
//  HOW TO ADD A PROJECT PAGE
//    Step 1 — Add the project image to content/about.tsx (already done if
//             the project appears on the About page).
//    Step 2 — Add an entry here with the matching slug as the key.
//
//    Not sure what the slug is? Click the project on the About page and
//    read the URL: /projects/<slug> — that is the key to use.
//
//  MEDIA — images and videos, shown 2 per row (1 on mobile)
//    Image:  { type: 'image', src: '/images/your-file.jpg', alt: 'Description' }
//    Video:  { type: 'video', embedUrl: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Title' }
//
//    YouTube embed URL:  https://www.youtube.com/embed/VIDEO_ID
//      (open the video → Share → Embed → copy the src="…" URL)
//    Vimeo embed URL:    https://player.vimeo.com/video/VIDEO_ID
//
//    Images are lazy-loaded automatically. Videos use loading="lazy"
//    so they only load when scrolled into view.
//
//  PUBLICATION — paste the citation string directly (Google Scholar style or any format).
//    It is displayed as plain body text under an H2 "Publication" heading.
// ================================================================

import InlineLink from '@/components/ui/InlineLink'
import type { MediaItem } from '@/components/projects/MediaGrid'

export type ProjectDetail = {
  description: React.ReactNode
  media?: MediaItem[]
  publication?: React.ReactNode  // paste the citation text as-is (Google Scholar / any style)
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {

  // ── project-alpha ────────────────────────────────────────────
  'vibopneumo': {
    description: (
      <>
        Extensive research has been done in haptic feedback for texture simulation in virtual reality (VR). However, it is challenging
to modify the perceived tactile texture of existing physical objects which usually serve as anchors for virtual objects in mixed reality (MR).
In this paper, we present ViboPneumo, a finger-worn haptic device that uses vibratory-pneumatic feedback to modulate (i.e., increase and
decrease) the perceived roughness of the material surface contacted by the user’s fingerpad while supporting the perceived sensation of
other haptic properties (e.g., temperature or stickiness) in MR. Our device includes a silicone-based pneumatic actuator that can lift the user’s
fingerpad on the physical surface to reduce the contact area for roughness decreasing, and an on-finger vibrator for roughness increasing.
Our user-perception experimental results showed that the participants could perceive changes in roughness, both increasing and decreasing,
compared to the original material surface. We also observed the overlapping roughness ratings among certain haptic stimuli (i.e., vibrotactile
and pneumatic) and the originally perceived roughness of some materials without any haptic feedback. This suggests the potential
to alter the perceived texture of one type of material to another in terms of roughness (e.g., modifying the perceived texture of ceramics
as glass). Lastly, a user study of MR experience showed that ViboPneumo could significantly improve the MR user experience, particularly
for visual-haptic matching, compared to the condition of a bare finger. We also demonstrated a few application scenarios for ViboPneumo.

      </>
    ),
    //media: [
      // Image + Image
      //{
       // type: 'image',
      //  src: 'https://picsum.photos/seed/flexform-1/800/450',
      //  alt: 'FlexForm prototype showing deformation sequence',
      //},
      //{
      //  type: 'image',
      //  src: 'https://picsum.photos/seed/flexform-2/800/450',
      //  alt: 'Close-up of the actuator array embedded in the substrate',
      //},
      // Image + Video
      media: [
        {
          type: 'image',
          src: '/images/vibopneumo.png',
          alt: 'ViboPneumo finger-worn vibratory-pneumatic haptic device',
        },
        {
          type: 'image',
          src: '/images/vibopneumo.gif',
          alt: 'ViboPneumo haptic device demonstration',
        },
        {
          type: 'image',
          src: '/images/viboabric.gif',
          alt: 'ViboPneumo haptic device demonstration',
        },
        {
          type: 'video',
          embedUrl: 'https://www.youtube.com/embed/6g25o7i7kSM',
          title: 'ViboPneumo project demonstration video',
        },
      ],
      publication: 'Shaoyu Cai, Zhenlin Chen, Haichen Gao, Ya Huang, Qi Zhang, Xinge Yu, and Kening Zhu. "ViboPneumo: A Vibratory-Pneumatic Finger-Worn Haptic Device for Altering Perceived Texture Roughness in Mixed Reality." IEEE Transactions on Visualization & Computer Graphics. 2024.',
    },
   // ── ViChewReality ────────────────────────────────────────────
   'vichewreality': {
    description: (
      <>
        VirCHEW Reality investigates on-face kinesthetic feedback for enhancing food-intake experiences in virtual reality. 
        The project explores how wearable pneumatic actuation around the face can simulate chewing-related sensations, 
        helping virtual food interactions feel more embodied and realistic.
        <br />
        <br />
        By linking visual food experiences with synchronized facial haptic feedback, the system contributes to a broader 
        design space for multisensory VR, including virtual dining, food education, entertainment, and remote experience sharing.
      </>
    ),
    media: [
      {
        type: 'image',
        src: '/images/ChewVR.png',
        alt: 'VirCHEW Reality on-face kinesthetic feedback prototype',
      },
      {
        type: 'image',
        src: '/images/chewvr.gif',
        alt: 'VirCHEW Reality demonstration',
      },
      {
        type: 'image',
        src: '/images/chewing-gif.gif',
        alt: 'VirCHEW Reality demonstration',
      },
      {
        type: 'video',
        embedUrl: 'https://www.youtube.com/embed/s-c_svMOjBQ',
        title: 'VirCHEW Reality project demonstration video',
      },
    ],
    publication: (
      <>
        Qingqin Liu, Ziqi Fang, Jiayi Wu, Shaoyu Cai, Jianhui Yan, Tiande Mo, Shuk Ching Chan, and Kening Zhu. "VirCHEW Reality: On-Face Kinesthetic Feedback for Enhancing Food-Intake Experience in Virtual Reality." SIGGRAPH 2025 Conference Papers, pp. 1-12. 2025.
        <br />
        <br />
        Qingqin Liu, Ziqi Fang, Jiayi Wu, Shaoyu Cai, Jianhui Yan, Tiande Mo, Shuk Ching Chan, and Kening Zhu. "ChewBit: Enhancing Haptic Feedback with an On-Face Pneumatic Interface for Realistic Food Texture in VR." Proceedings of the SIGGRAPH Asia 2025 Emerging Technologies, pp. 1-3. 2025. Best Audience Choice Award — SIGGRAPH Asia 2025 Emerging Technologies.
      </>
    ),
  },

  // ── ThermOuch ────────────────────────────────────────────────
  'thermouch': {
    description: (
      <>
        ThermOuch is a wearable thermo-haptic device that uses the thermal grill illusion to induce pain-like 
        sensations in virtual reality without causing physical harm. By combining warm and cold thermal stimuli, 
        the system creates an illusory nociceptive sensation that can support more expressive and immersive VR experiences.
        <br />
        <br />
        The project contributes a wearable interaction technique for rendering uncomfortable or warning sensations in VR, 
        opening possibilities for training, simulation, accessibility research, and affective immersive experiences.
      </>
    ),
    media: [
      {
        type: 'image',
        src: '/images/tgi.png',
        alt: 'ThermOuch wearable thermo-haptic device',
      },
      {
        type: 'image',
        src: '/images/thermouch.gif',
        alt: 'ThermOuch demonstration',
      },
      {
        type: 'image',
        src: '/images/app1.gif',
        alt: 'ThermOuch demonstration',
      },
      {
        type: 'video',
        embedUrl: 'https://www.youtube.com/embed/iCKXcDOM4B4',
        title: 'ThermOuch project demonstration video',
      },
    ],
    publication: 'Haichen Gao, Shaoyu Cai, Yuhong Wu, and Kening Zhu. "ThermOuch: A Wearable Thermo-Haptic Device for Inducing Pain Sensation in Virtual Reality through Thermal Grill Illusion." SIGGRAPH Asia 2024 Conference Papers, pp. 1-12. 2024.',
  },

  // ── ThermOlfactory ───────────────────────────────────────────
  'thermolfactory': {
    description: (
      <>
        ThermOlfactory explores how localized nasal thermal stimulation can modulate olfactory perception. 
        Instead of only adding scent output, the project studies how temperature cues around the nose can change 
        how people perceive smell, creating a compact approach for influencing olfactory experience.
        <br />
        <br />
        This work supports the design of multisensory interfaces for XR, learning, entertainment, and experiential 
        media where smell perception is important but traditional scent delivery can be difficult to control.
      </>
    ),
    media: [
      {
        type: 'image',
        src: '/images/dis2611.png',
        alt: 'ThermOlfactory localized nasal thermal stimulation system',
      },
      {
        type: 'image',
        src: '/images/dis26.gif',
        alt: 'ThermOlfactory demonstration',
      },
    ],
    publication: 'Rui Zhang, Yitian Ding, Ningchang Xiong, and Shaoyu Cai. "Modulating Olfactory Perception through Localized Nasal Thermal Stimulation." Proceedings of the 2026 Designing Interactive Systems Conference (DIS 2026), pp. 931-946. 2026.',
  },

  // ── CMVT ─────────────────────────────────────────────────────
  'cmvt': {
    description: (
      <>
        Existing psychophysical studies have revealed that the cross-modal visual-tactile perception is 
        common for humans performing daily activities. However, it is still challenging to build the algorithmic 
        mapping from one modality space to another, namely the cross-modal visual-tactile (CMVT) data translation/generation, 
        which could be potentially important for robotic operation. CMVT studies visual-tactile cross-modal data generation for haptic texture simulation. The project uses a 
        residue-fusion generative adversarial network with feature-matching and perceptual losses to generate tactile 
        signals from visual texture information.
        <br />
        <br />
        By learning relationships between what materials look like and how they may feel, the work supports scalable 
        haptic content generation for virtual and augmented reality, reducing the need to manually record tactile data 
        for every new material. Our approach could be potentially applied in various robotic operational tasks, such as object recognition in
low-light conditions and light-weight object grasping.
      </>
    ),
    media: [
      {
        type: 'image',
        src: '/images/CMVT.png',
        alt: 'CMVT visual-tactile cross-modal data generation overview',
      },
      {
        type: 'image',
        src: '/images/CMVT2.png',
        alt: 'CMVT visual-tactile cross-modal data generation overview',
      },
    ],
    publication: 'Shaoyu Cai, Kening Zhu, Yuki Ban, and Takuji Narumi. "Visual-Tactile Cross-Modal Data Generation using Residue-Fusion GAN with Feature-Matching and Perceptual Losses." IEEE Robotics and Automation Letters (RA-L), vol. 6, no. 4, pp. 7525-7532.',
  },

  // ── FrictGAN ─────────────────────────────────────────────────
  'frictgan': {
    description: (
      <>
        FrictGAN generates frictional tactile signals from fabric texture images using generative adversarial networks. 
        The project focuses on translating visual material appearance into friction cues that can be rendered through 
        tactile displays for more realistic fabric simulation.
        <br />
        <br />
        This approach contributes to data-driven texture rendering by enabling haptic systems to synthesize plausible 
        tactile feedback from image inputs, supporting virtual shopping, material design, and immersive training scenarios.
      </>
    ),
    media: [
      {
        type: 'image',
        src: '/images/ganbased.png',
        alt: 'FrictGAN demonstration',
      },
      {
        type: 'image',
        src: '/images/cg.png',
        alt: 'FrictGAN image-to-friction generation project',
      },

      {
        type: 'image',
        src: '/images/frictgan.gif',
        alt: 'FrictGAN demonstration',
      },
      {
        type: 'image',
        src: '/images/newmaterial.gif',
        alt: 'FrictGAN demonstration',
      },
    ],
    publication: (
      <>
        Shaoyu Cai, Yuki Ban, Takuji Narumi, and Kening Zhu. "FrictGAN: Frictional Signal Generation from Fabric Texture Images using Generative Adversarial Network." International Conference on Artificial Reality and Telexistence & Eurographics Symposium on Virtual Environments, pp. 11-15. The Eurographics Association, 2020.
        <br />
        <br />
        Shaoyu Cai, Lu Zhao, Yuki Ban, Takuji Narumi, Yue Liu, and Kening Zhu. "GAN-based Image-to-Friction Generation for Tactile Simulation of Fabric Material." Computers & Graphics, vol. 102, pp. 460-473, Feb. 2022.
      </>
    ),
  },

  // ── TacTransformer ───────────────────────────────────────────
  'tactransformer': {
    description: (
      <>
        TacTransformer explores multi-modal transformer-based tactile signal generation for haptic texture simulation 
        in virtual and augmented reality. The project uses transformer models to learn relationships across visual, 
        tactile, and material-related signals for generating haptic feedback.
        <br />
        <br />
        The work advances data-driven haptic rendering by investigating how modern sequence models can synthesize 
        tactile signals that support more scalable and realistic material experiences in immersive environments 
        under differnet applied forces and scanning directions on different material surfaces through tool-based interaction.
      </>
    ),
    media: [
      {
        type: 'image',
        src: '/images/tactrans.png',
        alt: 'TacTransformer tactile signal generation project',
      },
    ],
    publication: 'Shaoyu Cai and Kening Zhu. "Multi-modal Transformer-based Tactile Signal Generation for Haptic Texture Simulation of Materials in Virtual and Augmented Reality." 2022 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct).',
  },

  // ── project-beta ─────────────────────────────────────────────
  'project-beta': {
    description: '[Project Beta description. Replace this text.]',
    // media: [
    //   { type: 'image', src: '/images/beta-1.jpg', alt: '…' },
    //   { type: 'video', embedUrl: 'https://www.youtube.com/embed/YOUR_ID', title: '…' },
    // ],
    // publication: 'Author A, Author B. "Title." Venue, Year.',
  },

  // ── project-gamma ────────────────────────────────────────────
  'project-gamma': {
    description: '[Project Gamma description. Replace this text.]',
  },

  // ── project-delta ────────────────────────────────────────────
  'project-delta': {
    description: '[Project Delta description. Replace this text.]',
  },

  // ── project-epsilon ──────────────────────────────────────────
  'project-epsilon': {
    description: '[Project Epsilon description. Replace this text.]',
  },

  // ── project-x ────────────────────────────────────────────────
  'project-x': {
    description: (
      <>
        Project X investigates on-body sensing networks that map physiological
        signals — including pressure, temperature, and bioelectrical activity —
        to real-time feedback in immersive environments. Thin-film sensors are
        laminated directly onto stretchable textile substrates, allowing the
        system to conform to a wide range of body geometries without constraining
        natural movement. A lightweight wireless module transmits data at 200 Hz,
        enabling latencies below 20 ms from sensation to display. The work
        contributes both a fabrication pipeline and an open-source{' '}
        <InlineLink href="https://en.wikipedia.org/wiki/Software_development_kit" external>
          SDK
        </InlineLink>{' '}
        for researchers building body-worn interactive systems.
      </>
    ),
    media: [
      {
        type: 'image',
        src: 'https://picsum.photos/seed/projectx-1/800/450',
        alt: 'Thin-film sensor array laminated onto a textile substrate',
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/projectx-2/800/450',
        alt: 'Wireless data acquisition module attached to the sleeve',
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/projectx-3/800/450',
        alt: 'Participant wearing the prototype during a user study session',
      },
    ],
    publication: 'Smith, Bob, Carol Williams, Alice Chen, and David Lee. "Project X: A Stretchable On-Body Sensing Network for Real-Time Physiological Feedback." In Proceedings of the 2025 ACM International Symposium on Wearable Computers (ISWC \'25), pp. 45–52. ACM, New York, NY, USA, 2025.',
  },

  // ── project-eta ──────────────────────────────────────────────
  'project-eta': {
    description: '[Project Eta description. Replace this text.]',
  },

}
