'use client';
import { useState } from 'react';

export default function Absent() {
  const [formData, setFormData] = useState({
    name: '',
    class: '101', // 預設值
    reason: '',
    date: '',
    deputy: '' // 新增代理人欄位
  });

  // 生成班級選項
  const generateClassOptions = () => {
    const options = [];
    // 一年級
    for (let i = 1; i <= 20; i++) {
      options.push(`1${i < 10 ? '0' + i : i}`);
    }
    // 二年級
    for (let i = 1; i <= 20; i++) {
      options.push(`2${i < 10 ? '0' + i : i}`);
    }
    // 三年級
    for (let i = 1; i <= 20; i++) {
      options.push(`3${i < 10 ? '0' + i : i}`);
    }
    return options;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/absent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          alert('請假申請已送出！');
          setFormData({
            class: '101',
            name: '',
            reason: '',
            date: '',
            deputy: ''
          });
        } else {
          alert('請假申請發送失敗，請稍後再試。');
        }
      } else {
        alert('請假申請發送失敗，請稍後再試。');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('發生錯誤，請稍後再試。');
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">議員請假申請</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                班級
              </label>
              <select
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.class}
                onChange={(e) => setFormData({...formData, class: e.target.value})}
              >
                {generateClassOptions().map((classNum) => (
                  <option key={classNum} value={classNum}>
                    {classNum}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                姓名
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                請假日期
              </label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                代理人
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.deputy}
                onChange={(e) => setFormData({...formData, deputy: e.target.value})}
                placeholder="請輸入代理人姓名"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                請假原因
              </label>
              <textarea
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="4"
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 hover:text-orange-500 transition-colors duration-300"
              >
                送出請假申請
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

