export default function TestPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">
                    Tailwind CSS Test
                </h1>
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                        If you can see this styled content, Tailwind is working!
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                        This page uses basic Tailwind classes to test if the CSS is loading properly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                            Blue Button
                        </button>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
                            Purple Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 