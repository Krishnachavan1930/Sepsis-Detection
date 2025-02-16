import EducationalPrograms from "../components/educational-programs"
import VocationalEdTech from "../components/vocational-ed-tech"
import SkillingPrograms from "../components/skilling-programs"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Educational Services</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Discover comprehensive educational and vocational training programs designed to empower your future
        </p>

        <div className="space-y-32">
          <EducationalPrograms />
          <VocationalEdTech />
          <SkillingPrograms />
        </div>
      </div>
    </main>
  )
}

