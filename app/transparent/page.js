'use client';
import { useState } from 'react';

export default function Transparent() {
  const [activeSection, setActiveSection] = useState('regulations');

  const sections = {
    regulations: {
      title: "學生自治法規",
      content: [
        {
          title: "臺北市立松山高級中學學生議會常務委員會組織規程",
          link: "/docs/regulations/councul/臺北市立松山高級中學學生議會常務委員會組織規程.pdf"
        },
        {
          title: "臺北市立松山高級中學學生議會秘書處職權行使辦法",
          link: "/docs/regulations/council/臺北市立松山高級中學學生議會秘書處職權行使辦法.pdf"
        },
        {
          title: "臺北市立松山高級中學學生議會職權行使辦法",
          link: "/docs/regulations/council/臺北市立松山高級中學學生議會職權行使辦法.pdf"
        }
      ]
    },
    videos: {
      title: "會議紀錄影片",
      content: [
        {
          title: "第一次常會",
          date: "2024/02/23",
          link: "https://youtube.com/..."
        },
        {
          title: "第二次常會",
          date: "2024/03/01",
          link: "https://youtube.com/..."
        }
      ]
    },
    open_documents: {
      title: "學生議會公開文件",
      content: [
        {
          title: "112學年度第二學期第一次常會會議紀錄",
          date: "2024/02/23",
          link: "/docs/minutes/20240223.pdf"
        },
        {
          title: "112學年度第二學期預算審查報告",
          date: "2024/02/23",
          link: "/docs/budget/112-2.pdf"
        }
      ]
    },
    common_documents: {
      title: "常用議員表件",
      content: [
        {
          title: "議員請假單",
          link: "/docs/forms/absent.pdf"
        },
        {
          title: "議案提案單",
          link: "/docs/forms/proposal.pdf"
        },
        {
          title: "預算審查報告範本",
          link: "/docs/forms/budget_review.pdf"
        }
      ]
    },
    proposal: {
      title: "歷屆議員提案",
      content: [
        {
          title: "建議修改學生會會費收取方式",
          proposer: "王小明",
          date: "2024/02/23",
          status: "審議中"
        },
        {
          title: "建議增設學生置物櫃",
          proposer: "李小華",
          date: "2024/01/15",
          status: "已通過"
        }
      ]
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 側邊欄 */}
      <div className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">議事透明專區</h2>
        <div className="space-y-2">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeSection === key
                ? 'bg-gray-800 text-white'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* 主要內容區 */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {sections[activeSection].title}
        </h1>
        
        <div className="grid gap-4">
          {sections[activeSection].content.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              {activeSection === 'proposal' ? (
                // 提案專用格式
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <div className="mt-2 text-gray-600">
                    <p>提案人：{item.proposer}</p>
                    <p>提案日期：{item.date}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                      item.status === '已通過' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ) : (
                // 一般文件格式
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                  download={item.link.endsWith('.pdf')}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                      {item.title}
                    </h3>
                    {item.date && (
                      <p className="text-sm text-gray-600 mt-1">{item.date}</p>
                    )}
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

