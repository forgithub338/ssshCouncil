'use client';
import { useRef, useState } from "react";
import { XMarkIcon, DocumentIcon } from '@heroicons/react/24/outline';
import typeOptions from "@/lib/typeOptions";

export default function Upload() {
  const [formData, setFormData] = useState({
    bigType: "",
    smallType: "",
    title: "",
    pdf: null,
    pdfName: "",
    videoHref: ""
  });

  const currentType = typeOptions.find((opt) => opt.bigType === formData.bigType);
  const pdfInputRef = useRef(null);

  async function base64Converse(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, pdf: reader.result, pdfName: file.name });
    };
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify(formData)
    });
    if (!res.ok) {
      const errorText = await res.text();
      console.error("API 回傳錯誤：", errorText);
      throw new Error("API error");
    }
    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 lg:p-8 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-white bg-gray-800 rounded-lg w-fit p-1 mb-4">上傳文件</h1>

        {/* 主類別 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">上傳檔案主類別</label>
          <select
            required
            value={formData.bigType}
            onChange={(e) =>
              setFormData({
                ...formData,
                bigType: e.target.value,
                smallType: ""
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">請選擇</option>
            {typeOptions.map((opt) => (
              <option key={opt.id} value={opt.bigType}>
                {opt.bigType}
              </option>
            ))}
          </select>
        </div>

        {/* 子類別 */}
        {currentType?.smallType && (
          <div>
            <label className="block text-gray-700 font-medium mb-2">請選擇子類別</label>
            <select
              required
              value={formData.smallType}
              onChange={(e) => setFormData({ ...formData, smallType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">請選擇</option>
              {currentType.smallType.map((opt) => (
                <option key={opt.id} value={opt.name}>{opt.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* 標題 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">上傳文件名稱</label>
          <input
            required
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* PDF 上傳 */}
        {formData.bigType && formData.bigType !== "會議記錄影片" && (
          <>
            <div
              onClick={() => pdfInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                ref={pdfInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={base64Converse}
              />
              <DocumentIcon className="h-8 w-8 mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">點擊以上傳 PDF 文件</p>
              <p className="text-xs text-gray-400 mt-1">僅支援 PDF 格式</p>
            </div>

            {formData.pdf && (
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700 mb-2">已選擇的文件：</p>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center overflow-hidden">
                    <DocumentIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600 truncate">{formData.pdfName}</p>
                  </div>
                  <div className="flex items-center ml-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, pdf: null, pdfName: "" })}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* 影片連結 */}
        {formData.bigType === "會議記錄影片" && (
          <div>
            <label className="block text-gray-700 font-medium mb-2">影片連結（YouTube / Google Drive）</label>
            <input
              required
              type="text"
              value={formData.videoHref}
              onChange={(e) => setFormData({ ...formData, videoHref: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        )}

        {/* 提交按鈕 */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            上傳
          </button>
        </div>
      </form>
    </main>
  );
}
