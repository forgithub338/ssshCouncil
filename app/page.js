export default function Home() {
    return (
        <main className="min-h-screen  bg-[url('/images/background.jpg')] bg-cover bg-center bg-opacity-100">
            <div className="container flex flex-col items-center justify-center min-h-screen bg-gray-600 bg-opacity-50">
                <span className="text-8xl font-bold text-white">松山高中</span>
                <span className="text-8xl font-bold text-white">學生議會</span>
                <br/>
                <p className="text-2xl font-semibold text-white">有溫度的幸福議會</p>
                <br/>
                <div className="bg-white  h-8 w-[800px] flex items-center justify-center text-green-700">行政夥伴募集中</div>
            </div>
        </main>
    );
}
