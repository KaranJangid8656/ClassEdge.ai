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

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="14,2 L6,2 C4.9,2 4,2.9 4,4 L4,20 C4,21.1 4.9,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,8 L14,2 Z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
)

const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="5,3 19,12 5,21 5,3" />
  </svg>
)

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const Download = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export default function ResourcesPage() {
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
            <Link href="/resources" className="text-blue-600 font-medium">
              Resources
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
            Resources & <span className="text-blue-600">Documentation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Everything you need to get started with ClassEdge. From quick start guides to advanced tutorials.
          </p>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="px-4 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-lg text-gray-600">Get up and running in minutes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Getting Started Guide</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-600 text-sm mb-4">
                  Complete walkthrough of setting up your first timetable with ClassEdge
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Read Guide</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step video guides covering all features and best practices
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Sample Templates</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-600 text-sm mb-4">
                  Download ready-to-use Excel templates for different school types
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Download Templates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="px-4 py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Documentation</h2>
            <p className="text-lg text-gray-600">Comprehensive guides for every aspect of the platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* User Guides */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">User Guides</CardTitle>
                <p className="text-gray-600 text-sm">Step-by-step instructions for all user roles</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Admin Dashboard Guide</span>
                    <Badge variant="secondary" className="text-xs">
                      New
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Faculty Portal Manual</span>
                    <Badge variant="secondary" className="text-xs">
                      Updated
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Student Portal Guide</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Timetable Generation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Documentation */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">API Documentation</CardTitle>
                <p className="text-gray-600 text-sm">Integration guides and API references</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">REST API Reference</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Webhook Integration</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Data Import/Export</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Authentication</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Best Practices</CardTitle>
                <p className="text-gray-600 text-sm">Tips and strategies for optimal results</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Data Preparation Tips</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Constraint Configuration</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">NEP 2020 Compliance</span>
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Performance Optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Troubleshooting</CardTitle>
                <p className="text-gray-600 text-sm">Common issues and solutions</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Common Error Messages</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Data Import Issues</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Generation Failures</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Performance Issues</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Downloads</h2>
            <p className="text-lg text-gray-600">Templates, guides, and tools to help you succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">School Data Template</h3>
                    <p className="text-xs text-gray-500">Excel format</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Pre-formatted Excel template for importing your school's data structure
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">NEP 2020 Guide</h3>
                    <p className="text-xs text-gray-500">PDF format</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive guide to implementing NEP 2020 guidelines in your timetables
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Implementation Checklist</h3>
                    <p className="text-xs text-gray-500">PDF format</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Step-by-step checklist for successful ClassEdge implementation
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="px-4 py-12 md:py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Our support team is here to help you succeed with ClassEdge
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Contact Support
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
