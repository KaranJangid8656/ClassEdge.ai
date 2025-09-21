import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
  </svg>
)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">ClassEdge</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">
              Resources
            </Link>
            <Link href="/about" className="text-blue-600 font-medium">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-gray-600 hidden sm:inline-flex">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm px-3 py-2 md:px-4 md:py-2">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-balance">
            Revolutionizing <span className="text-blue-600">Academic Scheduling</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            We're on a mission to transform how educational institutions manage their timetables, making complex
            scheduling simple and efficient.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower educational institutions with intelligent timetabling solutions that eliminate scheduling
                  conflicts, optimize resource utilization, and support modern educational frameworks like NEP 2020. We
                  believe that administrators should focus on education, not wrestling with complex scheduling puzzles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To become the global standard for academic timetabling, enabling every educational institution
                  worldwide to create optimal schedules effortlessly. We envision a future where AI-powered scheduling
                  supports diverse learning models and adapts to the evolving needs of modern education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600">How we started and where we're going</p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-24 flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2018
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Beginning</h3>
                <p className="text-gray-600">
                  Founded by a team of educators and technologists who experienced firsthand the challenges of manual
                  timetabling. After spending countless hours trying to resolve scheduling conflicts at their own
                  institutions, they decided there had to be a better way.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-24 flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2020
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Innovation</h3>
                <p className="text-gray-600">
                  Launched our first AI-powered timetabling algorithm, reducing generation time from days to minutes.
                  Our breakthrough came from combining genetic algorithms with machine learning to handle complex
                  constraint satisfaction problems.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-24 flex-shrink-0">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2022
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NEP 2020 Alignment</h3>
                <p className="text-gray-600">
                  Became the first timetabling platform to fully support NEP 2020 guidelines, helping Indian educational
                  institutions transition to the new framework with features for multidisciplinary learning and flexible
                  course structures.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-24 flex-shrink-0">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2024
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Expansion</h3>
                <p className="text-gray-600">
                  Serving over 3,000 institutions worldwide with 36,000+ timetables generated. Our platform now supports
                  multiple educational systems and continues to evolve with the changing needs of modern education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-12 md:py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-blue-100">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">User-Centric</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Every feature we build starts with understanding our users' real challenges. We prioritize simplicity
                and effectiveness over complexity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                We continuously push the boundaries of what's possible in academic scheduling, leveraging cutting-edge
                AI and machine learning technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                We're committed to delivering the highest quality solutions, with reliability and performance that
                educational institutions can depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the people behind ClassEdge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-2 border-gray-100 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">DR</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Dr. Rajesh Kumar</h3>
                <p className="text-sm text-blue-600 mb-3">CEO & Co-Founder</p>
                <p className="text-xs text-gray-600">
                  Former Dean of Computer Science with 20+ years in educational technology and AI research.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">PS</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Priya Sharma</h3>
                <p className="text-sm text-blue-600 mb-3">CTO & Co-Founder</p>
                <p className="text-xs text-gray-600">
                  Machine learning expert with expertise in optimization algorithms and educational software systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">AM</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Arjun Mehta</h3>
                <p className="text-sm text-blue-600 mb-3">Head of Product</p>
                <p className="text-xs text-gray-600">
                  Product strategist with deep understanding of educational workflows and user experience design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 md:py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Ready to transform your institution's scheduling process? Let's build the future of education together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
