export function withBasePath(src: string) {
  if (!src.startsWith('/') || src.startsWith('//')) {
    return src
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return basePath ? `${basePath}${src}` : src
}
