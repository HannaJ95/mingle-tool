import PageLayout from '../components/layout/PageLayout'

function RulesPage() {
  return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-3xl font-bold mb-4">
         Mingle-Tool</h1>
      <p className="text-gray-600 mb-6 text-center">
        Welcome! Here’s how it works:
        </p>   

        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
          <ul className="space-y-3 text-gray-700">
            <li>Enter your name</li>
            <li>Get placed in a group</li>
            <li>Talk to your group</li>
            <li>Have fun!</li>
          </ul>
          </div>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
            Start
          </button>
    </div>
  )
}

export default RulesPage;