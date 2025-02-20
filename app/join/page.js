export default function Join() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">加入我們</h1>
      
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">WE WANT YOU</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12 ">
        <div className="border p-6 rounded-lg hover:bg-gray-100 transition-all duration-300">
          <h3 className="text-xl font-bold mb-4">秘書處</h3>
          <div className="space-y-2">
            <div className="bg-blue-100 px-2 py-1 p-2 rounded-lg w-fit">#收發公文</div>
            <div className="bg-blue-100 px-2 py-1 p-2 rounded-lg w-fit">#外交官</div>
            <div className="bg-blue-100 px-2 py-1 p-2 rounded-lg w-fit">#支出守門員</div>
          </div>
        </div>

        <div className="border p-6 rounded-lg hover:bg-gray-100 transition-all duration-300">
          <h3 className="text-xl font-bold mb-4">議事處</h3>
          <div className="space-y-2">
            <div className="bg-blue-100 px-2 py-1 p-2 rounded-lg w-fit">#議會史官</div>
            <div className="bg-blue-100 px-2 py-1 p-2 rounded-lg w-fit">#議の執行人</div>
          </div>
        </div>

        <div className="border p-6 rounded-lg hover:bg-gray-100 transition-all duration-300">
          <h3 className="text-xl font-bold mb-4">公報處</h3>
          <div className="space-y-2">
            <div className="bg-blue-100 px-2 py-1 p-2 rounded-lg w-fit">#有讀書的記者</div>
            <div className="bg-blue-100 px-2 py-1 p-2 rounded-lg w-fit">#正義網軍</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-12">
        <h3 className="text-xl font-bold mb-4">工作特色</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>不用早起 不用低閉</li>
          <li>躺著賺公服</li>
          <li>8+ 時數保證</li>
          <li>做公服同時豐富學習歷程</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">學長姐經驗分享</h3>
        <blockquote className="italic border-l-4 border-gray-300 pl-4 text-[#A68B5B]">
          在學生議會秘書處服務的學習履歷，是我能在大學面試時從眾多競爭者中脫穎而出的關鍵！
          利用我在議會期間做的各種會議紀錄及報告，成功讓教授看見我的執行能力，
          讓我如願錄取心目中的第一志願！而且學生議會工作內容輕鬆，
          很推薦給缺公服跟學習歷程的各位學弟妹...
          <footer className="mt-2 text-gray-600 text-[#A68B5B]">- 節錄自前學生議會秘書</footer>
        </blockquote>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg mb-4">英雄不一定別著穗帶</p>
        <p className="text-xl font-bold">現在就加入秘書的行列！</p>
      </div>

      <div className="text-center mt-12 hover:bg-orange-100 hover:scale-105 transition-all duration-300">
        <a href="/joinForm">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full">義不容辭</button>
        </a>
      </div>
    </div>
  );
}
