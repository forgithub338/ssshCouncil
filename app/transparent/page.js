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
          title: "112-09-14 第九屆預備會議",
          date: "112/09/14",
          link: "/docs/open_documents/01-開會通知單/112-09-14 第九屆預備會議.pdf"
        },
        {
          title: "112-09-22 第九屆第一次定期會議",
          date: "112/09/22", 
          link: "/docs/open_documents/01-開會通知單/112-09-22 第九屆第一次定期會議.pdf"
        },
        {
          title: "112-10-19 第九屆第二次定期會議",
          date: "112/10/19",
          link: "/docs/open_documents/01-開會通知單/112-10-19 第九屆第二次定期會議.pdf"
        },
        {
          title: "113-01-03 第九屆第三次定期會期會議",
          date: "113/01/03",
          link: "/docs/open_documents/01-開會通知單/113-01-03 第九屆第三次定期會期會議.pdf"
        },
        {
          title: "113-01-24 第十屆預備會議曁第一次會議",
          date: "113/01/24",
          link: "/docs/open_documents/01-開會通知單/113-01-24 第十屆預備會議曁第一次會議.pdf"
        },
        {
          title: "113-03-07 第十屆第二次定期會議",
          date: "113/03/07",
          link: "/docs/open_documents/01-開會通知單/113-03-07 第十屆第二次定期會議.pdf"
        },
        {
          title: "113-03-22 第十屆第三次定期會議",
          date: "113/03/22",
          link: "/docs/open_documents/01-開會通知單/113-03-22 第十屆第三次定期會議.pdf"
        },
        {
          title: "113-03-25 第十屆第一次臨時會議",
          date: "113/03/25",
          link: "/docs/open_documents/01-開會通知單/113-03-25 第十屆第一次臨時會議.pdf"
        },
        {
          title: "113-04-18 第十屆第四次定期會議",
          date: "113/04/18",
          link: "/docs/open_documents/01-開會通知單/113-04-18 第十屆第四次定期會議.pdf"
        },
        {
          title: "113-05-20 第十屆第五次定期會議",
          date: "113/05/20",
          link: "/docs/open_documents/01-開會通知單/113-05-20 第十屆第五次定期會議.pdf"
        },
        {
          title: "113-06-03 第十屆第二次臨時會議",
          date: "113/06/03",
          link: "/docs/open_documents/01-開會通知單/113-06-03 第十屆第二次臨時會議.pdf"
        },
        {
          title: "113-06-06 第十屆第三次臨時會議",
          date: "113/06/06",
          link: "/docs/open_documents/01-開會通知單/113-06-06 第十屆第三次臨時會議.pdf"
        },
        {
          title: "113-06-11 第十屆第六次定期會議",
          date: "113/06/11",
          link: "/docs/open_documents/01-開會通知單/113-06-11 第十屆第六次定期會議.pdf"
        },
        {
          title: "113-06-18 第十屆第四次臨時會議",
          date: "113/06/18",
          link: "/docs/open_documents/01-開會通知單/113-06-18 第十屆第四次臨時會議.pdf"
        },
        {
          title: "113-10-04 第十一屆第一次常務委員會",
          date: "113/10/04",
          link: "/docs/open_documents/01-開會通知單/113-10-04 第十一屆第一次常務委員會.pdf"
        },
        {
          title: "113-10-04 第十一屆預備會議",
          date: "113/10/04",
          link: "/docs/open_documents/01-開會通知單/113-10-04 第十一屆預備會議.pdf"
        },
        {
          title: "113-10-07 第十一屆第一次臨時會議",
          date: "113/10/07",
          link: "/docs/open_documents/01-開會通知單/113-10-07 第十一屆第一次臨時會議.pdf"
        },
        {
          title: "113-10-18 第十一屆第二次臨時會議",
          date: "113/10/18",
          link: "/docs/open_documents/01-開會通知單/113-10-18 第十一屆第二次臨時會議.pdf"
        },
        {
          title: "113-10-28 第十一屆第三次臨時會議",
          date: "113/10/28",
          link: "/docs/open_documents/01-開會通知單/113-10-28 第十一屆第三次臨時會議.pdf"
        },
        {
          title: "113-12-11 第十一屆第四次臨時會議",
          date: "113/12/11",
          link: "/docs/open_documents/01-開會通知單/113-12-11 第十一屆第四次臨時會議.pdf"
        },
        {
          title: "113-12-18 第十一屆第五次臨時會議",
          date: "113/12/18",
          link: "/docs/open_documents/01-開會通知單/113-12-18 第十一屆第五次臨時會議.pdf"
        },
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
          category: "112-09-14 第九屆預備會議",
          date: "112/09/14",
          items: [
            {
              title: "112-09-14 第九届預備備會議開會通知單",
              link: "/docs/open_documents/02-開會資料/112-09-14第九屆預備會議/112-09-14第九届預備備會議開會通知單.pdf"
            }
          ]
        },
        {
          category: "112-09-22 第九屆第一次定期會議",
          date: "112/09/22",
          items: [
            {
              title: "1121學生會代自述",
              link: "/docs/open_documents/02-開會資料/112-09-22第九屆第一次定期會議/1121學生會代自述.pdf"
            },
            {
              title: "1121學生會代選舉紀錄",
              link: "/docs/open_documents/02-開會資料/112-09-22第九屆第一次定期會議/1121學生會代選舉紀錄.pdf"
            },
            {
              title: "1121學生會預算書表",
              link: "/docs/open_documents/02-開會資料/112-09-22第九屆第一次定期會議/1121學生會預算書表.pdf"
            },
            {
              title: "1121學生會預算案附件",
              link: "/docs/open_documents/02-開會資料/112-09-22第九屆第一次定期會議/1121學生會預算案附件.pdf"
            }
          ]
        },
        {
          category: "112-10-19 第九屆第二次定期會議",
          date: "112/10/19",
          items: [
            {
              title: "附件1_1121學生會預算書表",
              link: "/docs/open_documents/02-開會資料/112-10-19 第九屆第二次定期會議/附件1_1121學生會預算書表.pdf"
            },
            {
              title: "附件2_1121學生會預算案附件",
              link: "/docs/open_documents/02-開會資料/112-10-19 第九屆第二次定期會議/附件2_1121學生會預算案附件.pdf"
            },
            {
              title: "附件3_1121學生會校慶計畫",
              link: "/docs/open_documents/02-開會資料/112-10-19 第九屆第二次定期會議/附件3_1121學生會校慶計畫.pdf"
            },
            {
              title: "附件4_1121學生會代選舉紀錄",
              link: "/docs/open_documents/02-開會資料/112-10-19 第九屆第二次定期會議/附件4_1121學生會代選舉紀錄.pdf"
            },
            {
              title: "附件5_1121學生會代自述",
              link: "/docs/open_documents/02-開會資料/112-10-19 第九屆第二次定期會議/附件5_1121學生會代自述.pdf"
            },
            {
              title: "附件6_1121學生會施政方針報告",
              link: "/docs/open_documents/02-開會資料/112-10-19 第九屆第二次定期會議/附件6_1121學生會施政方針報告.pdf"
            }
          ]
        },
        {
          category: "113-01-03 第九屆第三次定期會議",
          date: "113/01/03",
          items: [
            {
              title: "附件1-1121學生會施政曁決算案報告",
              link: "/docs/open_documents/02-開會資料/113-01-03 第九屆第三次定期會議/附件1-1121學生會施政曁決算案報告.pdf"
            },
            {
              title: "附件2-1121學生會決算書表",
              link: "/docs/open_documents/02-開會資料/113-01-03 第九屆第三次定期會議/附件2-1121學生會決算書表.pdf"
            },
            {
              title: "附件3-1122學生會施政曁預算案報告",
              link: "/docs/open_documents/02-開會資料/113-01-03 第九屆第三次定期會議/附件3-1122學生會施政曁預算案報告.pdf"
            },
            {
              title: "附件4-1122學生會預算書表",
              link: "/docs/open_documents/02-開會資料/113-01-03 第九屆第三次定期會議/附件4-1122學生會預算書表.pdf"
            }
          ]
        },
        {
          category: "113-01-24 第十届預備會議曁第一次會議",
          date: "113/01/24",
          items: [
            {
              title: "113-01-24 第十届預備會議曁第一次會議",
              link: "/docs/open_documents/02-開會資料/113-01-24第十届預備會議曁第一次會議/113-01-24第十届預備會議曁第一次會議.pdf"
            },
            {
              title: "SSLEC-1122-預備會議曁第一次會議",
              link: "/docs/open_documents/02-開會資料/113-01-24第十届預備會議曁第一次會議/SSLEC-1122-預備會議曁第一次會議.pptx"
            },
            {
              title: "附件1-上次會議紀錄",
              link: "/docs/open_documents/02-開會資料/113-01-24第十届預備會議曁第一次會議/附件1-上次會議紀錄.pdf"
            },
            {
              title: "附件2-1121學生會施政曁決算案報告",
              link: "/docs/open_documents/02-開會資料/113-01-24第十届預備會議曁第一次會議/附件2-1121學生會施政曁決算案報告.pdf"
            },
            {
              title: "附件3-1121學生會決算書表",
              link: "/docs/open_documents/02-開會資料/113-01-24第十届預備會議曁第一次會議/附件3-1121學生會決算書表.pdf"
            },
            {
              title: "附件4-1122學生議員提案001",
              link: "/docs/open_documents/02-開會資料/113-01-24第十届預備會議曁第一次會議/附件4-1122學生議員提案001.pdf"
            }
          ]
        },
        {
          category: "113-03-07 第十屆第二次定期會議",
          date: "113/03/07",
          items: [
            {
              title: "113-03-07 第十届第二次定期會議",
              link: "/docs/open_documents/02-開會資料/113-03-07 第十屆第二次定期會議/113-03-07第十届第二次定期會議.pdf"
            },
            {
              title: "SSLEC-1122-第二次會議",
              link: "/docs/open_documents/02-開會資料/113-03-07 第十屆第二次定期會議/SSLEC-1122-第二次會議.pdf"
            },
            {
              title: "附件1-上次會議紀錄",
              link: "/docs/open_documents/02-開會資料/113-03-07 第十屆第二次定期會議/附件1-上次會議紀錄.pdf"
            },
            {
              title: "附件2-1122學生會預算案",
              link: "/docs/open_documents/02-開會資料/113-03-07 第十屆第二次定期會議/附件2-1122學生會預算案.pdf"
            },
            {
              title: "附件3-1122學生會施政曁預算案報告",
              link: "/docs/open_documents/02-開會資料/113-03-07 第十屆第二次定期會議/附件3-1122學生會施政曁預算案報告.pdf"
            },
            {
              title: "附件4-1122學生議員提案001",
              link: "/docs/open_documents/02-開會資料/113-03-07 第十屆第二次定期會議/附件4-1122學生議員提案001.pdf"
            }
          ]
        },
        {
          category: "113-03-22 第十届第三次定期會議",
          date: "113/03/22",
          items: [
            {
              title: "113-03-07 第十届第三次定期會議",
              link: "/docs/open_documents/02-開會資料/113-03-22第十届第三次定期會議/113-03-07第十届第三次定期會議.pdf"
            },
            {
              title: "附件1-上次會議紀錄",
              link: "/docs/open_documents/02-開會資料/113-03-22第十届第三次定期會議/附件1-上次會議紀錄.pdf"
            },
            {
              title: "附件2-1122學生會預算案",
              link: "/docs/open_documents/02-開會資料/113-03-22第十届第三次定期會議/附件2-1122學生會預算案.pdf"
            },
            {
              title: "附件3-1122學生會施政曁預算案報告",
              link: "/docs/open_documents/02-開會資料/113-03-22第十届第三次定期會議/附件3-1122學生會施政曁預算案報告.pdf"
            },
            {
              title: "附件4-1122學生議員提案001",
              link: "/docs/open_documents/02-開會資料/113-03-22第十届第三次定期會議/附件4-1122學生議員提案001.pdf"
            },
            {
              title: "附件5-1122學生議員提案002",
              link: "/docs/open_documents/02-開會資料/113-03-22第十届第三次定期會議/附件5-1122學生議員提案002.pdf"
            },
            {
              title: "附件6-學生議員提案003",
              link: "/docs/open_documents/02-開會資料/113-03-22第十届第三次定期會議/附件6-學生議員提案003.pdf"
            },
            {
              title: "附件7-學生會提案",
              link: "/docs/open_documents/02-開會資料/113-03-22第十届第三次定期會議/附件7-學生會提案.pdf"
            },
            {
              title: "附件8-會議簡報",
              link: "/docs/open_documents/02-開會資料/113-03-22第十届第三次定期會議/附件8-會議簡報.pdf"
            }
          ]
        },
        {
          category: "113-03-25 第十屆第一次臨時會議",
          date: "113/03/25",
          items: [
            {
              title: "113-03-25 第十届第一次臨時會議",
              link: "/docs/open_documents/02-開會資料/113-03-25第十屆第一次臨時會議/113-03-25第十届第一次臨時會議.pdf"
            },
            {
              title: "附件1-上次會議記錄",
              link: "/docs/open_documents/02-開會資料/113-03-25第十屆第一次臨時會議/附件1-上次會議記錄.pdf"
            },
            {
              title: "附件2-1122學生會預算案",
              link: "/docs/open_documents/02-開會資料/113-03-25第十屆第一次臨時會議/附件2-1122學生會預算案.pdf"
            },
            {
              title: "附件3-1122學生會施政曁預算案報告",
              link: "/docs/open_documents/02-開會資料/113-03-25第十屆第一次臨時會議/附件3-1122學生會施政曁預算案報告.pdf"
            },
            {
              title: "附件4-1122學生議員提案001",
              link: "/docs/open_documents/02-開會資料/113-03-25第十屆第一次臨時會議/附件4-1122學生議員提案001.pdf"
            },
            {
              title: "附件5-1122學生議員提案002",
              link: "/docs/open_documents/02-開會資料/113-03-25第十屆第一次臨時會議/附件5-1122學生議員提案002.pdf"
            },
            {
              title: "附件6-1122學生議員提案003",
              link: "/docs/open_documents/02-開會資料/113-03-25第十屆第一次臨時會議/附件6-1122學生議員提案003.pdf"
            },
            {
              title: "附件7-學生會提案",
              link: "/docs/open_documents/02-開會資料/113-03-25第十屆第一次臨時會議/附件7-學生會提案.pdf"
            },
            {
              title: "附件8-學生會畢業活動預算報告",
              link: "/docs/open_documents/02-開會資料/113-03-25第十屆第一次臨時會議/附件8-學生會畢業活動預算報告.pdf"
            }
          ]
        },
        {
          category: "113-04-18 第十屆第四次定期會議",
          date: "113/04/18",
          items: [
            {
              title: "113-04-18 第十届第四次定期會議",
              link: "/docs/open_documents/02-開會資料/113-04-18第十屆第四次定期會議/113-04-18第十届第四次定期會議.pdf"
            },
            {
              title: "附件1-上次會議紀錄",
              link: "/docs/open_documents/02-開會資料/113-04-18第十屆第四次定期會議/附件1-上次會議紀錄.pdf"
            },
            {
              title: "附件2-1122學生會施政監預算案報告",
              link: "/docs/open_documents/02-開會資料/113-04-18第十屆第四次定期會議/附件2-1122學生會施政監預算案報告.pdf"
            },
            {
              title: "附件3-1122學生議員提案002",
              link: "/docs/open_documents/02-開會資料/113-04-18第十屆第四次定期會議/附件3-1122學生議員提案002.pdf"
            },
            {
              title: "附件4-1122學生會提案001",
              link: "/docs/open_documents/02-開會資料/113-04-18第十屆第四次定期會議/附件4-1122學生會提案001.pdf"
            },
            {
              title: "附件5-學生會組織法第九條修正動議",
              link: "/docs/open_documents/02-開會資料/113-04-18第十屆第四次定期會議/附件5-學生會組織法第九條修正動議,pdf"
            },
            {
              title: "附件6-1122學生議員提案003",
              link: "/docs/open_documents/02-開會資料/113-04-18第十屆第四次定期會議/附件6-1122學生議員提案003.pdf"
            },
            {
              title: "附件7-1122學生議員提案004",
              link: "/docs/open_documents/02-開會資料/113-04-18第十屆第四次定期會議/附件7-1122學生議員提案004.pdf"
            },
            {
              title: "附件8-書面質詢單002",
              link: "/docs/open_documents/02-開會資料/113-04-18第十屆第四次定期會議/附件8-書面質詢單002.pdf"
            }
          ]
        },
        {
          category: "113-05-20 第十届第五次定期會議",
          date: "113/05/20",
          items: [
            {
              title: "113-05-20 第十届第五次定期會期會議",
              link: "/docs/open_documents/02-開會資料/113-05-20第十届第五次定期會議/113-05-20 第十届第五次定期會期會議.pdf"
            },
            {
              title: "附件1-上次會議紀錄",
              link: "/docs/open_documents/02-開會資料/113-05-20第十届第五次定期會議/附件1-上次會議紀錄.pdf"
            },
            {
              title: "附件2-書面質詢單002",
              link: "/docs/open_documents/02-開會資料/113-05-20第十届第五次定期會議/附件2-書面質詢單002.pdf"
            },
            {
              title: "附件3-學生會組織辦法修正草案001",
              link: "/docs/open_documents/02-開會資料/113-05-20第十届第五次定期會議/附件3-學生會組織辦法修正草案001.pdf"
            },
            {
              title: "附件4-學生會組織辦法修正草案001表格",
              link: "/docs/open_documents/02-開會資料/113-05-20第十届第五次定期會議/附件4-學生會組織辦法修正草案001表格.pdf"
            },
            {
              title: "附件5-學生議員提案004",
              link: "/docs/open_documents/02-開會資料/113-05-20第十届第五次定期會議/附件5-學生議員提案004.pdf"
            },
            {
              title: "附件6-組織章程第四條條文修正草案001",
              link: "/docs/open_documents/02-開會資料/113-05-20第十届第五次定期會議/附件6-組織章程第四條條文修正草案001.pdf"
            },
            {
              title: "附件7-會議簡報",
              link: "/docs/open_documents/02-開會資料/113-05-20第十届第五次定期會議/附件7-會議簡報.pdf"
            },
            {
              title: "附件8-學生會1122書面質詢答覆",
              link: "/docs/open_documents/02-開會資料/113-05-20第十届第五次定期會議/附件8-學生會1122書面質詢答覆.pdf"
            }
          ]
        },
        {
          category: "113-06-03 第十屆第二次臨時會議",
          date: "113/06/03",
          items: [
            {
              title: "113-06-03 第十届第二次臨時會議",
              link: "/docs/open_documents/02-開會資料/113-06-03第十屆第二次臨時會議/113-06-03 第十届第二次臨時會議.pdf"
            },
            {
              title: "附件1-上次會議紀錄",
              link: "/docs/open_documents/02-開會資料/113-06-03第十屆第二次臨時會議/附件1-上次會議紀錄.pdf"
            },
            {
              title: "附件2-1122議長改選案曁臨時會連署署書",
              link: "/docs/open_documents/02-開會資料/113-06-03第十屆第二次臨時會議/附件2-1122議長改選案曁臨時會連署署書.pdf"
            },
            {
              title: "附件3-學生議員提案004",
              link: "/docs/open_documents/02-開會資料/113-06-03第十屆第二次臨時會議/附件3-學生議員提案004.pdf"
            },
            {
              title: "附件4-學生議員提案004提案討論",
              link: "/docs/open_documents/02-開會資料/113-06-03第十屆第二次臨時會議/附件4-學生議員提案004提案討論.pdf"
            },
            {
              title: "附件5-學生會組織辦法修正草案001",
              link: "/docs/open_documents/02-開會資料/113-06-03第十屆第二次臨時會議/附件5-學生會組織辦法修正草案001.pdf"
            },
            {
              title: "附件6-學生會組織辦法修正草案001提案討論",
              link: "/docs/open_documents/02-開會資料/113-06-03第十屆第二次臨時會議/附件6-學生會組織辦法修正草案001提案討論.pdf"
            }
          ]
        },
        {
          category: "113-06-06 第十屆第三次臨時會議",
          items: [
            {
              title: "113-06-03_臨時2_會議記錄",
              link: "/docs/open_documents/02-開會資料/113-06-06第十屆第三次臨時會議/113-06-03_臨時2_會議記錄.pdf"
            },
            {
              title: "113-06-06更正 第十届第三次臨時會時會議",
              link: "/docs/open_documents/02-開會資料/113-06-06第十屆第三次臨時會議/113-06-06 更正第十届第三次臨時會時會議.pdf"
            },
            {
              title: "開會資料1甲冊收案文件",
              link: "/docs/open_documents/02-開會資料/113-06-06第十屆第三次臨時會議/開會資料1 甲冊收案文件.pdf"
            },
            {
              title: "開會資料2 乙冊 秘書處重製",
              link: "/docs/open_documents/02-開會資料/113-06-06第十屆第三次臨時會議/開會資料2 乙冊 秘書處重製.pdf"
            },
            {
              title: "開會資料2乙冊_更正秘書處重處重製",
              link: "/docs/open_documents/02-開會資料/113-06-06第十屆第三次臨時會議/開會資料2 乙冊_更正秘書處重處重製.pdf"
            }
          ]
        },
        {
          category: "113-06-11 第十屆第六次定期會議",
          date: "113/06/11",
          items: [
            {
              title: "113-06-06 第十届1122第三次臨時會",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/113-06-06第十届1122第三次臨時會.pdf"
            },
            {
              title: "113-06-11 第十届第六次定期會議",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/113-06-11第十届第六次定期會議.pdf"
            },
            {
              title: "附件1-學生會組織辦法草案",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件1-學生會組織辦法草案.pdf"
            },
            {
              title: "附件2-學生會組織辦法草案(通過條文)",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件2-學生會組織辦法草案(通過條文).pdf"
            },
            {
              title: "附件2更正-學生會組織辦法草案(通過條文)",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件2更正-學生會組織辦法草案(通過條文).pdf"
            },
            {
              title: "附件3-松山高中學生自治聯合會會費收取數額案",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件3-松山高中學生自治聯合會會費收取數額案.pdf"
            },
            {
              title: "附件4-校級會議學生代表產生曁職權行使辦法草案",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件4-校級會議學生代表產生曁職權行使辦法草案.pdf"
            },
            {
              title: "附件5-學生會1122施政曁決算案報告",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件5-學生會1122施政曁決算案報告.pdf"
            },
            {
              title: "附件6-1122學生會決算表案",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件6-1122學生會決算表案.pdf"
            },
            {
              title: "附件7-學生會1131施政曁預算案報告",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件7-學生會1131施政曁預算案報告.pdf"
            },
            {
              title: "附件8-總召競選簡報",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件8-總召競選簡報.pdf"
            },
            {
              title: "附件9-1131學生會預算案",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件9-1131學生會預算案.pdf"
            },
            {
              title: "附件10-網站示例",
              link: "/docs/open_documents/02-開會資料/113-06-11第十屆第六次定期會議/附件10-網站示例.pdf"
            }
          ]
        },
        {
          category: "113-06-18 第十届第四次臨時會議",
          date: "113/06/18",
          items: [
            {
              title: "113-06-18 第十届1122第四次臨時會",
              link: "/docs/open_documents/02-開會資料/113-06-18第十届第四次臨時會議/113-06-18第十届1122第四次臨時會.pdf"
            },
            {
              title: "附件1-學生會1131施政曁預算案報告",
              link: "/docs/open_documents/02-開會資料/113-06-18第十届第四次臨時會議/附件1-學生會1131施政曁預算案報告.pdf"
            },
            {
              title: "附件2-1131學生會預算案",
              link: "/docs/open_documents/02-開會資料/113-06-18第十届第四次臨時會議/附件2-1131學生會預算案.pdf"
            },
            {
              title: "附件3-學生會組織辦法草案",
              link: "/docs/open_documents/02-開會資料/113-06-18第十届第四次臨時會議/附件3-學生會組織辦法草案.pdf"
            },
            {
              title: "附件4-學生會組織辦法草案第七及九條復議動議",
              link: "/docs/open_documents/02-開會資料/113-06-18第十届第四次臨時會議/附件4-學生會組織辦法草案第七及九條復議動議。pdf"
            },
            {
              title: "附件5-學生會組織辦法草案(通過條文)",
              link: "/docs/open_documents/02-開會資料/113-06-18第十届第四次臨時會議/附件5-學生會組織辦法草案(通過條文).pdf"
            }
          ]
        },
        {
          category: "113-10-04 第十一屆預備會議",
          date: "113/10/04",
          items: [
            {
              title: "113-06-18第十届第四次臨時會議議事錄.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-04 第十一屆預備會議/113-06-18第十届第四次臨時會議議事錄.pdf"
            },
            {
              title: "113-10-04第十一届預備會議開會通知單.pdf", 
              link: "/docs/open_documents/02-開會資料/113-10-04 第十一屆預備會議/113-10-04第十一届預備會議開會通知單.pdf"
            }
          ]
        },
        {
          category: "113-10-07第十一屆第一次臨時會議",
          date: "113/10/07",
          items: [
            {
              title: "附件1-議事錄.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-07第十一屆第一次臨時會議/附件1-議事錄.pdf"
            },
            {
              title: "附件2-開會通知單.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-07第十一屆第一次臨時會議/附件2-開會通知單.pdf"
            },
            {
              title: "附件3-開會資料.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-07第十一屆第一次臨時會議/附件3-開會資料.pdf"
            }
          ]
        },
        {
          category: "113-10-21第十一届第二次臨時會議",
          date: "113/10/21",
          items: [
            {
              title: "113-10-21-開會資料.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-21第十一届第二次臨時會議/113-10-21-開會資料.pdf"
            },
            {
              title: "113-10-21-開會資料-更正本.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-21第十一届第二次臨時會議/113-10-21-開會資料-更正本.pdf"
            },
            {
              title: "113-10-21-開會資料-第二次更正本.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-21第十一届第二次臨時會議/113-10-21-開會資料-第二次更正本.pdf"
            },
            {
              title: "1131預算案補充報告.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-21第十一届第二次臨時會議/1131預算案補充報告.pdf"
            },
            {
              title: "學生會1131施政曁預算案報告.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-21第十一届第二次臨時會議/學生會1131施政曁預算案報告.pdf"
            }
          ]
        },
        {
          category: "113-10-28第十一屆第三次臨時會議",
          date: "113/10/28",
          items: [
            {
              title: "113-10-28-學生會提案單曁會議資料.pdf",
              link: "/docs/open_documents/02-開會資料/113-10-28第十一屆第三次臨時會議/113-10-28-學生會提案單曁會議資料.pdf"
            },
            {
              title: "1131學生會預算案(最新版).pdf",
              link: "/docs/open_documents/02-開會資料/113-10-28第十一屆第三次臨時會議/1131學生會預算案(最新版).pdf"
            }
          ]
        },
        {
          category: "113-12-11第十一屆第四次臨時會議",
          date: "113/12/11",
          items: [
            {
              title: "113-12-11-條文對照表",
              link: "/docs/open_documents/02-開會資料/113-12-11第十一屆第四次臨時會議/113-12-11-條文對照表.pdf"
            },
            {
              title: "113-12-11-開會資料",
              link: "/docs/open_documents/02-開會資料/113-12-11第十一屆第四次臨時會議/113-12-11-開會資料.pdf"
            }
          ]
        },
        {
          category: "113-12-18第十一屆第五次臨時會議",
          date: "113/12/18",
          items: [
            {
            title: "113-12-18-開會資料",
            link: "/docs/open_documents/02-開會資料/113-12-18第十一屆第五次臨時會議/113-12-18-開會資料.pdf"
          }
        ]
        },
        {
          category: "113-12-27第十一屆第六次臨時會議",
          date: "113/12/27",
          items: [
            {
              title: "附件1-11-S8-議事錄",
              link: "/docs/open_documents/02-開會資料/113-12-27第十一屆第六次臨時會議/附件1-11-S8-議事錄.pdf"
            },
            {
              title: "附件2-11-S9-議事錄",
              link: "/docs/open_documents/02-開會資料/113-12-27第十一屆第六次臨時會議/附件2-11-S9-議事錄.pdf"
            },
            {
              title: "附件3-本會議事錄遺失相關事宜",
              link: "/docs/open_documents/02-開會資料/113-12-27第十一屆第六次臨時會議/附件3-本會議事錄遺失相關事宜.pdf"
            },
            {
              title: "附件4-本會第五次臨時會議之程序相關事宜意見書",
              link: "/docs/open_documents/02-開會資料/113-12-27第十一屆第六次臨時會議/附件4-本會第五次臨時會議之程序相關事宜意見書.pdf"
            }
          ]
        },
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
            },
            {
              title: "113-10-18 第十一屆第二次常務委員會",
              date: "113/10/18",
              link: "/docs/open_documents/03-會議記錄/常務委員會/113-10-18 第十一屆第二次常務委員會.pdf"
            },
            {
              title: "113-10-25 第十一屆第三次常務委員會",
              date: "113/10/25",
              link: "/docs/open_documents/03-會議記錄/常務委員會/113-10-25 第十一屆第三次常務委員會.pdf"
            },
            {
              title: "113-12-06 第十一屆第七次常務委員會",
              date: "113/12/06",
              link: "/docs/open_documents/03-會議記錄/常務委員會/113-12-06 第十一屆第七次常務委員會.pdf"
            },
            {
              title: "113-12-23 第十一屆第八次常務委員會",
              date: "113/12/23",
              link: "/docs/open_documents/03-會議記錄/常務委員會/113-12-23 第十一屆第八次常務委員會.pdf"
            },
            {
              title: "113-12-24 第十一屆第九次常務委員會",
              date: "113/12/24",
              link: "/docs/open_documents/03-會議記錄/常務委員會/113-12-24 第十一屆第九次常務委員會.pdf"
            },
            {
              title: "113-01-03 第十一屆第十一次常務委員會",
              date: "113/01/03",
              link: "/docs/open_documents/03-會議記錄/常務委員會/113-01-03 第十一屆第十一次常務委員會.pdf"
            },
            {
              title: "114-01-06 第十一屆第十二次常務委員會",
              date: "114/01/06",
              link: "/docs/open_documents/03-會議記錄/常務委員會/114-01-06 第十一屆第十二次常務委員會.pdf"
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
            },
            {
              title: "109-01-03第一屆1081第二次定期會",
              date: "109/01/03",
              link: "/docs/open_documents/03-會議記錄/109-01-03 第一屆1081第二次定期會.pdf"
            },
            {
              title: "109-01-10第一屆1081第一次臨時會",
              date: "109/01/10",
              link: "/docs/open_documents/03-會議記錄/109-01-10 第一屆1081第一次臨時會.pdf"
            },
            {
              title: "109-03-13第二屆1081預備會",
              date: "109/03/13",
              link: "/docs/open_documents/03-會議記錄/109-03-13 第二屆1081預備會.pdf"
            },
            {
              title: "109-05-01第二屆1082第一次定期會",
              date: "109/05/01",
              link: "/docs/open_documents/03-會議記錄/109-05-01 第二屆1082第一次定期會.pdf"
            },
            {
              title: "109-05-08第二屆1082第二次定期會",
              date: "109/05/08",
              link: "/docs/open_documents/03-會議記錄/109-05-08 第二屆1082第二次定期會.pdf"
            },
            {
              title: "109-05-22第二屆1082第一次臨時會",
              date: "109/05/22",
              link: "/docs/open_documents/03-會議記錄/109-05-22 第二屆1082第一次臨時會.pdf"
            },
            {
              title: "109-06-12第二屆1082第三次定期會",
              date: "109/06/12",
              link: "/docs/open_documents/03-會議記錄/109-06-12 第二屆1082第三次定期會.pdf"
            },
            {
              title: "109-09-18第三屆1091預備備會",
              date: "109/09/18",
              link: "/docs/open_documents/03-會議記錄/109-09-18 第三屆1091預備備會.pdf"
            },
            {
              title: "109-10-23第三屆1091第一次定期會",
              date: "109/10/23",
              link: "/docs/open_documents/03-會議記錄/109-10-23 第三屆1091第一次定期會.pdf"
            },
            {
              title: "109-12-18第三屆1091第二次定期會",
              date: "109/12/18",
              link: "/docs/open_documents/03-會議記錄/109-12-18 第三屆1091第二次定期會.pdf"
            },
            {
              title: "110-01-06第三屆1091第三次定期會",
              date: "110/01/06",
              link: "/docs/open_documents/03-會議記錄/110-01-06 第三屆1091第三次定期會.pdf"
            },
            {
              title: "110-03-05 第四屆1092預備會",
              date: "110/03/05",
              link: "/docs/open_documents/03-會議記錄/110-03-05 第四屆1092預備會.pdf"
            },
            {
              title: "110-03-12第四屆1092第一次定期會",
              date: "110/03/12",
              link: "/docs/open_documents/03-會議記錄/110-03-12 第四屆1092第一次定期會.pdf"
            },
            {
              title: "110-05-24第四屆1092第二次定期會",
              date: "110/05/24",
              link: "/docs/open_documents/03-會議記錄/110-05-24 第四屆1092第二次定期會.pdf"
            },
            {
              title: "110-07-23第四屆1092第三次定期會",
              date: "110/07/23",
              link: "/docs/open_documents/03-會議記錄/110-07-23 第四屆1092第三次定期會.pdf"
            },
            {
              title: "110-09-17 第五屆1101預備會",
              date: "110/09/17",
              link: "/docs/open_documents/03-會議記錄/110-09-17 第五屆1101預備會.pdf"
            },
            {
              title: "110-11-04第五屆1101第一次臨時會",
              date: "110/11/04",
              link: "/docs/open_documents/03-會議記錄/110-11-04 第五屆1101第一次臨時會.pdf"
            },
            {
              title: "110-12-16第五屆1101第一次定期會",
              date: "110/12/16",
              link: "/docs/open_documents/03-會議記錄/110-12-16 第五屆1101第一次定期會.pdf"
            },
            {
              title: "110-12-24第五屆1101第二次定期會",
              date: "110/12/24",
              link: "/docs/open_documents/03-會議記錄/110-12-24 第五屆1101第二次定期會.pdf"
            },
            {
              title: "111-03-14第六屆1102預備會",
              date: "111/03/14",
              link: "/docs/open_documents/03-會議記錄/111-03-14 第六屆1102預備會.pdf"
            },
            {
              title: "111-04-08第六屆1102第一次定期會",
              date: "111/04/08",
              link: "/docs/open_documents/03-會議記錄/111-04-08 第六屆1102第一次定期會.pdf"
            },
            {
              title: "111-05-16第六屆1102第一次臨時會",
              date: "111/05/16",
              link: "/docs/open_documents/03-會議記錄/111-05-16 第六屆1102第一次臨時會.pdf"
            },
            {
              title: "111-09-15 第七屆1111預備會",
              date: "111/09/15",
              link: "/docs/open_documents/03-會議記錄/111-09-15 第七屆1111預備會.pdf"
            },
            {
              title: "111-09-29第七屆1111第一次定期會",
              date: "111/09/29",
              link: "/docs/open_documents/03-會議記錄/111-09-29 第七屆1111第一次定期會.pdf"
            },
            {
              title: "112-01-05第七屆1111第二次定期會",
              date: "112/01/05",
              link: "/docs/open_documents/03-會議記錄/112-01-05 第七屆1111第二次定期會.pdf"
            },
            {
              title: "112-01-19第七屆11111第一次臨時會",
              date: "112/01/19",
              link: "/docs/open_documents/03-會議記錄/112-01-19 第七屆11111第一次臨時會.pdf"
            },
            {
              title: "112-03-09第八屆1112預備會",
              date: "112/03/09",
              link: "/docs/open_documents/03-會議記錄/112-03-09 第八屆1112預備會.pdf"
            },
            {
              title: "112-04-14第八屆1112第一次定期會",
              date: "112/04/14",
              link: "/docs/open_documents/03-會議記錄/112-04-14 第八屆1112第一次定期會.pdf"
            },
            {
              title: "112-04-21第八屆1112第一次臨時會",
              date: "112/04/21",
              link: "/docs/open_documents/03-會議記錄/112-04-21 第八屆1112第一次臨時會.pdf"
            },
            {
              title: "112-06-16第八屆1112第二次定期會",
              date: "112/06/16",
              link: "/docs/open_documents/03-會議記錄/112-06-16 第八屆1112第二次定期會.pdf"
            },
            {
              title: "112-09-14 第九屆1121預備會",
              date: "112/09/14",
              link: "/docs/open_documents/03-會議記錄/112-09-14 第九屆1121預備會.pdf"
            },
            {
              title: "112-09-22第九屆1121第一次定期會",
              date: "112/09/22",
              link: "/docs/open_documents/03-會議記錄/112-09-22 第九屆1121第一次定期會.pdf"
            },
            {
              title: "112-10-19第九屆1121第二次定期會",
              date: "112/10/19",
              link: "/docs/open_documents/03-會議記錄/112-10-19 第九屆1121第二次定期會.pdf"
            },
            {
              title: "113-01-03第九屆1121第三次定期會",
              date: "113/01/03",
              link: "/docs/open_documents/03-會議記錄/113-01-03 第九屆1121第三次定期會.pdf"
            },
            {
              title: "113-01-24_25第十屆1122預備曁第一次定期會",
              date: "113/01/24",
              link: "/docs/open_documents/03-會議記錄/113-01-24_25 第十屆1122預備曁第一次定期會.pdf"
            },
            {
              title: "113-03-07第十屆1122第二次定期會",
              date: "113/03/07",
              link: "/docs/open_documents/03-會議記錄/113-03-07 第十屆1122第二次定期會.pdf"
            },
            {
              title: "113-03-22第十屆1122第三次定期會",
              date: "113/03/22",
              link: "/docs/open_documents/03-會議記錄/113-03-22 第十屆1122第三次定期會.pdf"
            },
            {
              title: "113-03-25第十屆1122第一次臨時會",
              date: "113/03/25",
              link: "/docs/open_documents/03-會議記錄/113-03-25 第十屆1122第一次臨時會.pdf"
            },
            {
              title: "113-04-18 第十屆1122第四次定期會",
              date: "113/04/18",
              link: "/docs/open_documents/03-會議記錄/113-04-18 第十屆1122第四次定期會.pdf"
            },
            {
              title: "113-05-20第十屆1122第五次定期會",
              date: "113/05/20",
              link: "/docs/open_documents/03-會議記錄/113-05-20 第十屆1122第五次定期會.pdf"
            },
            {
              title: "113-06-03第十屆1122第二次臨時會",
              date: "113/06/03",
              link: "/docs/open_documents/03-會議記錄/113-06-03 第十屆1122第二次臨時會.pdf"
            },
            {
              title: "113-06-06_07第十屆1122第三次臨時會",
              date: "113/06/06",
              link: "/docs/open_documents/03-會議記錄/113-06-06_07 第十屆1122第三次臨時會.pdf"
            },
            {
              title: "113-06-11_14第十屆1122第六次定期會議",
              date: "113/06/11",
              link: "/docs/open_documents/03-會議記錄/113-06-11_14 第十屆1122第六次定期會議.pdf"
            },
            {
              title: "113-06-18 第十屆第四次臨時會議議事錄",
              date: "113/06/18",
              link: "/docs/open_documents/03-會議記錄/113-06-18 第十屆第四次臨時會議議事錄.pdf"
            },
            {
              title: "113-10-04 第十一屆備會議",
              date: "113/10/04",
              link: "/docs/open_documents/03-會議記錄/113-10-04 第十一屆備會議.pdf"
            },
            {
              title: "113-10-07 第十一屆第一次臨時會議",
              date: "113/10/07",
              link: "/docs/open_documents/03-會議記錄/113-10-07 第十一屆第一次臨時會議.pdf"
            },
            {
              title: "113-10-21 第十一屆第二次臨時會議",
              date: "113/10/21",
              link: "/docs/open_documents/03-會議記錄/113-10-21 第十一屆第二次臨時會議.pdf"
            },
            {
              title: "113-12-27 第十一屆第六次臨時會議",
              date: "113/12/27",
              link: "/docs/open_documents/03-會議記錄/113-12-27 第十一屆第六次臨時會議.pdf"
            },
            {
              title: "114-01-08 第十一屆第七次臨時會議",
              date: "114/01/08",
              link: "/docs/open_documents/03-會議記錄/114-01-08 第十一屆第七次臨時會議.pdf"
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