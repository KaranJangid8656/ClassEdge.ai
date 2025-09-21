"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="5,3 19,12 5,21 5,3" />
  </svg>
)

const RefreshCw = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23,4 23,10 17,10" />
    <polyline points="1,20 1,14 7,14" />
    <path d="20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>
)

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
)

const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History", "Geography"]
const teachers = ["Dr. Smith", "Prof. Johnson", "Ms. Davis", "Mr. Wilson", "Dr. Brown", "Ms. Taylor", "Mr. Anderson"]
const rooms = ["Room 101", "Room 102", "Lab 1", "Lab 2", "Auditorium", "Library", "Computer Lab"]

export default function DemoPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationStep, setGenerationStep] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const generateTimetable = () => {
    setIsGenerating(true)
    setGenerationStep(0)
    setShowResult(false)

    const steps = [
      "Analyzing constraints...",
      "Optimizing schedules...",
      "Resolving conflicts...",
      "Finalizing timetable...",
    ]

    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep < steps.length - 1) {
        currentStep++
        setGenerationStep(currentStep)
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setIsGenerating(false)
          setShowResult(true)
        }, 1000)
      }
    }, 1500)
  }

  const resetDemo = () => {
    setIsGenerating(false)
    setGenerationStep(0)
    setShowResult(false)
  }

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
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
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
            Interactive <span className="text-blue-600">Demo</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Experience the power of AI-driven timetable generation. Watch how ClassEdge creates optimal schedules in
            minutes, not days.
          </p>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="px-4 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Input Panel */}
            <div className="space-y-6">
              <Card className="border-2 border-gray-100">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-gray-900">School Configuration</CardTitle>
                  <p className="text-sm text-gray-600">Sample data for demonstration purposes</p>
                </CardHeader>
                <CardContent className="p-6 pt-0 space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Subjects ({subjects.length})</h3>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((subject, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Teachers ({teachers.length})</h3>
                    <div className="flex flex-wrap gap-2">
                      {teachers.map((teacher, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-800">
                          {teacher}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Rooms ({rooms.length})</h3>
                    <div className="flex flex-wrap gap-2">
                      {rooms.map((room, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                          {room}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Constraints</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>No teacher conflicts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Room capacity limits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Subject distribution</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Teacher availability</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button
                  onClick={generateTimetable}
                  disabled={isGenerating}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Generate Timetable
                    </>
                  )}
                </Button>
                <Button onClick={resetDemo} variant="outline" className="bg-transparent">
                  Reset
                </Button>
              </div>
            </div>

            {/* Output Panel */}
            <div className="space-y-6">
              {/* Generation Progress */}
              {isGenerating && (
                <Card className="border-2 border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">AI Generation in Progress</h3>
                    <div className="space-y-3">
                      {[
                        "Analyzing constraints...",
                        "Optimizing schedules...",
                        "Resolving conflicts...",
                        "Finalizing timetable...",
                      ].map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full ${
                              index <= generationStep
                                ? "bg-blue-600"
                                : index === generationStep + 1
                                  ? "bg-blue-300 animate-pulse"
                                  : "bg-gray-300"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              index <= generationStep ? "text-gray-900 font-medium" : "text-gray-500"
                            }`}
                          >
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Generated Timetable */}
              {showResult && (
                <Card className="border-2 border-green-200 bg-green-50">
                  <CardHeader className="p-6">
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      Timetable Generated Successfully!
                    </CardTitle>
                    <p className="text-sm text-gray-600">Generated in 6.2 seconds with 0 conflicts</p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-4">Sample Schedule - Class 10A</h4>
                      <div className="grid grid-cols-6 gap-2 text-xs">
                        <div className="font-medium text-gray-500">Time</div>
                        <div className="font-medium text-gray-500">Mon</div>
                        <div className="font-medium text-gray-500">Tue</div>
                        <div className="font-medium text-gray-500">Wed</div>
                        <div className="font-medium text-gray-500">Thu</div>
                        <div className="font-medium text-gray-500">Fri</div>

                        <div className="text-gray-600">9:00</div>
                        <div className="bg-blue-100 text-blue-800 p-2 rounded text-center">Math</div>
                        <div className="bg-green-100 text-green-800 p-2 rounded text-center">Physics</div>
                        <div className="bg-purple-100 text-purple-800 p-2 rounded text-center">Chemistry</div>
                        <div className="bg-blue-100 text-blue-800 p-2 rounded text-center">Math</div>
                        <div className="bg-orange-100 text-orange-800 p-2 rounded text-center">English</div>

                        <div className="text-gray-600">10:00</div>
                        <div className="bg-green-100 text-green-800 p-2 rounded text-center">Physics</div>
                        <div className="bg-orange-100 text-orange-800 p-2 rounded text-center">English</div>
                        <div className="bg-blue-100 text-blue-800 p-2 rounded text-center">Math</div>
                        <div className="bg-purple-100 text-purple-800 p-2 rounded text-center">Chemistry</div>
                        <div className="bg-green-100 text-green-800 p-2 rounded text-center">Physics</div>

                        <div className="text-gray-600">11:00</div>
                        <div className="bg-yellow-100 text-yellow-800 p-2 rounded text-center">Biology</div>
                        <div className="bg-blue-100 text-blue-800 p-2 rounded text-center">Math</div>
                        <div className="bg-orange-100 text-orange-800 p-2 rounded text-center">English</div>
                        <div className="bg-yellow-100 text-yellow-800 p-2 rounded text-center">Biology</div>
                        <div className="bg-purple-100 text-purple-800 p-2 rounded text-center">Chemistry</div>

                        <div className="text-gray-600">12:00</div>
                        <div className="bg-gray-100 text-gray-600 p-2 rounded text-center col-span-5">Lunch Break</div>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <Button className="bg-green-600 hover:bg-green-700 text-sm">Download PDF</Button>
                      <Button variant="outline" className="text-sm bg-transparent">
                        Export Excel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Default State */}
              {!isGenerating && !showResult && (
                <Card className="border-2 border-gray-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ready to Generate</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Click "Generate Timetable" to see our AI create an optimized schedule for your school.
                    </p>
                    <p className="text-xs text-gray-500">
                      This demo uses sample data. Real implementation supports custom constraints and requirements.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="px-4 py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What You Just Experienced</h2>
            <p className="text-lg text-gray-600">Key features demonstrated in this interactive demo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-2 border-gray-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Generation</h3>
                <p className="text-sm text-gray-600">
                  Advanced algorithms analyze constraints and generate optimal timetables in seconds, not hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Conflict Resolution</h3>
                <p className="text-sm text-gray-600">
                  Automatically detects and resolves scheduling conflicts, ensuring no teacher or room double-booking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple Export Options</h3>
                <p className="text-sm text-gray-600">
                  Export generated timetables in PDF, Excel, or integrate directly with your school management system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 md:py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready for the Real Thing?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            This demo shows just a fraction of ClassEdge's capabilities. Experience the full platform with your own
            data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto bg-transparent"
              >
                Schedule Personal Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
