"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarIcon, Eye, EyeOff, Shield, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("student") 
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect based on user type
      if (userType === "admin") {
        window.location.href = "/admin"
      } else if (userType === "faculty") {
        window.location.href = "/faculty"
      } else {
        window.location.href = "/student"
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white flex">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 h-screen">
          {/* Left Side - Login Content */}
          <div className="w-full flex items-center justify-center bg-white px-8 py-8 overflow-y-auto">
            <div className="w-full max-w-md mx-auto no-scrollbar overflow-y-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-2 -ml-8">
                  <div className="relative w-32 h-32">
                    <Image
                      src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758392290/classedge_logo_dewaof.jpg"
                      alt="ClassEdge Logo"
                      fill
                      className="object-contain"
                      priority
                      quality={100}
                    />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                </div>
                <p className="text-gray-600 text-center">Choose your role and enter your credentials</p>
              </div>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label>I am a</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger className="cursor-pointer">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student" className="cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Student</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="faculty" className="cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>Faculty</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="admin" className="cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4" />
                        <span>Administrator</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email/Username */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  {userType === "student"
                    ? "Student ID or Email"
                    : userType === "faculty"
                      ? "Faculty ID or Email"
                      : "Admin Email"}
                </Label>
                <Input
                  id="email"
                  type="text"
                  placeholder={
                    userType === "student"
                      ? "Enter your student ID or email"
                      : userType === "faculty"
                        ? "Enter your faculty ID or email"
                        : "Enter your admin email"
                  }
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline cursor-pointer">
                  Forgot password?
                </Link>
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Sign In Button */}
              <Button type="submit" className="w-full cursor-pointer" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>

            {/* Quick Access */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 text-center">Quick Access (Demo)</p>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer"
                  onClick={() => {
                    setUserType("student")
                    window.location.href = "/student"
                  }}
                >
                  Student
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer"
                  onClick={() => {
                    setUserType("faculty")
                    window.location.href = "/faculty"
                  }}
                >
                  Faculty
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer"
                  onClick={() => {
                    setUserType("admin")
                    window.location.href = "/admin"
                  }}
                >
                  Admin
                </Button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-blue-600 hover:underline cursor-pointer">
                  Contact your administrator
                </Link>
              </p>
            </div>

              {/* Footer */}
              <div className="text-center mt-8 text-sm text-gray-500">
                <p>© 2024 ClassEdge. All rights reserved.</p>
                <p>Secure timetabling for educational institutions</p>
              </div>
            </div>
          </div>

          {/* Right Side - Full Image Coverage */}
          <div className="w-full h-screen relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758474633/5962830_3094910_nakl1g.jpg"
                alt="Login Background"
                fill
                style={{ objectPosition: "55% center" }}
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
