"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarIcon, Mail, ArrowLeft } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <CalendarIcon className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">ClassEdge</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Reset Password</h1>
          <p className="text-gray-600">Enter your email to receive reset instructions</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">Forgot Password</CardTitle>
            <CardDescription className="text-center">We'll send you a link to reset your password</CardDescription>
          </CardHeader>
          <CardContent>
            {success ? (
              <div className="text-center space-y-4">
                <Mail className="w-16 h-16 text-blue-600 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">Check Your Email</h3>
                <p className="text-gray-600">
                  We've sent password reset instructions to <strong>{email}</strong>
                </p>
                <p className="text-sm text-gray-500">Didn't receive the email? Check your spam folder or try again.</p>
                <Button onClick={() => setSuccess(false)} variant="outline" className="w-full">
                  Try Different Email
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading || !email}>
                  {isLoading ? "Sending..." : "Send Reset Instructions"}
                </Button>
              </form>
            )}

            {/* Back to Login */}
            <div className="text-center mt-6">
              <Link href="/auth/login" className="inline-flex items-center text-sm text-blue-600 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Help */}
        <Alert className="mt-6">
          <AlertDescription>
            Having trouble? Contact your system administrator or IT support for assistance.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
