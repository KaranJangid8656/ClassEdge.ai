import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Users, MapPin, Download, CalendarIcon } from "lucide-react"

export default function StudentPortal() {
  const currentDate = new Date()

  // Sample data for demonstration
  const enrolledCourses = [
    {
      code: "EDU101",
      name: "Foundations of Education",
      credits: 4,
      type: "Core",
      instructor: "Dr. Smith",
      schedule: "Mon, Wed 9:00-10:30",
    },
    {
      code: "PSY201",
      name: "Educational Psychology",
      credits: 3,
      type: "Core",
      instructor: "Prof. Johnson",
      schedule: "Tue, Thu 11:00-12:30",
    },
    {
      code: "ENG301",
      name: "English Literature",
      credits: 3,
      type: "Elective",
      instructor: "Dr. Brown",
      schedule: "Mon, Fri 2:00-3:30",
    },
    {
      code: "MATH201",
      name: "Mathematics Pedagogy",
      credits: 4,
      type: "Core",
      instructor: "Prof. Davis",
      schedule: "Wed, Fri 10:00-11:30",
    },
  ]

  const availableElectives = [
    { code: "ART201", name: "Art Education", credits: 3, instructor: "Ms. Wilson", capacity: "15/30" },
    { code: "MUS201", name: "Music Education", credits: 3, instructor: "Mr. Taylor", capacity: "20/25" },
    { code: "PE201", name: "Physical Education", credits: 2, instructor: "Coach Anderson", capacity: "25/40" },
    { code: "TECH201", name: "Educational Technology", credits: 3, instructor: "Dr. Lee", capacity: "18/30" },
  ]

  const weeklySchedule = [
    { time: "9:00-10:30", monday: "EDU101", tuesday: "", wednesday: "EDU101", thursday: "", friday: "" },
    { time: "10:00-11:30", monday: "", tuesday: "", wednesday: "MATH201", thursday: "", friday: "MATH201" },
    { time: "11:00-12:30", monday: "", tuesday: "PSY201", wednesday: "", thursday: "PSY201", friday: "" },
    { time: "2:00-3:30", monday: "ENG301", tuesday: "", wednesday: "", thursday: "", friday: "ENG301" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-auto sm:h-16 py-4 sm:py-0 gap-4 sm:gap-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ClassEdge</span>
              </div>
              <Badge variant="secondary">Student Portal</Badge>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <span className="text-sm text-gray-600">Welcome, John Doe</span>
              <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Export Schedule
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
          <p className="text-gray-600 text-sm md:text-base">
            Manage your courses, view timetables, and track your academic progress
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Enrolled Courses</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">4</p>
                </div>
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Total Credits</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">14</p>
                </div>
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Weekly Hours</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">18</p>
                </div>
                <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Completion</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">75%</p>
                </div>
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
              </div>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="timetable" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="timetable" className="text-xs md:text-sm">
              My Timetable
            </TabsTrigger>
            <TabsTrigger value="courses" className="text-xs md:text-sm">
              Enrolled Courses
            </TabsTrigger>
            <TabsTrigger value="electives" className="text-xs md:text-sm">
              Select Electives
            </TabsTrigger>
            <TabsTrigger value="calendar" className="text-xs md:text-sm">
              Calendar View
            </TabsTrigger>
          </TabsList>

          {/* Timetable View */}
          <TabsContent value="timetable">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Weekly Timetable</CardTitle>
                <CardDescription className="text-sm">Your current semester schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20 md:w-24 text-xs md:text-sm">Time</TableHead>
                        <TableHead className="text-xs md:text-sm">Monday</TableHead>
                        <TableHead className="text-xs md:text-sm">Tuesday</TableHead>
                        <TableHead className="text-xs md:text-sm">Wednesday</TableHead>
                        <TableHead className="text-xs md:text-sm">Thursday</TableHead>
                        <TableHead className="text-xs md:text-sm">Friday</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {weeklySchedule.map((slot, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium text-xs md:text-sm">{slot.time}</TableCell>
                          <TableCell>
                            {slot.monday && (
                              <Badge variant="default" className="bg-blue-100 text-blue-800 text-xs">
                                {slot.monday}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {slot.tuesday && (
                              <Badge variant="default" className="bg-green-100 text-green-800 text-xs">
                                {slot.tuesday}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {slot.wednesday && (
                              <Badge variant="default" className="bg-purple-100 text-purple-800 text-xs">
                                {slot.wednesday}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {slot.thursday && (
                              <Badge variant="default" className="bg-orange-100 text-orange-800 text-xs">
                                {slot.thursday}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {slot.friday && (
                              <Badge variant="default" className="bg-red-100 text-red-800 text-xs">
                                {slot.friday}
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enrolled Courses */}
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Enrolled Courses</CardTitle>
                <CardDescription className="text-sm">Your current semester course load</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledCourses.map((course, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg gap-4"
                    >
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                          <Badge variant={course.type === "Core" ? "default" : "secondary"} className="text-xs">
                            {course.type}
                          </Badge>
                          <h3 className="font-semibold text-gray-900 text-sm md:text-base">{course.code}</h3>
                        </div>
                        <p className="text-gray-600 mt-1 text-sm md:text-base">{course.name}</p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-2 text-xs md:text-sm text-gray-500">
                          <span>{course.credits} Credits</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{course.instructor}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{course.schedule}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full md:w-auto text-xs md:text-sm bg-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Elective Selection */}
          <TabsContent value="electives">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Select Electives</CardTitle>
                <CardDescription className="text-sm">
                  Choose from available elective courses for next semester
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <Select>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Filter by Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="arts">Arts & Humanities</SelectItem>
                        <SelectItem value="science">Science & Math</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Credits" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Credits</SelectItem>
                        <SelectItem value="2">2 Credits</SelectItem>
                        <SelectItem value="3">3 Credits</SelectItem>
                        <SelectItem value="4">4 Credits</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  {availableElectives.map((course, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg gap-4"
                    >
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                          <h3 className="font-semibold text-gray-900 text-sm md:text-base">{course.code}</h3>
                          <Badge variant="outline" className="text-xs">
                            {course.credits} Credits
                          </Badge>
                        </div>
                        <p className="text-gray-600 mt-1 text-sm md:text-base">{course.name}</p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-2 text-xs md:text-sm text-gray-500">
                          <span>{course.instructor}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>Capacity: {course.capacity}</span>
                        </div>
                      </div>
                      <Button className="w-full md:w-auto text-xs md:text-sm">Enroll</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calendar View */}
          <TabsContent value="calendar">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Academic Calendar</CardTitle>
                    <CardDescription className="text-sm">Important dates and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar mode="single" selected={currentDate} className="rounded-md border w-full" />
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-sm">Mid-term Exams</p>
                          <p className="text-xs text-gray-500">March 15-22, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-sm">Course Registration</p>
                          <p className="text-xs text-gray-500">April 1-7, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-sm">Teaching Practice</p>
                          <p className="text-xs text-gray-500">April 15 - May 15, 2024</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
