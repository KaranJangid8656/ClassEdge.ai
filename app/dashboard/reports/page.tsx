import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Reports & Exports</h1>
      <p className="text-gray-600 mb-6">Download schedules and summaries.</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="gap-2"><Download className="w-4 h-4" /> Download PDF</Button>
        <Button variant="outline" className="gap-2"><Download className="w-4 h-4" /> Download Excel</Button>
      </div>
    </div>
  )
}


