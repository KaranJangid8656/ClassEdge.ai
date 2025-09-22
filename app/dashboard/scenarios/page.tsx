export default function ScenariosPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Scenario Simulation</h1>
      <p className="text-gray-600 mb-6">Compare alternative schedules and constraints.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold mb-2">Scenario A</h2>
          <p className="text-sm text-gray-600">Higher lab utilization</p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold mb-2">Scenario B</h2>
          <p className="text-sm text-gray-600">Lower faculty load</p>
        </div>
      </div>
    </div>
  )
}


