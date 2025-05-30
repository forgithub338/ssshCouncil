'use client';
import { useState } from 'react';

export default function Transparent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [activeOpen, setActiveOpen] = useState('');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' for newest first, 'asc' for oldest first

  const sections = {
    regulations: {
      title: "學生自治法規",
      content: [
        {
          title: "現行學生自治法規彙編_2025_01_19",
          link: "/docs/regulations/現行學生自治法規彙編_2025_01_19.pdf",
          category: "總彙編"
        },
        {
          category: "學生自治聯合會組織章程",
          items: [
            {
              title: "臺北市立松山高級中學學生自治聯合會組織章程(舊)",
              link: "/docs/regulations/independence/臺北市立松山高級中學學生自治聯合會組織章程.pdf"
            }
          ]
        },
        {
          category: "學生議會",
          items: [
            {
              title: "臺北市立松山高級中學學生議會常務委員會組織規程(舊)",
              link: "/docs/regulations/council/臺北市立松山高級中學學生議會常務委員會組織規程.pdf"
            },
            {
              title: "臺北市立松山高級中學學生議會秘書處職權行使辦法(舊)",
              link: "/docs/regulations/council/臺北市立松山高級中學學生議會秘書處職權行使辦法.pdf"
            },
            {
              title: "臺北市立松山高級中學學生議會職權行使辦法(舊)",
              link: "/docs/regulations/council/臺北市立松山高級中學學生議會職權行使辦法.pdf"
            }
          ]
        },
        {
          category: "學生會",
          items: [
            {
              title: "臺北市立松山高級中學學生會正副主席選舉罷免辦法(舊)",
              link: "/docs/regulations/union/臺北市立松山高級中學學生會正副主席選舉罷免辦法.pdf"
            },
            {
              title: "臺北市立松山高級中學學生自治聯合會學生會組織辦法(舊)",
              link: "/docs/regulations/union/臺北市立松山高級中學學生自治聯合會學生會組織辦法.pdf"
            },
            {
              title: "臺北市立松山高級中學選務委員會設置要點(舊)",
              link: "/docs/regulations/union/臺北市立松山高級中學選務委員會設置要點.pdf"
            }
          ]
        },
        {
          category: "其他",
          items: [
            {
              title: "臺北市立松山高級中學學生自治聯合會校務會議代表遴選辦法(舊)",
              link: "/docs/regulations/other/臺北市立松山高級中學學生自治聯合會校務會議代表遴選辦法.pdf"
            }
          ]
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
    forms: {
      title: "常用議員表件",
      content: [
        {
          title: "請假單",
          link: "/docs/forms/請假單.pdf"
        },
        {
          title: "提案單",
          link: "/docs/forms/提案單.pdf"
        },
        {
          title: "動議單",
          link: "/docs/forms/動議單.pdf"
        },
        {
          title: "書面質詢單",
          link: "/docs/forms/書面質詢單.pdf"
        },
        {
          title: "代為行使職權委託書",
          link: "/docs/forms/代為行使職權委託書.pdf"
        }
      ]
    },
    proposal: {
      title: "歷屆議員提案",
      content: [
        {
          title: "歷屆學生議員提案彙編（一至八）",
          link: "/docs/proposal/歷屆學生議員提案彙編（一至八）"
        },
        {
          title: "歷屆學生議員提案彙編（九至十）",
          link: "/docs/proposal/歷屆學生議員提案彙編（九至十）"
        }
      ]
    }
  };

  const open_documents = {
    notice: {
      title: "開會通知單",
      content: [
        {
          title: "113-12-27 第十一屆第六次臨時會議",
          date: "113/12/27",
          link: "/docs/open_documents/01-開會通知單/113-12-27 第十一屆第六次臨時會議.pdf"
        }
      ]
    },
    materials: {
      title: "開會資料",
      content: [
        {
          category: "114-01-07第十一屆第七次臨時會議",
          date: "114/01/07",
          items: [
            {
              title: "11-E4-條文對照表",
              link: "/docs/open_documents/02-開會資料/114-01-07第十一屆第七次臨時會議/11-E4-條文對照表.pdf"
            },
            {
              title: "1131學生會決算案",
              link: "/docs/open_documents/02-開會資料/114-01-07第十一屆第七次臨時會議/1131學生會決算案.pdf"
            },
            {
              title: "1131學生會行政會議紀錄01_02",
              link: "/docs/open_documents/02-開會資料/114-01-07第十一屆第七次臨時會議/1131學生會行政會議紀錄01_02.pdf"
            },
            {
              title: "1131學生會行政會議紀錄01_022",
              link: "/docs/open_documents/02-開會資料/114-01-07第十一屆第七次臨時會議/1131學生會行政會議紀錄01_022.pdf"
            },
            {
              title: "1131決算案附件",
              link: "/docs/open_documents/02-開會資料/114-01-07第十一屆第七次臨時會議/1131決算案附件.pdf"
            },
            {
              title: "1132學生會預算案-複本",
              link: "/docs/open_documents/02-開會資料/114-01-07第十一屆第七次臨時會議/1132學生會預算案-複本.pdf"
            },
            {
              title: "1132預算案附件",
              link: "/docs/open_documents/02-開會資料/114-01-07第十一屆第七次臨時會議/1132預算案附件.pdf"
            },
            {
              title: "學生會1131施政曁決算案報告",
              link: "/docs/open_documents/02-開會資料/114-01-07第十一屆第七次臨時會議/學生會1131施政曁決算案報告.pdf"
            },
            {
              title: "學生會1132施政曁預算案報告",
              link: "/docs/open_documents/02-開會資料/114-01-07第十一屆第七次臨時會議/學生會1132施政曁預算案報告.pdf"
            }
          ]
        }
      ]
    },
    minutes: {
      title: "會議記錄",
      content: [
        {
          category: "常務委員會",
          items: [
            {
              title: "113-10-04 第十一屆第一次常務委員會",
              date: "113/10/04",
              link: "/docs/open_documents/03-會議記錄/常務委員會/113-10-04 第十一屆第一次常務委員會.pdf"
            }
          ]
        },
        {
          category: "一般會議",
          items: [
            {
              title: "108-12-06第一屆1081學生議會成立大會",
              date: "108/12/06",
              link: "/docs/open_documents/03-會議記錄/108-12-06 第一屆1081學生議會成立大會.pdf"
            }
          ]
        }
      ]
    },
  }

  // 新增排序函數
  const sortByDate = (items) => {
    return [...items].sort((a, b) => {
      const dateA = a.date || (a.items && a.items[0]?.date) || '';
      const dateB = b.date || (b.items && b.items[0]?.date) || '';
      
      // 將民國年轉換為西元年進行比較
      const getTimestamp = (dateStr) => {
        if (!dateStr) return 0;
        const [year, month, day] = dateStr.split('/');
        return new Date(parseInt(year) + 1911, parseInt(month) - 1, parseInt(day)).getTime();
      };

      const timestampA = getTimestamp(dateA);
      const timestampB = getTimestamp(dateB);

      return sortOrder === 'desc' ? timestampB - timestampA : timestampA - timestampB;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* 手機版選單按鈕 */}
      <div className="lg:hidden left-0 right-0 top-0 bg-white z-[20] shadow-md p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-500 hover:text-gray-700 p-2"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
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
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveSection(key);
                  setActiveOpen('');
                  setIsSidebarOpen(false);
                }}
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
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">開會紀錄</h2>
        <div className="space-y-2">
              {Object.entries(open_documents).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection('');
                    setActiveOpen(key);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeOpen === key
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* 主要內容區 */}
      <main className="flex-1 p-4 lg:p-8 md:mt-[72px] lg:mt-0">
        {(activeSection || activeOpen) && (
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              {activeSection ? sections[activeSection].title : open_documents[activeOpen].title}
            </h1>
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
        
        {activeSection ? (
          <div className="grid gap-4">
            {sortByDate(sections[activeSection].content).map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 lg:p-6">
                {item.category && !item.items && (
                  <h3 className="text-xl font-semibold text-white bg-gray-800 rounded-lg w-fit p-1 mb-4">{item.category}</h3>
                )}
                {item.items ? (
                  <>
                    <h3 className="text-xl font-semibold text-white bg-gray-800 rounded-lg w-fit p-1 mb-4">{item.category}</h3>
                    <div className="space-y-4">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between group"
                          onClick={(e) => {
                            if (subItem.link.includes('/docs/')) {
                              e.preventDefault();
                              const fileName = subItem.link.split('/').pop();
                              const link = document.createElement('a');
                              link.href = subItem.link;
                              link.setAttribute('download', fileName);
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                            }
                          }}
                        >
                          <div>
                            <h1 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                              {subItem.title}
                            </h1>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                    onClick={(e) => {
                      if (item.link.includes('/docs/')) {
                        e.preventDefault();
                        const fileName = item.link.split('/').pop();
                        const link = document.createElement('a');
                        link.href = item.link;
                        link.setAttribute('download', fileName);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }
                    }}
                  >
                    <div>
                      <h1 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                        {item.title}
                      </h1>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : activeOpen ? (
          <div className="grid gap-4">
            {sortByDate(open_documents[activeOpen].content).map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 lg:p-6">
                {item.category && (
                  <h3 className="text-xl font-semibold text-white bg-gray-800 rounded-lg w-fit p-1 mb-4">
                    {item.category}
                  </h3>
                )}
                {item.items ? (
                  <div className="space-y-4">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group"
                        onClick={(e) => {
                          if (subItem.link.includes('/docs/')) {
                            e.preventDefault();
                            const fileName = subItem.link.split('/').pop();
                            const link = document.createElement('a');
                            link.href = subItem.link;
                            link.setAttribute('download', fileName);
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }
                        }}
                      >
                        <div>
                          <h1 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                            {subItem.title}
                          </h1>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                    onClick={(e) => {
                      if (item.link.includes('/docs/')) {
                        e.preventDefault();
                        const fileName = item.link.split('/').pop();
                        const link = document.createElement('a');
                        link.href = item.link;
                        link.setAttribute('download', fileName);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }
                    }}
                  >
                    <div>
                      <h1 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                        {item.title}
                      </h1>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            請從左側選單選擇要查看的內容
          </div>
        )}
      </main>
    </div>
  );
}