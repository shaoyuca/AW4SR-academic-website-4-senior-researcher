import CourseBlock from '@/components/courses/CourseBlock'
import { COURSES } from '@/content/courses'

export default function CoursesPage() {
  return (
    <main className="w-full px-10 pt-6 pb-section">
      <h1 className="text-h1 font-bold font-serif mb-8">Courses</h1>

      <div>
        {COURSES.map((course) => (
          <CourseBlock key={course.title} course={course} />
        ))}
      </div>
    </main>
  )
}
