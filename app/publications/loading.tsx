import { Skeleton } from '@/components/ui/Skeleton'

function PaperSkeleton() {
  return (
    <div className="py-6 flex flex-col gap-2">
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-4 w-3/5" />
      <Skeleton className="h-4 w-full" />
      <div className="flex gap-4 mt-1">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
  )
}

export default function PublicationsLoading() {
  return (
    <main className="max-w-content mx-auto px-10 pt-6 pb-section">
      <Skeleton className="h-10 w-56 mb-10" />

      <Skeleton className="h-7 w-16 mb-1" />
      <PaperSkeleton />
      <div className="border-t border-gray-100 dark:border-gray-800" />
      <PaperSkeleton />

      <Skeleton className="h-7 w-16 mb-1 mt-10" />
      <PaperSkeleton />
    </main>
  )
}
