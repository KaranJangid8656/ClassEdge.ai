"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarIcon, Eye, EyeOff, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userType, setUserType] = useState("student")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
              setIsLoading(false)
              setSuccess(true)
              try { localStorage.setItem("role", userType === "faculty" ? "faculty" : "student") } catch {}
    }, 2000)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Submitted</h2>
            <p className="text-gray-600 mb-6">
              Your registration request has been submitted successfully. An administrator will review your application
              and send you login credentials via email.
            </p>
            <Button asChild className="w-full">
              <Link href="/auth/login">Return to Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 h-screen">
          {/* Left Side - Registration Content */}
          <div className="w-full flex items-center justify-center bg-white px-8 py-8 no-scrollbar h-screen overflow-y-auto" tabIndex={0}>
            <div className="w-full max-w-md mx-auto">
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
                  <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
                </div>
                <p className="text-gray-600 text-center">Fill out the form to request system access</p>
              </div>
            <form onSubmit={handleRegister} className="space-y-4">
              {/* User Type */}
              <div className="space-y-2">
                <Label>Account Type</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger className="cursor-pointer">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student" className="cursor-pointer">Student</SelectItem>
                    <SelectItem value="faculty" className="cursor-pointer">Faculty Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@university.edu" required />
              </div>

              {/* ID Number */}
              <div className="space-y-2">
                <Label htmlFor="idNumber">{userType === "student" ? "Student ID" : "Employee ID"}</Label>
                <Input
                  id="idNumber"
                  placeholder={userType === "student" ? "Enter your student ID" : "Enter your employee ID"}
                  required
                />
              </div>

              {/* Department/Program */}
              <div className="space-y-2">
                <Label htmlFor="department">{userType === "student" ? "Program" : "Department"}</Label>
                <Select>
                  <SelectTrigger className="cursor-pointer">
                    <SelectValue placeholder={`Select your ${userType === "student" ? "program" : "department"}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {userType === "student" ? (
                      <>
                        <SelectItem value="bed" className="cursor-pointer">B.Ed.</SelectItem>
                        <SelectItem value="med" className="cursor-pointer">M.Ed.</SelectItem>
                        <SelectItem value="fyup" className="cursor-pointer">FYUP</SelectItem>
                        <SelectItem value="itep" className="cursor-pointer">ITEP</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="education" className="cursor-pointer">Education</SelectItem>
                        <SelectItem value="psychology" className="cursor-pointer">Psychology</SelectItem>
                        <SelectItem value="english" className="cursor-pointer">English</SelectItem>
                        <SelectItem value="mathematics" className="cursor-pointer">Mathematics</SelectItem>
                        <SelectItem value="science" className="cursor-pointer">Science</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
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

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm leading-5">
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline cursor-pointer">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline cursor-pointer">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full cursor-pointer" disabled={isLoading}>
                {isLoading ? "Submitting Request..." : "Submit Registration Request"}
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-blue-600 hover:underline cursor-pointer">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Info Alert */}
            <Alert className="mt-6">
              <AlertDescription>
                Registration requests are reviewed by administrators. You will receive login credentials via email once
                approved.
              </AlertDescription>
            </Alert>
            </div>
          </div>

          {/* Right Side - Full Image Coverage */}
          <div className="w-full h-screen fixed right-0 top-0 lg:w-[60%]">
            <Image
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1758474633/5962830_3094910_nakl1g.jpg"
              alt="Register Background"
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
  )
}
