"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Clock, Users, MapPin, Download, CalendarIcon, Edit, Save } from "lucide-react"
import { useState } from "react"

export default function FacultyPortal() {
  const [editingAvailability, setEditingAvailability] = useState(false)

  // Sample data for demonstration
  const facultyInfo = {
    name: "Dr. Sarah Johnson",
    department: "Education",
    employeeId: "FAC001",
    expertise: ["Educational Psychology", "Curriculum Development", "Assessment Methods"],
    maxWeeklyHours: 20,
    currentLoad: 16,
  }

  const assignedCourses = [
    {
      code: "EDU101",
      name: "Foundations of Education",
      credits: 4,
      students: 45,
      schedule: "Mon, Wed 9:00-10:30",
      room: "Room 201",
      type: "Theory",
    },
    {
      code: "PSY201",
      name: "Educational Psychology",
      credits: 3,
      students: 38,
      schedule: "Tue, Thu 11:00-12:30",
      room: "Room 105",
      type: "Theory",
    },
    {
      code: "EDU301",
      name: "Teaching Practice",
      credits: 6,
      students: 25,
      schedule: "Mon-Fri 2:00-4:00",
      room: "Various Schools",
      type: "Practical",
    },
  ]

  const availabilitySlots = [
    { time: "9:00-10:30", monday: true, tuesday: false, wednesday: true, thursday: false, friday: true },
    { time: "10:30-12:00", monday: true, tuesday: true, wednesday: false, thursday: true, friday: false },
    { time: "11:00-12:30", monday: false, tuesday: true, wednesday: false, thursday: true, friday: false },
    { time: "2:00-3:30", monday: true, tuesday: false, wednesday: true, thursday: false, friday: true },
    { time: "3:30-5:00", monday: false, tuesday: true, wednesday: false, thursday: true, friday: false },
  ]

  const workloadAnalysis = [
    { category: "Teaching Hours", current: 12, maximum: 14, percentage: 86 },
    { category: "Research Hours", current: 4, maximum: 6, percentage: 67 },
    { category: "Administrative", current: 2, maximum: 4, percentage: 50 },
    { category: "Student Supervision", current: 3, maximum: 5, percentage: 60 },
  ]

  const upcomingDeadlines = [
    { task: "Grade Submission - EDU101", date: "March 15, 2024", priority: "High" },
    { task: "Research Paper Review", date: "March 20, 2024", priority: "Medium" },
    { task: "Curriculum Committee Meeting", date: "March 25, 2024", priority: "Low" },
    { task: "Student Thesis Defense", date: "April 2, 2024", priority: "High" },
  ]

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
              <Badge variant="secondary">Faculty Portal</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {facultyInfo.name}</span>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Schedule
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Faculty Dashboard</h1>
          <p className="text-gray-600">Manage your teaching schedule, availability, and workload</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Assigned Courses</p>
                  <p className="text-2xl font-bold text-gray-900">{assignedCourses.length}</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Weekly Hours</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {facultyInfo.currentLoad}/{facultyInfo.maxWeeklyHours}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <Progress value={(facultyInfo.currentLoad / facultyInfo.maxWeeklyHours) * 100} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">108</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Workload</p>
                  <p className="text-2xl font-bold text-gray-900">80%</p>
                </div>
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <Progress value={80} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="schedule">My Schedule</TabsTrigger>
            <TabsTrigger value="courses">Assigned Courses</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="workload">Workload Analysis</TabsTrigger>
            <TabsTrigger value="tasks">Tasks & Deadlines</TabsTrigger>
          </TabsList>

          {/* Schedule View */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Teaching Schedule</CardTitle>
                <CardDescription>Your current semester teaching assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-24">Time</TableHead>
                        <TableHead>Monday</TableHead>
                        <TableHead>Tuesday</TableHead>
                        <TableHead>Wednesday</TableHead>
                        <TableHead>Thursday</TableHead>
                        <TableHead>Friday</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">9:00-10:30</TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-blue-100 text-blue-800">
                            EDU101 - Room 201
                          </Badge>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-blue-100 text-blue-800">
                            EDU101 - Room 201
                          </Badge>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">11:00-12:30</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            PSY201 - Room 105
                          </Badge>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            PSY201 - Room 105
                          </Badge>
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">2:00-4:00</TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-purple-100 text-purple-800">
                            Teaching Practice
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-purple-100 text-purple-800">
                            Teaching Practice
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-purple-100 text-purple-800">
                            Teaching Practice
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-purple-100 text-purple-800">
                            Teaching Practice
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-purple-100 text-purple-800">
                            Teaching Practice
                          </Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assigned Courses */}
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Assigned Courses</CardTitle>
                <CardDescription>Your current semester teaching assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignedCourses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <Badge variant={course.type === "Theory" ? "default" : "secondary"}>{course.type}</Badge>
                          <h3 className="font-semibold text-gray-900">{course.code}</h3>
                        </div>
                        <p className="text-gray-600 mt-1">{course.name}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>{course.credits} Credits</span>
                          <span>•</span>
                          <span>{course.students} Students</span>
                          <span>•</span>
                          <span>{course.schedule}</span>
                          <span>•</span>
                          <span>{course.room}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Students
                        </Button>
                        <Button variant="outline" size="sm">
                          Manage Course
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Availability Management */}
          <TabsContent value="availability">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Availability Settings</CardTitle>
                    <CardDescription>Set your preferred teaching hours and availability</CardDescription>
                  </div>
                  <Button
                    variant={editingAvailability ? "default" : "outline"}
                    onClick={() => setEditingAvailability(!editingAvailability)}
                  >
                    {editingAvailability ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                    {editingAvailability ? "Save Changes" : "Edit Availability"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Preferences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="maxHours">Maximum Weekly Hours</Label>
                        <Input
                          id="maxHours"
                          type="number"
                          defaultValue={facultyInfo.maxWeeklyHours}
                          disabled={!editingAvailability}
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredDays">Preferred Teaching Days</Label>
                        <Select disabled={!editingAvailability}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred days" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekdays">Weekdays Only</SelectItem>
                            <SelectItem value="mwf">Mon, Wed, Fri</SelectItem>
                            <SelectItem value="tth">Tue, Thu</SelectItem>
                            <SelectItem value="all">All Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="expertise">Areas of Expertise</Label>
                        <Textarea
                          id="expertise"
                          defaultValue={facultyInfo.expertise.join(", ")}
                          disabled={!editingAvailability}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Time Slot Availability */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Weekly Availability</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-24">Time</TableHead>
                            <TableHead>Monday</TableHead>
                            <TableHead>Tuesday</TableHead>
                            <TableHead>Wednesday</TableHead>
                            <TableHead>Thursday</TableHead>
                            <TableHead>Friday</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {availabilitySlots.map((slot, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{slot.time}</TableCell>
                              <TableCell>
                                <Switch checked={slot.monday} disabled={!editingAvailability} />
                              </TableCell>
                              <TableCell>
                                <Switch checked={slot.tuesday} disabled={!editingAvailability} />
                              </TableCell>
                              <TableCell>
                                <Switch checked={slot.wednesday} disabled={!editingAvailability} />
                              </TableCell>
                              <TableCell>
                                <Switch checked={slot.thursday} disabled={!editingAvailability} />
                              </TableCell>
                              <TableCell>
                                <Switch checked={slot.friday} disabled={!editingAvailability} />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workload Analysis */}
          <TabsContent value="workload">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Workload Distribution</CardTitle>
                  <CardDescription>Current workload across different activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workloadAnalysis.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.category}</span>
                          <span className="text-gray-500">
                            {item.current}/{item.maximum} hours
                          </span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                        <div className="text-xs text-gray-500 text-right">{item.percentage}% utilized</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Workload Recommendations</CardTitle>
                  <CardDescription>AI-powered suggestions for optimal workload</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-green-800">Optimal Balance</p>
                          <p className="text-xs text-green-600">
                            Your current teaching load is well-balanced. Consider taking on 1-2 more research hours.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-blue-800">Schedule Optimization</p>
                          <p className="text-xs text-blue-600">
                            Consider consolidating Tuesday classes to create longer research blocks.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-orange-800">Capacity Available</p>
                          <p className="text-xs text-orange-600">
                            You have capacity for 1 additional course or 4 more administrative hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tasks & Deadlines */}
          <TabsContent value="tasks">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks & Deadlines</CardTitle>
                <CardDescription>Important deadlines and administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((task, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            task.priority === "High"
                              ? "bg-red-500"
                              : task.priority === "Medium"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          }`}
                        ></div>
                        <div>
                          <p className="font-medium text-gray-900">{task.task}</p>
                          <p className="text-sm text-gray-500">{task.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            task.priority === "High"
                              ? "destructive"
                              : task.priority === "Medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {task.priority}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Mark Complete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
