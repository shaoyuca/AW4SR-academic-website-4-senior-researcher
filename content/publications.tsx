// ================================================================
//  PUBLICATIONS PAGE CONTENT
//  Edit this file to update everything on the Publications page.
//  No other files need to be changed.
// ================================================================

import Strong from '@/components/ui/Strong'
import type { PublicationCardProps } from '@/components/publications/PublicationCard'

export type YearGroup = {
  year: number
  papers: PublicationCardProps[]
}

export const CORRESPONDING_NOTE = ''

export const PUBLICATIONS: YearGroup[] = [
  {
    year: 2026,
    papers: [
      {
        title: 'Modulating Olfactory Perception through Localized Nasal Thermal Stimulation',
        authors: (
          <>Rui Zhang, Yitian Ding, Ningchang Xiong, and <Strong>Shaoyu Cai</Strong></>
        ),
        venue: 'Proceedings of the 2026 Designing Interactive Systems Conference (DIS 2026), pp. 931-946. 2026.',
        links: [],
      },
      {
        title: 'Signals of Aggression: Modelling Multimodal Cues and Perceptual Effects in Virtual Agents',
        authors: (
          <>Shaun Jing Heng Ong, Aiden Tat Yang Koh, <Strong>Shaoyu Cai</Strong>, Felicia Fang-Yi Tan, Patrick Chia, and Eng Tat Khoo</>
        ),
        venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026), April 13-17, 2026, Barcelona, Spain.',
        links: [],
      },
      {
        title: 'EgoPoseVR: Spatiotemporal Multi-Modal Reasoning for Egocentric Full-Body Pose in Virtual Reality',
        authors: (
          <>Haojie Cheng, Shaun Jing Heng Ong, <Strong>Shaoyu Cai</Strong>, Aiden Tat Yang Koh, Fuxi Ouyang, and Eng Tat Khoo</>
        ),
        venue: 'IEEE Transactions on Visualization & Computer Graphics (IEEE VR 2026).',
        links: [],
      },
    ],
  },
  {
    year: 2025,
    papers: [
      {
        title: 'AromaCanvas: A Wearable Olfactory Display for Chinese Painting Appreciation and Learning in Virtual Reality',
        authors: (
          <>Tao Lin, Quanhao Gan, Fuxi Ouyang, Yiming Luo, Yushan Pan, Yushi Li, and <Strong>Shaoyu Cai</Strong></>
        ),
        venue: 'Computers & Education: X Reality 7 (2025): 100109.',
        links: [],
      },
      {
        title: 'Metaheuristic Color Scheme Strategies for Enhanced Visual Inspection of 3D IC Layouts',
        authors: (
          <>Jie Zhang, Zhansen Shi, Hanchen Wang, Zhuoyang Zhang, Lucas Lum, Quanhao Gan, <Strong>Shaoyu Cai</Strong>, Eng Tat Khoo, and Yeow Kheng Lim</>
        ),
        venue: 'IEEE International Conference on Physical Assurance and Inspection of Electronics (PAINE 2025).',
        award: <>🏆 Best Paper Award — PAINE 2025</>,
        links: [],
      },
      {
        title: 'Interactive Multimodal Storytelling Installation for Dementia Awareness and Engagement: Somewhere in This Fog of Memory',
        authors: (
          <>Zhansen Shi, Nicolette Jia Yi Tan, Kate Sangwon Lee, <Strong>Shaoyu Cai</Strong>, and Eng Tat Khoo</>
        ),
        venue: 'Proceedings of the 2025 International Conference on Information Technology for Social Good (GoodIT 2025). ACM New York, USA, 79-89.',
        links: [],
      },
      {
        title: 'From Beeping Machines to Caring Companions: Redesigning Social Robots Through Reflective Ethnography in Elderly Care Work',
        authors: (
          <>Xinpeng Liu, Haosu Xu, Yiming Luo, and <Strong>Shaoyu Cai</Strong></>
        ),
        venue: 'Proceedings of the ACM on Human-Computer Interaction 9(7), 1-29. CSCW 2025.',
        award: <>🏆 Best Paper Honorable Mentions — CSCW 2025</>,
        links: [],
      },
      {
        title: 'From Routes to Ratings: Challenges and Strategies in Food Delivery Work',
        authors: (
          <>Haosu Xu, Yiming Luo, Yihong Wang, Ding Wang, Yushan Pan, and <Strong>Shaoyu Cai</Strong></>
        ),
        venue: 'Computer Supported Cooperative Work (CSCW) 34, no. 3 (2025): 911-948.',
        links: [],
      },
      {
        title: 'VirCHEW Reality: On-Face Kinesthetic Feedback for Enhancing Food-Intake Experience in Virtual Reality',
        authors: (
          <>Qingqin Liu, Ziqi Fang, Jiayi Wu, <Strong>Shaoyu Cai</Strong>, Jianhui Yan, Tiande Mo, Shuk Ching Chan, and Kening Zhu</>
        ),
        venue: 'SIGGRAPH 2025 Conference Papers, pp. 1-12. 2025.',
        award: <>🏆 Top 10 Technical Papers Fast Forward — SIGGRAPH 2025</>,
        links: [],
      },
      {
        title: 'HawkerVerse: Crafting Immersive Singapore Hawker Heritage Experiences through Multisensory Virtual Reality and Large Language Models',
        authors: (
          <>Quanhao Gan, Tao Lin, Eng Tat Khoo, Natalie Pang, and <Strong>Shaoyu Cai</Strong></>
        ),
        venue: 'Adjunct Proceedings of the 2025 International Conference on Human-Engaged Computing, pp. 1-4. 2025.',
        award: <>🏆 Best Demo Honorable Mentioned Award — ICHEC 2025</>,
        links: [],
      },
      {
        title: 'ChewBit: Enhancing Haptic Feedback with an On-Face Pneumatic Interface for Realistic Food Texture in VR',
        authors: (
          <>Qingqin Liu, Ziqi Fang, Jiayi Wu, <Strong>Shaoyu Cai</Strong>, Jianhui Yan, Tiande Mo, Shuk Ching Chan, and Kening Zhu</>
        ),
        venue: 'Proceedings of the SIGGRAPH Asia 2025 Emerging Technologies, pp. 1-3. 2025.',
        award: <>🏆 Best Audience Choice Award — SIGGRAPH Asia 2025 Emerging Technologies</>,
        links: [],
      },
      {
        title: 'Wearable Haptic Devices for Modulating Perceived Roughness of Physical Surfaces in Real-Time Simulation in Mixed Reality Environments',
        authors: (
          <>Kening Zhu, Xinge Yu, <Strong>Shaoyu Cai</Strong>, Haichen Gao, and Qi Zhang</>
        ),
        venue: 'U.S. Patent No. 12,282,600. 22 April 2025.',
        links: [],
      },
    ],
  },
  {
    year: 2024,
    papers: [
      {
        title: 'ThermOuch: A Wearable Thermo-Haptic Device for Inducing Pain Sensation in Virtual Reality through Thermal Grill Illusion',
        authors: (
          <>Haichen Gao, <Strong>Shaoyu Cai</Strong>, Yuhong Wu, and Kening Zhu</>
        ),
        venue: 'SIGGRAPH Asia 2024 Conference Papers, pp. 1-12. 2024.',
        links: [],
      },
      {
        title: 'ViboPneumo: A Vibratory-Pneumatic Finger-Worn Haptic Device for Altering Perceived Texture Roughness in Mixed Reality',
        authors: (
          <><Strong>Shaoyu Cai</Strong>, Zhenlin Chen, Haichen Gao, Ya Huang, Qi Zhang, Xinge Yu, and Kening Zhu</>
        ),
        venue: 'IEEE Transactions on Visualization & Computer Graphics. 2024.',
        links: [],
      },
    ],
  },
  {
    year: 2023,
    papers: [
      {
        title: 'Skin-integrated Multimodal Haptic Interface for Immersive Tactile Feedback',
        authors: (
          <>Ya Huang, Jingkun Zhou, Pingchuan Ke, Xu Guo, Chunki Yiu, Kuanming Yao, <Strong>Shaoyu Cai</Strong>, ..., Zhaoqian Xie, Kening Zhu, and Xinge Yu</>
        ),
        venue: 'Nature Electronics 6, no. 12 (2023): 1020-1031.',
        links: [],
      },
      {
        title: 'Comparing Perceptual Thresholds of Size Perception under Different Distances in Augmented Reality',
        authors: (
          <>Liwen Wang and <Strong>Shaoyu Cai</Strong></>
        ),
        venue: '2023 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct).',
        links: [],
      },
      {
        title: 'Perceptual Thresholds of Visual Size Discrimination in Augmented and Virtual Reality',
        authors: (
          <>Liwen Wang, <Strong>Shaoyu Cai</Strong>, and Christian Sandor</>
        ),
        venue: 'Computers & Graphics, vol. 117, pp. 105-113, Dec. 2023.',
        links: [],
      },
      {
        title: 'Leg-Based Wearable System with Propeller-Based Force Feedback for Walking in Fluids in VR',
        authors: (
          <>Kening Zhu, Pingchuan Ke, <Strong>Shaoyu Cai</Strong>, and Haichen Gao</>
        ),
        venue: 'U.S. Patent No. 11,662,825. 30 May 2023.',
        links: [],
      },
    ],
  },
  {
    year: 2022,
    papers: [
      {
        title: 'PropelWalker: A Leg-based Wearable System with Propeller-based Force Feedback for Walking in Fluids in VR',
        authors: (
          <>Pingchuan Ke, <Strong>Shaoyu Cai</Strong>, Haichen Gao, and Kening Zhu</>
        ),
        venue: 'IEEE Transactions on Visualization and Computer Graphics, 29(12), 5149-5164. 2022.',
        links: [],
      },
      {
        title: 'Multi-modal Transformer-based Tactile Signal Generation for Haptic Texture Simulation of Materials in Virtual and Augmented Reality',
        authors: (
          <><Strong>Shaoyu Cai</Strong> and Kening Zhu</>
        ),
        venue: '2022 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct).',
        links: [],
      },
      {
        title: 'GAN-based Image-to-Friction Generation for Tactile Simulation of Fabric Material',
        authors: (
          <><Strong>Shaoyu Cai</Strong>, Lu Zhao, Yuki Ban, Takuji Narumi, Yue Liu, and Kening Zhu</>
        ),
        venue: 'Computers & Graphics, vol. 102, pp. 460-473, Feb. 2022.',
        links: [],
      },
    ],
  },
  {
    year: 2021,
    papers: [
      {
        title: 'Visual-Tactile Cross-Modal Data Generation using Residue-Fusion GAN with Feature-Matching and Perceptual Losses',
        authors: (
          <><Strong>Shaoyu Cai</Strong>, Kening Zhu, Yuki Ban, and Takuji Narumi</>
        ),
        venue: 'IEEE Robotics and Automation Letters (RA-L), vol. 6, no. 4, pp. 7525-7532.',
        links: [],
      },
      {
        title: 'Weighted Walking: Propeller-based On-leg Force Simulation of Walking in Fluid Materials in VR',
        authors: (
          <>Pingchuan Ke, <Strong>Shaoyu Cai</Strong>, Lantian Xu, and Kening Zhu</>
        ),
        venue: 'SIGGRAPH Asia 2021 Emerging Technologies. ACM, New York, NY, USA, Article 19, pp. 1-2. 2021.',
        links: [],
      },
    ],
  },
  {
    year: 2020,
    papers: [
      {
        title: 'FrictGAN: Frictional Signal Generation from Fabric Texture Images using Generative Adversarial Network',
        authors: (
          <><Strong>Shaoyu Cai</Strong>, Yuki Ban, Takuji Narumi, and Kening Zhu</>
        ),
        venue: 'International Conference on Artificial Reality and Telexistence & Eurographics Symposium on Virtual Environments, pp. 11-15. The Eurographics Association, 2020.',
        award: <>🏆 Best Paper Audience Choice Award — ICAT-EGVE 2020</>,
        links: [],
      },
      {
        title: 'ThermAirGlove: A Pneumatic Glove for Thermal Perception and Material Identification in Virtual Reality',
        authors: (
          <><Strong>Shaoyu Cai</Strong>, Pingchuan Ke, Takuji Narumi, and Kening Zhu</>
        ),
        venue: '2020 IEEE Conference on Virtual Reality and 3D User Interfaces (VR), pp. 248-257. IEEE VR, 2020.',
        links: [],
      },
    ],
  },
  {
    year: 2019,
    papers: [
      {
        title: 'A Sense of Ice and Fire: Exploring Thermal Feedback with Multiple Thermoelectric-Cooling Elements on a Smart Ring',
        authors: (
          <>Kening Zhu, Simon Perrault, Taizhou Chen, <Strong>Shaoyu Cai</Strong>, and Roshan Lalintha Peiris</>
        ),
        venue: 'International Journal of Human-Computer Studies 130 (2019): 234-247.',
        links: [],
      },
      {
        title: 'Demonstration of ThermAirGlove: A Pneumatic Glove for Material Perception in Virtual Reality through Thermal and Force Feedback',
        authors: (
          <><Strong>Shaoyu Cai</Strong>, Pingchuan Ke, Shanshan Jiang, Takuji Narumi, and Kening Zhu</>
        ),
        venue: 'SIGGRAPH Asia 2019 Emerging Technologies, pp. 11-12. 2019.',
        links: [],
      },
      {
        title: 'Embodied Weather: Promoting Public Understanding of Extreme Weather Through Immersive Multi-Sensory Virtual Reality',
        authors: (
          <>Pingchuan Ke, Kai-Ning Keng, Shanshan Jiang, <Strong>Shaoyu Cai</Strong>, Zhiyi Rong, and Kening Zhu</>
        ),
        venue: 'The 17th International Conference on Virtual-Reality Continuum and its Applications in Industry, pp. 1-2. 2019.',
        links: [],
      },
    ],
  },
  {
    year: 2018,
    papers: [
      {
        title: 'HapTwist: Creating Interactive Haptic Proxies in Virtual Reality Using Low-cost Twistable Artefacts',
        authors: (
          <>Kening Zhu, Taizhou Chen, <Strong>Shaoyu Cai</Strong>, Feng Han, and Yi-Shiun Wu</>
        ),
        venue: 'SIGGRAPH Asia 2018 Virtual & Augmented Reality, pp. 1-2. 2018.',
        links: [],
      },
    ],
  },
]
