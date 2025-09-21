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
} from "lucide-react"
import { useState } from "react"

export default function AdminDashboard() {
  const [generatingTimetable, setGeneratingTimetable] = useState(false)
  const [selectedSemester, setSelectedSemester] = useState("spring-2024")

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

  const handleGenerateTimetable = () => {
    setGeneratingTimetable(true)
    // Simulate AI generation process
    setTimeout(() => {
      setGeneratingTimetable(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ClassEdge</span>
              </div>
              <Badge variant="destructive">Admin Dashboard</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spring-2024">Spring 2024</SelectItem>
                  <SelectItem value="fall-2024">Fall 2024</SelectItem>
                  <SelectItem value="summer-2024">Summer 2024</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
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

        {/* AI Timetable Generation Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>AI Timetable Generator</span>
            </CardTitle>
            <CardDescription>Generate optimized timetables using AI/ML algorithms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="space-y-2">
                  <Label htmlFor="semester">Target Semester</Label>
                  <Select value={selectedSemester}>
                    <SelectTrigger className="w-48">
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
                  <Label htmlFor="optimization">Optimization Priority</Label>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conflicts">Minimize Conflicts</SelectItem>
                      <SelectItem value="efficiency">Maximize Efficiency</SelectItem>
                      <SelectItem value="faculty">Faculty Preferences</SelectItem>
                      <SelectItem value="rooms">Room Utilization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                onClick={handleGenerateTimetable}
                disabled={generatingTimetable}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {generatingTimetable ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Generate Timetable
                  </>
                )}
              </Button>
            </div>
            {generatingTimetable && (
              <div className="mt-4">
                <Progress value={33} className="mb-2" />
                <p className="text-sm text-gray-600">Processing faculty availability and course requirements...</p>
              </div>
            )}
          </CardContent>
        </Card>

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
                                  <Button variant="outline" size="sm">
                                    Resolve
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Resolve Conflict</DialogTitle>
                                    <DialogDescription>
                                      Choose a resolution strategy for this scheduling conflict.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="space-y-2">
                                      <Label>Resolution Options</Label>
                                      <Select>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select resolution" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="reschedule">Reschedule one course</SelectItem>
                                          <SelectItem value="room">Assign different room</SelectItem>
                                          <SelectItem value="faculty">Reassign faculty</SelectItem>
                                          <SelectItem value="split">Split class sections</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <Button className="w-full">Apply Resolution</Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button variant="outline" size="sm">
                                Auto-Resolve
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
