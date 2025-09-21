"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  CalendarIcon,
  Download,
  FileText,
  BarChart3,
  TrendingUp,
  Users,
  BookOpen,
  Share,
  Mail,
  Printer,
} from "lucide-react"
import { useState } from "react"

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState("timetable")
  const [exportFormat, setExportFormat] = useState("pdf")
  const [isGenerating, setIsGenerating] = useState(false)

  // Sample report data
  const reportTypes = [
    {
      id: "timetable",
      name: "Timetable Reports",
      description: "Complete timetables for students, faculty, and rooms",
      icon: CalendarIcon,
      formats: ["PDF", "Excel", "CSV"],
    },
    {
      id: "utilization",
      name: "Utilization Reports",
      description: "Room and faculty utilization analysis",
      icon: BarChart3,
      formats: ["PDF", "Excel", "PowerPoint"],
    },
    {
      id: "conflicts",
      name: "Conflict Analysis",
      description: "Scheduling conflicts and resolution reports",
      icon: TrendingUp,
      formats: ["PDF", "Excel"],
    },
    {
      id: "workload",
      name: "Workload Reports",
      description: "Faculty workload distribution and analysis",
      icon: Users,
      formats: ["PDF", "Excel"],
    },
    {
      id: "enrollment",
      name: "Enrollment Reports",
      description: "Course enrollment and capacity analysis",
      icon: BookOpen,
      formats: ["PDF", "Excel", "CSV"],
    },
    {
      id: "compliance",
      name: "NEP 2020 Compliance",
      description: "Compliance reports for NEP 2020 guidelines",
      icon: FileText,
      formats: ["PDF", "Word"],
    },
  ]

  const recentReports = [
    {
      id: 1,
      name: "Spring 2024 Master Timetable",
      type: "Timetable",
      generated: "2024-03-10",
      format: "PDF",
      size: "2.4 MB",
      downloads: 45,
    },
    {
      id: 2,
      name: "Faculty Workload Analysis",
      type: "Workload",
      generated: "2024-03-08",
      format: "Excel",
      size: "1.8 MB",
      downloads: 23,
    },
    {
      id: 3,
      name: "Room Utilization Report",
      type: "Utilization",
      generated: "2024-03-05",
      format: "PDF",
      size: "3.1 MB",
      downloads: 67,
    },
    {
      id: 4,
      name: "NEP 2020 Compliance Report",
      type: "Compliance",
      generated: "2024-03-01",
      format: "PDF",
      size: "4.2 MB",
      downloads: 89,
    },
  ]

  const utilizationData = [
    { room: "Room 201", capacity: 50, utilization: 87, hours: 35 },
    { room: "Room 105", capacity: 30, utilization: 92, hours: 28 },
    { room: "Lab 1", capacity: 25, utilization: 76, hours: 19 },
    { room: "Auditorium", capacity: 200, utilization: 45, hours: 18 },
  ]

  const workloadData = [
    { faculty: "Dr. Smith", department: "Education", hours: 18, load: 90 },
    { faculty: "Prof. Johnson", department: "Psychology", hours: 16, load: 80 },
    { faculty: "Dr. Brown", department: "English", hours: 20, load: 100 },
    { faculty: "Prof. Davis", department: "Mathematics", hours: 14, load: 70 },
  ]

  const handleGenerateReport = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  const handleExport = (format: string) => {
    console.log(`Exporting in ${format} format`)
    // Simulate export process
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
              <Badge variant="default" className="bg-green-100 text-green-800">
                Reports & Analytics
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Email Reports
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">
            Generate comprehensive reports and export data in multiple formats for analysis and sharing
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Download className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Quick Export</p>
              <p className="text-sm text-gray-500">Current timetable</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Analytics</p>
              <p className="text-sm text-gray-500">Usage statistics</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Compliance</p>
              <p className="text-sm text-gray-500">NEP 2020 report</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Printer className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Print Ready</p>
              <p className="text-sm text-gray-500">Formatted reports</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="generate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="generate">Generate Reports</TabsTrigger>
            <TabsTrigger value="recent">Recent Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="export">Export Center</TabsTrigger>
            <TabsTrigger value="schedule">Scheduled Reports</TabsTrigger>
          </TabsList>

          {/* Generate Reports */}
          <TabsContent value="generate">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Report Generator</CardTitle>
                    <CardDescription>Create custom reports with specific parameters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Report Type Selection */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {reportTypes.map((report) => (
                          <div
                            key={report.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              selectedReport === report.id ? "ring-2 ring-blue-500 bg-blue-50" : ""
                            }`}
                            onClick={() => setSelectedReport(report.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <report.icon className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-medium text-gray-900">{report.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{report.description}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {report.formats.map((format) => (
                                    <Badge key={format} variant="outline" className="text-xs">
                                      {format}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Report Parameters */}
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-medium mb-4">Report Parameters</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Semester</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select semester" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="spring-2024">Spring 2024</SelectItem>
                                <SelectItem value="fall-2024">Fall 2024</SelectItem>
                                <SelectItem value="summer-2024">Summer 2024</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Department</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="All departments" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Departments</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="psychology">Psychology</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Program</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="All programs" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Programs</SelectItem>
                                <SelectItem value="bed">B.Ed.</SelectItem>
                                <SelectItem value="med">M.Ed.</SelectItem>
                                <SelectItem value="fyup">FYUP</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Format</Label>
                            <Select value={exportFormat} onValueChange={setExportFormat}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pdf">PDF</SelectItem>
                                <SelectItem value="excel">Excel</SelectItem>
                                <SelectItem value="csv">CSV</SelectItem>
                                <SelectItem value="word">Word</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Additional Options */}
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-medium mb-4">Additional Options</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="include-stats" />
                            <Label htmlFor="include-stats">Include statistical analysis</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="include-charts" />
                            <Label htmlFor="include-charts">Include charts and graphs</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="include-recommendations" />
                            <Label htmlFor="include-recommendations">Include AI recommendations</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="detailed-breakdown" />
                            <Label htmlFor="detailed-breakdown">Detailed breakdown by course</Label>
                          </div>
                        </div>
                      </div>

                      <Button onClick={handleGenerateReport} disabled={isGenerating} className="w-full" size="lg">
                        {isGenerating ? "Generating..." : "Generate Report"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Report Preview</CardTitle>
                    <CardDescription>Preview of selected report type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-gray-50">
                        <div className="flex items-center space-x-2 mb-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">{reportTypes.find((r) => r.id === selectedReport)?.name}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {reportTypes.find((r) => r.id === selectedReport)?.description}
                        </p>
                        <div className="text-xs text-gray-500">
                          <div>Format: {exportFormat.toUpperCase()}</div>
                          <div>Estimated size: 2.1 MB</div>
                          <div>Generation time: ~30 seconds</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Report Contents:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Executive summary</li>
                          <li>• Detailed data tables</li>
                          <li>• Visual charts and graphs</li>
                          <li>• Analysis and insights</li>
                          <li>• Recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Recent Reports */}
          <TabsContent value="recent">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Previously generated reports and downloads</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Generated</TableHead>
                      <TableHead>Format</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Downloads</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentReports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{report.type}</Badge>
                        </TableCell>
                        <TableCell>{report.generated}</TableCell>
                        <TableCell>{report.format}</TableCell>
                        <TableCell>{report.size}</TableCell>
                        <TableCell>{report.downloads}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={() => handleExport("download")}>
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share className="w-4 h-4" />
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

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Room Utilization Analysis</CardTitle>
                  <CardDescription>Current semester room usage statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {utilizationData.map((room, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{room.room}</h3>
                          <p className="text-sm text-gray-500">
                            Capacity: {room.capacity} | Hours: {room.hours}/week
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">{room.utilization}%</div>
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${room.utilization}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Faculty Workload Distribution</CardTitle>
                  <CardDescription>Teaching load analysis across faculty</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workloadData.map((faculty, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{faculty.faculty}</h3>
                          <p className="text-sm text-gray-500">
                            {faculty.department} | {faculty.hours} hours/week
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{faculty.load}%</div>
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: `${faculty.load}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Export Center */}
          <TabsContent value="export">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bulk Export</CardTitle>
                  <CardDescription>Export multiple reports simultaneously</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Select Reports to Export</Label>
                      <div className="space-y-2">
                        {reportTypes.map((report) => (
                          <div key={report.id} className="flex items-center space-x-2">
                            <Checkbox id={`export-${report.id}`} />
                            <Label htmlFor={`export-${report.id}`} className="text-sm">
                              {report.name}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Export Format</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pdf">PDF</SelectItem>
                            <SelectItem value="excel">Excel</SelectItem>
                            <SelectItem value="zip">ZIP Archive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Compression</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="None" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Export Selected Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Integration Export</CardTitle>
                  <CardDescription>Export to external systems and platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Mail className="w-4 h-4 mr-2" />
                        Email to Stakeholders
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Share className="w-4 h-4 mr-2" />
                        Share via Cloud Storage
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <FileText className="w-4 h-4 mr-2" />
                        Export to LMS
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Send to Analytics Platform
                      </Button>
                    </div>
                    <div className="border-t pt-4">
                      <Label>API Export</Label>
                      <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                        <code className="text-xs text-gray-600">
                          GET /api/reports/export?format=json&type=timetable
                        </code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Scheduled Reports */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Scheduled Reports</CardTitle>
                    <CardDescription>Automate report generation and delivery</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Schedule New Report</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Schedule Report Generation</DialogTitle>
                        <DialogDescription>Set up automatic report generation and delivery</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label>Report Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select report type" />
                            </SelectTrigger>
                            <SelectContent>
                              {reportTypes.map((report) => (
                                <SelectItem key={report.id} value={report.id}>
                                  {report.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Frequency</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                              <SelectItem value="monthly">Monthly</SelectItem>
                              <SelectItem value="semester">Per Semester</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Recipients</Label>
                          <Input placeholder="Enter email addresses" />
                        </div>
                        <Button className="w-full">Schedule Report</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Weekly Utilization Report</h3>
                      <p className="text-sm text-gray-500">Every Monday at 9:00 AM</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Monthly Faculty Workload</h3>
                      <p className="text-sm text-gray-500">First day of each month</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Semester Compliance Report</h3>
                      <p className="text-sm text-gray-500">End of each semester</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Paused</Badge>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
