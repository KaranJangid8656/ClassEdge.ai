export default function TimetablePage() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Timetable</h1>
      <p className="text-gray-600 mb-6">View and manage weekly timetables.</p>
      <div className="grid grid-cols-7 gap-2 text-xs">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
          <div key={d} className="text-center text-gray-500 font-medium">{d}</div>
        ))}
        {Array.from({ length: 7 * 6 }).map((_, i) => (
          <div key={i} className={`h-12 rounded ${i % 7 < 5 ? "bg-blue-50" : "bg-gray-50"}`}></div>
        ))}
      </div>
    </div>
  )
}


