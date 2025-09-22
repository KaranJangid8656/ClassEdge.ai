export default function InputDataPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Input Data</h1>
      <p className="text-gray-600 mb-6">Upload or edit inputs like programs, subjects, faculty availability and rooms.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a className="block border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">Upload Faculty CSV</a>
        <a className="block border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">Upload Students CSV</a>
        <a className="block border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">Edit Rooms & Labs</a>
        <a className="block border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">Manage Subjects</a>
      </div>
    </div>
  )
}


