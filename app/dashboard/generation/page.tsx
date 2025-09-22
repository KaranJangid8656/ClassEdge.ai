import { Button } from "@/components/ui/button"

export default function GenerationPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Smart Generation</h1>
      <p className="text-gray-600 mb-6">Run the timetable generator using current inputs.</p>
      <div className="flex items-center gap-3">
        <Button className="bg-blue-600 hover:bg-blue-700">Generate Now</Button>
        <Button variant="outline">View Last Run</Button>
      </div>
    </div>
  )
}


