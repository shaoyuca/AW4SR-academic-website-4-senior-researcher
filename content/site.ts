// ================================================================
//  SITE-WIDE SETTINGS
//  This is the main configuration file. Edit values here to
//  customise your name, navigation bar, and add new pages.
// ================================================================

/**
 * YOUR NAME — shown in the top-left corner of every page.
 */
export const PROFESSOR_NAME = 'Shaoyu Cai'

/**
 * Shown in the browser tab and search-engine results.
 *
 * Recommended format: "Lab Name | Institution"
 * Example: "HCI Lab | NUS School of Computing"
 */
export const SITE_TITLE = 'Academic Website'

/**
 * One-sentence description used by search engines and link previews.
 */
export const SITE_DESCRIPTION = 'Personal academic website'

/**
 * NAVIGATION BAR LINKS
 *
 * Controls which links appear in the top navigation bar.
 * - Change `label` to rename a link (the page URL stays the same).
 * - Reorder items by moving lines up or down.
 * - Delete a line to hide a page from the nav (the page still exists).
 * - To add a BUILT-IN page back, just un-delete its line.
 * - To add a BRAND-NEW page, see CUSTOM_PAGES below.
 */
export const NAV_LINKS: { href: string; label: string }[] = [
  { href: '/about',         label: 'About' },
  { href: '/news',          label: 'News' },
  { href: '/portfolio',     label: 'Portfolio' },
  { href: '/publications',  label: 'Publications' },
  { href: '/team',          label: 'Team' },
  { href: '/courses',       label: 'Courses' },
  { href: '/opportunities', label: 'Opportunities' },
]

/**
 * CUSTOM PAGES
 *
 * Add a brand-new page without touching any other file:
 *   1. Add an entry below with a unique `slug`, a `title`, and your `content`.
 *   2. Add a matching line to NAV_LINKS above, e.g.:
 *        { href: '/gallery', label: 'Gallery' }
 *
 * The `content` field supports plain text. Use \n for line breaks.
 *
 * Example (uncomment to try):
 *   {
 *     slug: 'gallery',
 *     title: 'Gallery',
 *     content: 'Welcome to my gallery.\n\nMore photos coming soon.',
 *   },
 */
export const CUSTOM_PAGES: { slug: string; title: string; content: string }[] = [
  // Add your custom pages here
]

/**
 * FAVICON (the icon shown in the browser tab)
 *
 * To replace the default globe icon:
 *   1. Convert your logo / portrait to a square image (256 × 256 px recommended).
 *   2. Save it as  public/favicon.ico  (ICO format) or  public/favicon.png.
 *   3. That's it — the browser picks it up automatically on the next page load.
 *
 * Free converters: favicon.io, realfavicongenerator.net
 * No code change is needed here for the favicon.
 */
