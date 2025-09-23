import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu } from "lucide-react"

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="14,2 L6,2 C4.9,2 4,2.9 4,4 L4,20 C4,21.1 4.9,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,8 L14,2 Z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
)

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
)

const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="5,3 19,12 5,21 5,3" />
  </svg>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
            <header className="static w-full bg-white px-4 py-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <div className="relative w-28 h-28">
                <Image 
                  src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758392290/classedge_logo_dewaof.jpg"
                  alt="ClassEdge Logo"
                  fill
                  sizes="(max-width: 768px) 112px, 112px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-blue-600 font-medium text-base">
                Home
              </Link>
              <Link href="/admin" className="text-gray-600 hover:text-gray-900 text-base font-normal">Dashboard</Link>
              <Link href="#resources" className="text-gray-600 hover:text-gray-900 text-base font-normal">
                Resources
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 text-base font-normal">
              Login
            </Link>
            <Link href="/auth/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-base px-6 cursor-pointer">Get Started</Button>
            </Link>
          </div>

          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-start justify-center px-4 py-4 md:py-6 text-center">
        <div className="max-w-4xl mx-auto pt-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-3 md:mb-4 text-balance font-graphie leading-tight relative">
            Timetabling <span className="text-blue-600 relative">made simple
              <div className="absolute -top-14 -right-20 w-32 h-32">
                <Image
                  src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758437291/logo_ce-removebg-preview_pyb8pp.png"
                  alt="ClassEdge Logo"
                  fill
                  sizes="(max-width: 768px) 128px, 128px"
                  className="object-contain opacity-100"
                  priority
                />
              </div>
            </span>
            <br />
            for everyone
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto text-pretty px-4 font-graphie">
            AI-powered timetable generation aligned with NEP 2020.
Smarter schedules, fewer conflicts, better learning
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/auth/register">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 w-full sm:w-auto cursor-pointer">
                Get Started
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-gray-600 flex items-center gap-2 w-full sm:w-auto cursor-pointer">
              <Play className="w-4 h-4" />
              Watch video
            </Button>
          </div>
        </div>
      </section>


      {/* Blue Feature Section */}
      <section className="px-4 py-12 md:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
              Generate timetables in minutes, not days.
            </h2>
            <p className="text-lg md:text-xl text-blue-100">Everything you need to manage your timetable.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">NEP 2020 Aligned</h3>
                <p className="text-blue-100 text-sm md:text-base">
                  Designed to handle FYUP, B.Ed., M.Ed., ITEP, and professional courses like MBA, Engineering, Law, and skill-based programs — all aligned with NEP 2020
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Easy to Configure</h3>
                <p className="text-blue-100 text-sm md:text-base">
                  Flexible setup that adapts to electives, course credits, faculty availability, and NEP 2020 guidelines without complexity.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Seamless Integration</h3>
                <p className="text-blue-100 text-sm md:text-base">
                  Easily connects with student, faculty, and academic management systems, offering exports in PDF, Excel, and more.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Smart Generation</h3>
                <p className="text-blue-100 text-sm md:text-base">
                  AI-driven timetable creation that eliminates conflicts and ensures optimized scheduling for students, faculty, and classrooms.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <Card className="bg-white shadow-2xl">
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">John Smith</h4>
                      <Badge variant="secondary" className="text-xs">
                        Teacher
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-xs md:text-sm text-gray-600">Mathematics</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-xs md:text-sm text-gray-600">Physics</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-xs md:text-sm text-gray-600">Chemistry</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h5 className="font-medium text-gray-900 mb-3 text-sm md:text-base">
                        Periods of availability (maximum)
                      </h5>
                      <div className="grid grid-cols-7 gap-1 text-xs">
                        <div className="text-center font-medium text-gray-500">Mon</div>
                        <div className="text-center font-medium text-gray-500">Tue</div>
                        <div className="text-center font-medium text-gray-500">Wed</div>
                        <div className="text-center font-medium text-gray-500">Thu</div>
                        <div className="text-center font-medium text-gray-500">Fri</div>
                        <div className="text-center font-medium text-gray-500">Sat</div>
                        <div className="text-center font-medium text-gray-500">Sun</div>

                        {Array.from({ length: 35 }, (_, i) => (
                          <div
                            key={i}
                            className={`h-4 md:h-6 rounded ${Math.random() > 0.3 ? "bg-red-100" : "bg-gray-100"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-gray-900 mb-4">
              School timetable in 3 easy steps
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Life is simple after enough — generating the timetable shouldn't be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 relative mb-6">
                <Image
                  src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758450510/instructions_7935793_agwh4c.png"
                  alt="Input Data Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-left">Input data</h3>
              <p className="text-gray-600 text-sm md:text-base text-left">
                Users need to provide key details such as student electives, credits, faculty availability, and room capacity.
Accurate inputs ensure the system generates conflict-free and optimized timetables.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 relative mb-6">
                <Image
                  src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758450728/schedule_ruq6jr.png"
                  alt="Generate Timetable Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-left">Generate the timetable</h3>
              <p className="text-gray-600 text-sm md:text-base text-left">
                Our AI-powered algorithm will automatically generate the optimal timetable. 
                Our smart algorithm is designed over 15 years of research and experience.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 relative mb-6">
                <Image
                  src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758451550/file_kzu0d2.png"
                  alt="Review and Export Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-left">Review and export</h3>
              <p className="text-gray-600 text-sm md:text-base text-left">
                Review the generated timetable and make any necessary adjustments. Export in multiple formats including
                PDF, Excel, image.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
                      <div className="grid grid-cols-7 gap-1 md:gap-2 text-xs">
                        <div className="font-medium text-gray-500">Mon</div>
                        <div className="font-medium text-gray-500">Tue</div>
                        <div className="font-medium text-gray-500">Wed</div>
                        <div className="font-medium text-gray-500">Thu</div>
                        <div className="font-medium text-gray-500">Fri</div>
                        <div className="font-medium text-gray-500">Sat</div>
                        <div className="font-medium text-gray-500">Sun</div>

                        {Array.from({ length: 28 }, (_, i) => (
                          <div
                            key={i}
                            className={`h-6 md:h-8 rounded text-center flex items-center justify-center text-xs ${
                              i % 7 === 5 || i % 7 === 6
                                ? "bg-gray-100"
                                : Math.random() > 0.5
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {i % 7 < 5 && Math.random() > 0.3 ? (i % 2 === 0 ? "Math" : "Eng") : ""}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">Weekly Schedule</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-xs md:text-sm">Mathematics - Room 101</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-xs md:text-sm">English - Room 205</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-orange-50 rounded">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <span className="text-xs md:text-sm">Science - Lab 1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Platform Features Section */}
      <section id="features" className="px-4 py-12 md:py-20 bg-white -scroll-mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Complete Timetabling Platform
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Everything you need to manage academic scheduling across all stakeholders
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Student Portal */}
            <Link href="/student">
              <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <div className="w-12 h-12 relative mb-4">
                    <Image
                      src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758455480/website_u1jxtu.png"
                      alt="Student Portal Icon"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Student Portal</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Profile dashboard with credits enrolled</li>
                    <li>• Elective/course selection forms</li>
                    <li>• View/download timetables (PDF/Excel)</li>
                    <li>• Notifications for updates & conflicts</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Faculty Portal */}
            <Link href="/faculty">
              <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <div className="w-12 h-12 relative mb-4">
                    <Image
                      src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758455684/content-creation_sa46w1.png"
                      alt="Faculty Portal Icon"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Faculty Portal</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Faculty profile & workload management</li>
                    <li>• Input availability & preferences</li>
                    <li>• View assigned schedules</li>
                    <li>• Expertise & capacity tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Admin Dashboard */}
            <Link href="/admin">
              <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <div className="w-12 h-12 relative mb-4">
                    <Image
                      src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758455545/skills_n2fajb.png"
                      alt="Admin Dashboard Icon"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Admin Dashboard</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Manage curriculum structure</li>
                    <li>• Faculty & room capacity management</li>
                    <li>• Generate semester-wise timetables</li>
                    <li>• Multi-program support (B.Ed., M.Ed., FYUP)</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Conflict Resolution */}
            <Link href="/generator">
              <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <div className="w-12 h-12 relative mb-4">
                    <Image
                      src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758455913/ai_1_v8bk7w.png"
                      alt="AI Generator Icon"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">AI Generator</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• AI-powered timetable generation</li>
                    <li>• Multiple optimization algorithms</li>
                    <li>• Real-time conflict detection</li>
                    <li>• Scenario simulation & analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Reports */}
            <Link href="/reports">
              <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <div className="w-12 h-12 relative mb-4">
                    <Image
                      src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758455973/evaluation_svbluk.png"
                      alt="Reports & Export Icon"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Reports & Export</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• PDF/Excel export capabilities</li>
                    <li>• Academic Management integration</li>
                    <li>• Comprehensive reporting suite</li>
                    <li>• NEP 2020 alignment tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* User Management */}
            <Link href="/users">
              <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <div className="w-12 h-12 relative mb-4">
                    <Image
                      src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758456036/user_cnqjro.png"
                      alt="User Management Icon"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">User Management</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Role-based access control</li>
                    <li>• User profile management</li>
                    <li>• Authentication & security</li>
                    <li>• Activity monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-12 md:py-20 bg-gray-50 -scroll-mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Simple, transparent <span className="text-blue-600">pricing</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Choose the perfect plan for your institution. Start free and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-gray-100 relative">
              <CardHeader className="text-center p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Free Plan</CardTitle>
                <p className="text-gray-600 text-sm mb-4">Perfect for Students & Faculty</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">Free</span>
                </div>
                <p className="text-xs text-gray-500">Completely free access for all students and faculty members</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">AI-generated timetables</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Elective/course management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">PDF/Excel export</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Basic conflict detection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Access to personal dashboards</span>
                  </li>
                </ul>
                <Link href="/auth/register">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 cursor-pointer">Start Using Free</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Institutional Plan */}
            <Card className="border-2 border-blue-500 relative shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Institutional Plan</CardTitle>
                <p className="text-gray-600 text-sm mb-4">Perfect for Schools & Colleges</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">Custom</span>
                </div>
                <p className="text-xs text-gray-500">For institutions that want advanced features and admin control</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Multi-program timetable generation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Scenario simulation & future semester planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">NEP 2020 alignment tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">ERP/LMS integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Priority support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">Contact Us / Start Trial</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="relative w-24 h-24">
                <Image
                  src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758392290/classedge_logo_dewaof.jpg"
                  alt="ClassEdge Logo"
                  fill
                  sizes="(max-width: 768px) 96px, 96px"
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm">
                Making academic scheduling smarter and more efficient for educational institutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-gray-900 text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-600 hover:text-gray-900 text-sm">
                    Request Demo
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/student" className="text-gray-600 hover:text-gray-900 text-sm">
                    For Students
                  </Link>
                </li>
                <li>
                  <Link href="/faculty" className="text-gray-600 hover:text-gray-900 text-sm">
                    For Faculty
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="text-gray-600 hover:text-gray-900 text-sm">
                    For Administrators
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-gray-600 hover:text-gray-900 text-sm">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@classedge.com" className="text-gray-600 hover:text-gray-900 text-sm">
                    ClassEdge@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917357701049" className="text-gray-600 hover:text-gray-900 text-sm">
                    +91 84317701
                  </a>
                </li>
                <li className="text-gray-600 text-sm">
                  Hebbal,
                  <br />
                  Bengaluru, Karnataka 
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} ClassEdge. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
