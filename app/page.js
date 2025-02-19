export default function Home() {
    return (
        <main className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-gray-800 text-white py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">松山高中學生議會</h1>
                    <p className="text-lg md:text-xl text-gray-300 text-center">有溫度的幸福議會</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 md:py-12">
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">最新公告</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className="hover:text-orange-500 cursor-pointer">• 第23次學生議會會議記錄</li>
                            <li className="hover:text-orange-500 cursor-pointer">• 校園環境改善提案</li>
                            <li className="hover:text-orange-500 cursor-pointer">• 學生權益保障法規修訂</li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">議會職責</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className="hover:text-orange-500 cursor-pointer">• 監督學生自治組織</li>
                            <li className="hover:text-orange-500 cursor-pointer">• 審議學生重要法規</li>
                            <li className="hover:text-orange-500 cursor-pointer">• 處理學生權益事項</li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">聯絡我們</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li>• 電話：(02)1234-5678</li>
                            <li>• Email：council@school.edu</li>
                            <li>• 地點：學生活動中心2樓</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-8 md:mt-12">
                    <button className="bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-700 hover:text-orange-500 transition-colors duration-300">
                        提交建議案
                    </button>
                </div>
            </div>
        </main>
    );
}
