export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <p className="text-gray-600 mb-6">Manage preferences and configurations.</p>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold mb-2">Notifications</h2>
          <p className="text-sm text-gray-600">Email and in-app notifications.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold mb-2">Access Control</h2>
          <p className="text-sm text-gray-600">Role-based permissions.</p>
        </div>
      </div>
    </div>
  )
}


