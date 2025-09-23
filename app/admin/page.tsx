"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CalendarIcon,
  Users,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  Clock,
  Settings,
  Download,
  Play,
  RefreshCw,
  Zap,
  Menu,
} from "lucide-react"
import { useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function AdminDashboard() {
  const [generatingTimetable, setGeneratingTimetable] = useState(false)
  const [selectedSemester, setSelectedSemester] = useState("spring-2024")
  const pathname = usePathname()

  // Sample data for demonstration
  const systemStats = {
    totalStudents: 1250,
    totalFaculty: 85,
    totalCourses: 156,
    conflictsResolved: 23,
  }

  const conflicts = [
    {
      id: 1,
      type: "Room Conflict",
      description: "Room 201 double-booked for EDU101 and PSY201",
      severity: "High",
      courses: ["EDU101", "PSY201"],
      time: "Mon 9:00-10:30",
      status: "Pending",
    },
    {
      id: 2,
      type: "Faculty Conflict",
      description: "Dr. Smith assigned to overlapping classes",
      severity: "High",
      courses: ["MATH201", "STAT101"],
      time: "Wed 11:00-12:30",
      status: "Resolved",
    },
    {
      id: 3,
      type: "Capacity Issue",
      description: "EDU301 enrollment exceeds room capacity",
      severity: "Medium",
      courses: ["EDU301"],
      time: "Fri 2:00-3:30",
      status: "Pending",
    },
    {
      id: 4,
      type: "Equipment Conflict",
      description: "Lab equipment needed for two simultaneous classes",
      severity: "Medium",
      courses: ["CHEM101", "PHYS201"],
      time: "Thu 10:00-12:00",
      status: "Resolved",
    },
  ]

  const recentGenerations = [
    {
      id: 1,
      semester: "Spring 2024",
      date: "2024-03-10",
      status: "Completed",
      conflicts: 5,
      efficiency: 94,
    },
    {
      id: 2,
      semester: "Fall 2023",
      date: "2024-01-15",
      status: "Completed",
      conflicts: 8,
      efficiency: 91,
    },
    {
      id: 3,
      semester: "Summer 2024",
      date: "2024-03-08",
      status: "In Progress",
      conflicts: 12,
      efficiency: 87,
    },
  ]

  const rooms = [
    { id: "R201", name: "Room 201", capacity: 50, type: "Lecture Hall", equipment: ["Projector", "Audio System"] },
    { id: "R105", name: "Room 105", capacity: 30, type: "Classroom", equipment: ["Whiteboard", "Computer"] },
    {
      id: "LAB1",
      name: "Science Lab 1",
      capacity: 25,
      type: "Laboratory",
      equipment: ["Lab Equipment", "Safety Systems"],
    },
    { id: "AUD1", name: "Main Auditorium", capacity: 200, type: "Auditorium", equipment: ["Stage", "Audio/Video"] },
  ]

  const [generationStep, setGenerationStep] = useState(0)
  const [generatedTimetable, setGeneratedTimetable] = useState(null)
  const [exporting, setExporting] = useState(false)
  const timetableRef = useRef<HTMLDivElement | null>(null)

  const handleGenerateTimetable = () => {
    setGeneratingTimetable(true)
    setGenerationStep(0)
    
    // Simulate detailed AI generation process with steps
    const steps = [
      "Analyzing course requirements and prerequisites",
      "Processing faculty availability and preferences", 
      "Optimizing room assignments and time slots",
      "Running conflict detection algorithms",
      "Finalizing timetable and generating reports"
    ]
    
    let currentStep = 0
    const stepInterval = setInterval(() => {
      setGenerationStep(currentStep + 1)
      currentStep++
      
      if (currentStep >= steps.length) {
        clearInterval(stepInterval)
        setGeneratingTimetable(false)
        setGeneratedTimetable({
          id: Date.now(),
          semester: selectedSemester,
          generatedAt: new Date().toISOString(),
          conflicts: Math.floor(Math.random() * 5),
          efficiency: 90 + Math.floor(Math.random() * 10)
        })
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Same as Landing Page */}
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
                <Link href="/" className={pathname === '/' ? "text-blue-600 font-medium text-base" : "text-gray-600 hover:text-gray-900 text-base font-normal"}>
                  Home
                </Link>
                <Link href="/dashboard" className={(pathname.startsWith('/dashboard') || pathname.startsWith('/admin')) ? "text-blue-600 font-medium text-base" : "text-gray-600 hover:text-gray-900 text-base font-normal"}>
                  Dashboard
                </Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            Manage timetables, resolve conflicts, and oversee the entire scheduling system
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">{systemStats.totalStudents.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Faculty Members</p>
                  <p className="text-2xl font-bold text-gray-900">{systemStats.totalFaculty}</p>
                </div>
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Courses</p>
                  <p className="text-2xl font-bold text-gray-900">{systemStats.totalCourses}</p>
                </div>
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Conflicts Resolved</p>
                  <p className="text-2xl font-bold text-gray-900">{systemStats.conflictsResolved}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Timetable Generation Section - Enhanced */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <Zap className="w-6 h-6 text-yellow-500" />
              <span>AI Timetable Generator</span>
              <Badge className="bg-green-100 text-green-800">Main Feature</Badge>
            </CardTitle>
            <CardDescription className="text-lg">Generate optimized timetables using advanced AI/ML algorithms with real-time conflict resolution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Generation Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg border">
                <div className="space-y-2">
                  <Label htmlFor="semester" className="font-semibold">Target Semester</Label>
                  <Select value={selectedSemester}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spring-2024">Spring 2024</SelectItem>
                      <SelectItem value="fall-2024">Fall 2024</SelectItem>
                      <SelectItem value="summer-2024">Summer 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="optimization" className="font-semibold">Optimization Priority</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conflicts">Minimize Conflicts</SelectItem>
                      <SelectItem value="efficiency">Maximize Efficiency</SelectItem>
                      <SelectItem value="faculty">Faculty Preferences</SelectItem>
                      <SelectItem value="rooms">Room Utilization</SelectItem>
                      <SelectItem value="nep2020">NEP 2020 Compliance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="generation-mode" className="font-semibold">Generation Mode</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Generation</SelectItem>
                      <SelectItem value="incremental">Incremental Update</SelectItem>
                      <SelectItem value="scenario">Scenario Testing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Advanced Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Advanced Parameters</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="max-iterations">Max Iterations</Label>
                      <Input id="max-iterations" type="number" defaultValue="1000" className="text-sm" />
                    </div>
                    <div>
                      <Label htmlFor="time-limit">Time Limit (min)</Label>
                      <Input id="time-limit" type="number" defaultValue="30" className="text-sm" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Constraints</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="faculty-preferences" defaultChecked aria-label="Respect faculty preferences" />
                      <Label htmlFor="faculty-preferences" className="text-sm">Respect faculty preferences</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="room-capacity" defaultChecked aria-label="Enforce room capacity limits" />
                      <Label htmlFor="room-capacity" className="text-sm">Enforce room capacity limits</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="nep-compliance" defaultChecked aria-label="NEP 2020 compliance" />
                      <Label htmlFor="nep-compliance" className="text-sm">NEP 2020 compliance</Label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generation Status */}
              {generatingTimetable && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-900">Generation Progress</span>
                      <span className="text-sm text-blue-700">Step {generationStep} of 5</span>
                    </div>
                    <Progress value={(generationStep / 5) * 100} className="h-3" />
                    <div className="space-y-2">
                      <p className={`text-sm ${generationStep >= 1 ? 'text-blue-800' : 'text-gray-600'}`}>
                        {generationStep >= 1 ? '✓' : '⏳'} Analyzing course requirements and prerequisites
                      </p>
                      <p className={`text-sm ${generationStep >= 2 ? 'text-blue-800' : 'text-gray-600'}`}>
                        {generationStep >= 2 ? '✓' : generationStep === 1 ? '🔄' : '⏳'} Processing faculty availability and preferences
                      </p>
                      <p className={`text-sm ${generationStep >= 3 ? 'text-blue-800' : 'text-gray-600'}`}>
                        {generationStep >= 3 ? '✓' : generationStep === 2 ? '🔄' : '⏳'} Optimizing room assignments and time slots
                      </p>
                      <p className={`text-sm ${generationStep >= 4 ? 'text-blue-800' : 'text-gray-600'}`}>
                        {generationStep >= 4 ? '✓' : generationStep === 3 ? '🔄' : '⏳'} Running conflict detection algorithms
                      </p>
                      <p className={`text-sm ${generationStep >= 5 ? 'text-blue-800' : 'text-gray-600'}`}>
                        {generationStep >= 5 ? '✓' : generationStep === 4 ? '🔄' : '⏳'} Finalizing timetable and generating reports
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <Button
                    onClick={handleGenerateTimetable}
                    disabled={generatingTimetable}
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                    size="lg"
                  >
                    {generatingTimetable ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        Generating Timetable...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Generate Timetable
                      </>
                    )}
                  </Button>
                  <Button variant="outline" disabled={generatingTimetable}>
                    <Settings className="w-4 h-4 mr-2" />
                    Advanced Settings
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export Template
                  </Button>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh Data
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generated Timetable Preview */}
        {generatedTimetable && (
          <Card className="mb-8 border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-xl">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Generated Timetable - {selectedSemester.replace('-', ' ').toUpperCase()}</span>
                <Badge className="bg-green-100 text-green-800">Successfully Generated</Badge>
              </CardTitle>
              <CardDescription>AI-optimized timetable with {generatedTimetable.conflicts} conflicts and {generatedTimetable.efficiency}% efficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Timetable Preview */}
                <div className="lg:col-span-2" ref={timetableRef}>
                  <h4 className="font-semibold mb-4">Timetable Preview</h4>
                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-3 py-2 text-left font-medium text-gray-900">Time</th>
                            <th className="px-3 py-2 text-left font-medium text-gray-900">Mon</th>
                            <th className="px-3 py-2 text-left font-medium text-gray-900">Tue</th>
                            <th className="px-3 py-2 text-left font-medium text-gray-900">Wed</th>
                            <th className="px-3 py-2 text-left font-medium text-gray-900">Thu</th>
                            <th className="px-3 py-2 text-left font-medium text-gray-900">Fri</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { time: "9:00-10:30", mon: "EDU101", tue: "PSY201", wed: "MATH301", thu: "ENG201", fri: "SCI101" },
                            { time: "10:45-12:15", mon: "HIST201", tue: "EDU301", wed: "PSY301", thu: "MATH401", fri: "ENG301" },
                            { time: "1:00-2:30", mon: "LAB101", tue: "LAB201", wed: "EDU401", thu: "PSY401", fri: "MATH501" },
                            { time: "2:45-4:15", mon: "SEM101", tue: "SEM201", wed: "LAB301", thu: "EDU501", fri: "PSY501" },
                          ].map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-3 py-2 font-medium text-gray-900">{row.time}</td>
                              <td className="px-3 py-2">
                                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{row.mon}</div>
                              </td>
                              <td className="px-3 py-2">
                                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{row.tue}</div>
                              </td>
                              <td className="px-3 py-2">
                                <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">{row.wed}</div>
                              </td>
                              <td className="px-3 py-2">
                                <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">{row.thu}</div>
                              </td>
                              <td className="px-3 py-2">
                                <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">{row.fri}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Generation Summary */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Generation Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="text-sm font-medium">Conflicts Resolved</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">{generatedTimetable.conflicts}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="text-sm font-medium">Efficiency Score</span>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">{generatedTimetable.efficiency}%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="text-sm font-medium">Generation Time</span>
                      <span className="text-sm text-gray-600">2.3 minutes</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="text-sm font-medium">NEP 2020 Compliance</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">100%</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <Download className="w-4 h-4 mr-2" />
                          Export Timetable
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Export Timetable</DialogTitle>
                          <DialogDescription>Choose the format and scope for your timetable export</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Export Format</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select format" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pdf">PDF Document</SelectItem>
                                <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                                <SelectItem value="csv">CSV Data</SelectItem>
                                <SelectItem value="json">JSON Format</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Export Scope</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select scope" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="full">Complete Timetable</SelectItem>
                                <SelectItem value="faculty">Faculty Schedules Only</SelectItem>
                                <SelectItem value="rooms">Room Utilization</SelectItem>
                                <SelectItem value="conflicts">Conflict Report</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="include-analytics" defaultChecked aria-label="Include analytics and metrics" />
                            <Label htmlFor="include-analytics" className="text-sm">Include analytics and metrics</Label>
                          </div>
                          <Button className="w-full" disabled={exporting} onClick={async () => {
                            if (!timetableRef.current) return
                            try {
                              setExporting(true)
                              const canvas = await html2canvas(timetableRef.current, { scale: 2, backgroundColor: '#ffffff' })
                              const imgData = canvas.toDataURL('image/png')
                              const pdf = new jsPDF('p', 'mm', 'a4')
                              const pageWidth = pdf.internal.pageSize.getWidth()
                              const pageHeight = pdf.internal.pageSize.getHeight()
                              const margin = 10
                              const renderWidth = pageWidth - margin * 2
                              const renderHeight = (canvas.height * renderWidth) / canvas.width

                              if (renderHeight <= pageHeight - margin * 2) {
                                pdf.addImage(imgData, 'PNG', margin, margin, renderWidth, renderHeight)
                              } else {
                                // paginate vertically
                                const pageRenderHeight = pageHeight - margin * 2
                                const sliceHeightPx = (pageRenderHeight * canvas.width) / renderWidth
                                let rendered = 0
                                let pageIndex = 0
                                while (rendered < canvas.height) {
                                  const sliceCanvas = document.createElement('canvas')
                                  sliceCanvas.width = canvas.width
                                  sliceCanvas.height = Math.min(sliceHeightPx, canvas.height - rendered)
                                  const ctx = sliceCanvas.getContext('2d')!
                                  ctx.drawImage(
                                    canvas,
                                    0,
                                    rendered,
                                    canvas.width,
                                    sliceCanvas.height,
                                    0,
                                    0,
                                    canvas.width,
                                    sliceCanvas.height
                                  )
                                  const sliceData = sliceCanvas.toDataURL('image/png')
                                  if (pageIndex > 0) pdf.addPage()
                                  const sliceRenderHeight = (sliceCanvas.height * renderWidth) / canvas.width
                                  pdf.addImage(sliceData, 'PNG', margin, margin, renderWidth, sliceRenderHeight)
                                  rendered += sliceCanvas.height
                                  pageIndex += 1
                                }
                              }
                              pdf.save(`timetable_${selectedSemester}.pdf`)
                            } finally {
                              setExporting(false)
                            }
                          }}>Generate Export</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" className="w-full">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Regenerate
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Fine-tune
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="conflicts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="conflicts">Conflict Resolution</TabsTrigger>
            <TabsTrigger value="generation">Generation History</TabsTrigger>
            <TabsTrigger value="resources">Resource Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">System Settings</TabsTrigger>
          </TabsList>

          {/* Conflict Resolution */}
          <TabsContent value="conflicts">
            <Card>
              <CardHeader>
                <CardTitle>Scheduling Conflicts</CardTitle>
                <CardDescription>Identify and resolve timetable conflicts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conflicts.map((conflict) => (
                    <div key={conflict.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <AlertTriangle
                              className={`w-5 h-5 ${conflict.severity === "High" ? "text-red-500" : "text-yellow-500"}`}
                            />
                            <h3 className="font-semibold text-gray-900">{conflict.type}</h3>
                            <Badge variant={conflict.severity === "High" ? "destructive" : "default"}>
                              {conflict.severity}
                            </Badge>
                            <Badge
                              variant={conflict.status === "Resolved" ? "default" : "secondary"}
                              className={conflict.status === "Resolved" ? "bg-green-100 text-green-800" : ""}
                            >
                              {conflict.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{conflict.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Courses: {conflict.courses.join(", ")}</span>
                            <span>•</span>
                            <span>Time: {conflict.time}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {conflict.status === "Pending" && (
                            <>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" className="cursor-pointer">
                                    Resolve
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Advanced Conflict Resolution</DialogTitle>
                                    <DialogDescription>
                                      Choose a resolution strategy for this scheduling conflict. AI will suggest optimal solutions.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                      <h4 className="font-semibold text-blue-900 mb-2">AI Suggested Solutions</h4>
                                      <div className="space-y-2">
                                        <div className="flex items-center justify-between p-2 bg-white rounded border">
                                          <span className="text-sm">Reschedule EDU101 to Mon 2:00-3:30</span>
                                          <Badge className="bg-green-100 text-green-800">95% Optimal</Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-2 bg-white rounded border">
                                          <span className="text-sm">Move PSY201 to Room 205</span>
                                          <Badge className="bg-blue-100 text-blue-800">87% Optimal</Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-2 bg-white rounded border">
                                          <span className="text-sm">Split EDU101 into two sections</span>
                                          <Badge className="bg-yellow-100 text-yellow-800">72% Optimal</Badge>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="space-y-4">
                                      <div className="space-y-2">
                                        <Label>Resolution Strategy</Label>
                                        <Select>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select resolution" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="ai-suggested">Use AI Suggested Solution</SelectItem>
                                            <SelectItem value="reschedule">Reschedule one course</SelectItem>
                                            <SelectItem value="room">Assign different room</SelectItem>
                                            <SelectItem value="faculty">Reassign faculty</SelectItem>
                                            <SelectItem value="split">Split class sections</SelectItem>
                                            <SelectItem value="custom">Custom resolution</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Impact Assessment</Label>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                          <div className="p-2 bg-green-50 rounded">
                                            <span className="font-medium text-green-800">Positive Impact:</span>
                                            <p className="text-green-700">No faculty schedule conflicts</p>
                                          </div>
                                          <div className="p-2 bg-yellow-50 rounded">
                                            <span className="font-medium text-yellow-800">Considerations:</span>
                                            <p className="text-yellow-700">May affect 15 students</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex space-x-2">
                                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                                          Apply AI Solution
                                        </Button>
                                        <Button variant="outline" className="flex-1">
                                          Custom Resolution
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button variant="outline" size="sm" className="cursor-pointer">
                                Auto-Resolve
                              </Button>
                              <Button variant="outline" size="sm" className="cursor-pointer">
                                <Zap className="w-4 h-4 mr-1" />
                                AI Fix
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Generation History */}
          <TabsContent value="generation">
            <Card>
              <CardHeader>
                <CardTitle>Timetable Generation History</CardTitle>
                <CardDescription>Track previous timetable generations and their performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Semester</TableHead>
                      <TableHead>Generation Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Conflicts</TableHead>
                      <TableHead>Efficiency</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentGenerations.map((gen) => (
                      <TableRow key={gen.id}>
                        <TableCell className="font-medium">{gen.semester}</TableCell>
                        <TableCell>{gen.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={gen.status === "Completed" ? "default" : "secondary"}
                            className={gen.status === "Completed" ? "bg-green-100 text-green-800" : ""}
                          >
                            {gen.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{gen.conflicts}</TableCell>
                        <TableCell>{gen.efficiency}%</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resource Management */}
          <TabsContent value="resources">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Room Management</CardTitle>
                  <CardDescription>Manage classroom and facility resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rooms.map((room) => (
                      <div key={room.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h3 className="font-semibold text-gray-900">{room.name}</h3>
                          <p className="text-sm text-gray-600">
                            {room.type} • Capacity: {room.capacity}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {room.equipment.map((eq, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {eq}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Monitor system performance and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Database Performance</span>
                        <span className="text-green-600">Excellent</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>AI Model Accuracy</span>
                        <span className="text-green-600">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>System Uptime</span>
                        <span className="text-green-600">99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                    </div>
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>All systems operational. Last backup completed 2 hours ago.</AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduling Efficiency</CardTitle>
                  <CardDescription>Track optimization metrics over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Room Utilization</span>
                      <span className="text-2xl font-bold text-blue-600">87%</span>
                    </div>
                    <Progress value={87} />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Faculty Satisfaction</span>
                      <span className="text-2xl font-bold text-green-600">92%</span>
                    </div>
                    <Progress value={92} />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Conflict Resolution Rate</span>
                      <span className="text-2xl font-bold text-purple-600">96%</span>
                    </div>
                    <Progress value={96} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>NEP 2020 Compliance</CardTitle>
                  <CardDescription>Alignment with National Education Policy guidelines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-green-800">Multidisciplinary Approach</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">
                        100% compliance with interdisciplinary course requirements
                      </p>
                    </div>

                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-green-800">Flexible Curriculum</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">Choice-based credit system fully implemented</p>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-800">Continuous Assessment</span>
                      </div>
                      <p className="text-sm text-blue-600 mt-1">
                        Assessment schedules optimized for continuous evaluation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Configure global system settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="academic-year">Academic Year</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select academic year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2023-24">2023-2024</SelectItem>
                            <SelectItem value="2024-25">2024-2025</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="working-days">Working Days per Week</Label>
                        <Input type="number" defaultValue="5" />
                      </div>
                      <div>
                        <Label htmlFor="periods-per-day">Periods per Day</Label>
                        <Input type="number" defaultValue="8" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="break-duration">Break Duration (minutes)</Label>
                        <Input type="number" defaultValue="15" />
                      </div>
                      <div>
                        <Label htmlFor="lunch-duration">Lunch Duration (minutes)</Label>
                        <Input type="number" defaultValue="60" />
                      </div>
                      <div>
                        <Label htmlFor="max-consecutive">Max Consecutive Classes</Label>
                        <Input type="number" defaultValue="3" />
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">Save Configuration</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
