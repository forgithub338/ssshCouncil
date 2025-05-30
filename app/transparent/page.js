'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from "next/navigation";

export default function Transparent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("學生自治法規");
  const [sortOrder, setSortOrder] = useState('desc');

  const [files, setFiles] = useState([]);
  const [smallType, setSmallType] = useState([]);
  const [loading, setLoading] = useState(false); // 加入 loading 狀態

  const transparentOptions = ["學生自治法規", "會議記錄影片", "常用議員表件", "歷屆議員提案"];
  const logOptions = ["開會通知單", "開會資料", "會議記錄"];

  useEffect(() => {
    async function getFile() {
      setLoading(true); // 開始載入
      const res = await fetch("/api/transparent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: activeTab,
          sortMethod: sortOrder
        })
      });

      const data = await res.json();
      setFiles(data.data);
      setSmallType(data.smallType || []);
      setLoading(false); // 載入完成
    }
    getFile();
  }, [activeTab, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* 手機版選單按鈕 */}
      <div className="lg:hidden left-0 right-0 top-0 bg-white z-[20] shadow-md p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-500 hover:text-gray-700 p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isSidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 側邊欄 */}
      <aside className={`
        lg:sticky lg:top-0 lg:left-0
        w-full lg:w-64 h-auto lg:h-screen 
        bg-white shadow-md
        transition-all duration-300 ease-in-out
        overflow-y-auto
        z-[15]
        ${isSidebarOpen ? 'block' : 'hidden'}
        lg:block
        top-[72px] lg:top-0
      `}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">議事透明專區</h2>
          <div className="space-y-2">
            {transparentOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setActiveTab(opt);
                  setIsSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeTab === opt ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">開會紀錄</h2>
            <div className="space-y-2">
              {logOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setActiveTab(opt);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeTab === opt ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* 主要內容區 */}
      <main className="flex-1 p-4 lg:p-8 md:mt-[72px] lg:mt-0">
        {activeTab && (
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">{activeTab}</h1>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="desc">最新在前</option>
              <option value="asc">最舊在前</option>
            </select>
          </div>
        )}

        {loading ? (
          // 載入畫面
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
          </div>
        ) : (
          // 資料顯示
          ["學生自治法規", "會議記錄"].includes(activeTab) && smallType.length > 0 ? (
            <div className="space-y-8">
              {smallType.map((category) => {
                const filteredItems = files.filter(item => item.type === category);
                if (filteredItems.length === 0) return null;
                return (
                  <div key={category}>
                    <h2 className="text-xl font-semibold text-white bg-gray-800 rounded-lg w-fit p-1 mb-4">{category}</h2>
                    <div className="grid gap-4">
                      {filteredItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 lg:p-6">
                          <a
                            className="flex items-center justify-between group"
                            href={`https://drive.google.com/uc?export=download&id=${item.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                              {item.title}
                            </h3>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-4">
              {files.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 lg:p-6">
                  <a
                    className="flex items-center justify-between group"
                    href={`https://drive.google.com/uc?export=download&id=${item.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                      {item.title}
                    </h3>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          )
        )}
      </main>
    </div>
  );
}
