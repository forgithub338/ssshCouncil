export default function Home() {
    return (
        <main className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed">
            <div className="w-full h-full bg-black bg-opacity-50">
                <div className="container mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-600 bg-opacity-50 px-4">
                    <span className="text-4xl md:text-8xl font-bold text-white text-center">松山高中</span>
                    <span className="text-4xl md:text-8xl font-bold text-white text-center">學生議會</span>
                    <br/>
                    <p className="text-xl md:text-2xl font-semibold text-white text-center">有溫度的幸福議會</p>
                    <br/>
                    <div className="bg-white h-8 w-full md:w-[800px] flex items-center justify-center text-green-700">
                        行政夥伴募集中
                    </div>
                </div>
            </div>
        </main>
    );
}
