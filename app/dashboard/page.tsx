"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Bell,
  Calendar,
  Settings,
  UserCircle2,
  LayoutGrid,
  FileBarChart,
  BookOpen,
  FlaskConical,
  Users,
  Download,
  PlayCircle,
  AlertTriangle,
  BarChart3,
  ListChecks,
  Menu
} from "lucide-react"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href || (href === "/" && pathname === "/")
    const base = "text-base font-normal"
    const active = "text-blue-600 font-medium"
    const inactive = "text-gray-600 hover:text-gray-900"
    return (
      <Link href={href} className={`${base} ${isActive ? active : inactive}`}>
        {label}
      </Link>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header (Same as landing) */}
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
                {navLink("/", "Home")}
                {navLink("/dashboard", "Dashboard")}
                <Link href="/#resources" className="text-gray-600 hover:text-gray-900 text-base font-normal">Resources</Link>
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

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 py-6">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <nav className="space-y-1">
              <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-gray-100 text-gray-900">
                <LayoutGrid className="w-4 h-4" /> Overview
              </Link>
              <Link href="/dashboard/timetable" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700">
                <Calendar className="w-4 h-4" /> Timetable
              </Link>
              <Link href="/dashboard/input" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700">
                <ListChecks className="w-4 h-4" /> Input Data
              </Link>
              <Link href="/dashboard/generation" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700">
                <PlayCircle className="w-4 h-4" /> Smart Generation
              </Link>
              <Link href="/dashboard/scenarios" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700">
                <BarChart3 className="w-4 h-4" /> Scenario Simulation
              </Link>
              <Link href="/dashboard/internships" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700">
                <BookOpen className="w-4 h-4" /> Internships & Fieldwork
              </Link>
              <Link href="/dashboard/reports" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700">
                <FileBarChart className="w-4 h-4" /> Reports & Exports
              </Link>
              <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700">
                <Settings className="w-4 h-4" /> Settings
              </Link>
            </nav>
          </aside>

        {/* Main */}
        <main className="space-y-6">
          {/* Guidance Banner */}
          <Card>
            <CardContent className="py-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
              <p className="text-sm text-gray-700">
                Ensure all input data is updated before generating timetables.
              </p>
            </CardContent>
          </Card>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="py-3"><CardTitle className="text-sm text-gray-500">Programs Scheduled</CardTitle></CardHeader>
              <CardContent className="pt-0"><div className="text-2xl font-semibold">3</div></CardContent>
            </Card>
            <Card>
              <CardHeader className="py-3"><CardTitle className="text-sm text-gray-500">Students Covered</CardTitle></CardHeader>
              <CardContent className="pt-0"><div className="text-2xl font-semibold">1,200</div></CardContent>
            </Card>
            <Card>
              <CardHeader className="py-3"><CardTitle className="text-sm text-gray-500">Conflicts Detected</CardTitle></CardHeader>
              <CardContent className="pt-0 flex items-center gap-2">
                <div className="text-2xl font-semibold">0</div>
                <Badge className="bg-green-100 text-green-700">Healthy</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardContent className="py-4 flex flex-wrap gap-3">
              <Link href="/dashboard/generation">
                <Button className="bg-blue-600 hover:bg-blue-700"><PlayCircle className="w-4 h-4 mr-2" />Generate New Timetable</Button>
              </Link>
              <Link href="/dashboard/input">
                <Button variant="outline" className="gap-2"><ListChecks className="w-4 h-4" />Upload/Edit Inputs</Button>
              </Link>
              <Link href="/dashboard/reports">
                <Button variant="outline" className="gap-2"><AlertTriangle className="w-4 h-4" />Run Conflict Check</Button>
              </Link>
              <Link href="/dashboard/reports">
                <Button variant="outline" className="gap-2"><Download className="w-4 h-4" />Export PDF/Excel</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Timetable Preview */}
            <Card className="lg:col-span-2">
              <CardHeader className="py-3 flex-row items-center justify-between">
                <CardTitle className="text-base font-semibold flex items-center gap-2"><Calendar className="w-4 h-4" /> Timetable Preview (This Week)</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-7 gap-2 text-xs">
                  {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
                    <div key={d} className="text-center text-gray-500 font-medium">{d}</div>
                  ))}
                  {Array.from({ length: 7 * 4 }).map((_, i) => {
                    const isWeekday = i % 7 < 5
                    // Deterministic pseudo pattern based on index
                    const filled = isWeekday && (i % 3 === 0 || i % 4 === 0)
                    const label = isWeekday && i % 5 === 0 ? (i % 2 === 0 ? "Math" : "Eng") : ""
                    return (
                      <div key={i} className={`h-10 rounded flex items-center justify-center text-[11px] ${filled ? "bg-blue-50 text-blue-800" : "bg-gray-50 text-gray-600"}`}>
                        {label}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Faculty Load Snapshot */}
            <Card>
              <CardHeader className="py-3"><CardTitle className="text-base">Faculty Load Snapshot</CardTitle></CardHeader>
              <CardContent className="pt-0 space-y-3 text-sm">
                {[
                  { name: "Dr. Sharma", load: 80 },
                  { name: "Prof. Singh", load: 65 },
                  { name: "Ms. Rao", load: 45 }
                ].map((f) => (
                  <div key={f.name}>
                    <div className="flex justify-between mb-1"><span>{f.name}</span><span className="text-gray-500">{f.load}%</span></div>
                    <Progress value={f.load} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Room/Lab Utilization */}
            <Card>
              <CardHeader className="py-3"><CardTitle className="text-base flex items-center gap-2"><FlaskConical className="w-4 h-4" /> Room/Lab Utilization</CardTitle></CardHeader>
              <CardContent className="pt-0 space-y-3 text-sm">
                <div className="flex justify-between"><span>Rooms</span><span className="text-gray-600">72% used</span></div>
                <Progress value={72} />
                <div className="flex justify-between mt-3"><span>Labs</span><span className="text-gray-600">54% used</span></div>
                <Progress value={54} />
              </CardContent>
            </Card>

            {/* Student Elective Distribution */}
            <Card>
              <CardHeader className="py-3"><CardTitle className="text-base">Student Elective Distribution</CardTitle></CardHeader>
              <CardContent className="pt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Elective</TableHead>
                      <TableHead className="text-right">Students</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "AI Basics", count: 320 },
                      { name: "Pedagogy", count: 410 },
                      { name: "Robotics", count: 180 }
                    ].map((e) => (
                      <TableRow key={e.name}>
                        <TableCell>{e.name}</TableCell>
                        <TableCell className="text-right">{e.count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Internship/Fieldwork Schedule */}
            <Card>
              <CardHeader className="py-3"><CardTitle className="text-base">Internship/Fieldwork</CardTitle></CardHeader>
              <CardContent className="pt-0 space-y-2 text-sm">
                {["School A - Year 3","Community Center - Year 2","University Lab - Year 4"].map((i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-50 rounded px-3 py-2">
                    <span className="truncate mr-2">{i}</span>
                    <Badge variant="secondary">Scheduled</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Reports & Exports */}
          <Card>
            <CardHeader className="py-3"><CardTitle className="text-base flex items-center gap-2"><FileBarChart className="w-4 h-4" /> Reports & Exports</CardTitle></CardHeader>
            <CardContent className="pt-0 flex flex-wrap gap-3">
              <Button variant="outline" className="gap-2"><Download className="w-4 h-4" />Download PDF</Button>
              <Button variant="outline" className="gap-2"><Download className="w-4 h-4" />Download Excel</Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  </div>
  )
}


