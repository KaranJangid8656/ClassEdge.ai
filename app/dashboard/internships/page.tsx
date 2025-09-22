export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Internships & Fieldwork</h1>
      <p className="text-gray-600 mb-6">Manage internship and fieldwork schedules and placements.</p>
      <div className="space-y-3">
        {["School A - B.Ed.", "Community Center - FYUP", "University Lab - M.Ed."].map((item) => (
          <div key={item} className="flex items-center justify-between border rounded-lg p-3">
            <span>{item}</span>
            <span className="text-sm text-gray-500">Scheduled</span>
          </div>
        ))}
      </div>
    </div>
  )
}


