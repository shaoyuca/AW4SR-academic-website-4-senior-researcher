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
  publication?: string  // paste the citation text as-is (Google Scholar / any style)
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {

  // ── project-alpha ────────────────────────────────────────────
  'project-alpha': {
    description: (
      <>
        FlexForm is a shape-changing interface that allows physical objects to
        dynamically reconfigure their geometry in response to computational input.
        By embedding distributed actuators within a compliant polymer substrate,
        the system enables smooth, continuous deformation across a programmable
        surface. Potential applications span{' '}
        <InlineLink href="https://en.wikipedia.org/wiki/Haptic_technology" external>
          haptic feedback
        </InlineLink>
        , assistive devices, and ambient information displays. This work was
        supported by a research grant from the National Research Foundation.
      </>
    ),
    media: [
      // Image + Image
      {
        type: 'image',
        src: 'https://picsum.photos/seed/flexform-1/800/450',
        alt: 'FlexForm prototype showing deformation sequence',
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/flexform-2/800/450',
        alt: 'Close-up of the actuator array embedded in the substrate',
      },
      // Image + Video
      {
        type: 'image',
        src: 'https://picsum.photos/seed/flexform-3/800/450',
        alt: 'User study session with FlexForm device',
      },
      {
        type: 'video',
        // Replace with your actual YouTube embed URL:
        // open the video → Share → Embed → copy the src="…" URL
        // Example below uses Big Buck Bunny (Blender Foundation, CC BY 3.0)
        embedUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
        title: 'FlexForm — project demonstration video',
      },
    ],
    publication: 'Chen, Alice, Bob Smith, Carol Williams, and David Lee. "FlexForm: Continuous Shape Deformation for Programmable Physical Interfaces." In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI \'26). ACM, New York, NY, USA, 2026.',
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
