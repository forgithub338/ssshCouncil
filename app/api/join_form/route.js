import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // 組織 Line 訊息
    const message = `
📝 新加入申請！

👤 基本資料
姓名：${data.name}
學號：${data.studentId}
班級座號：${data.grade}
Line ID：${data.lineId}

🎯 申請資訊
想加入的部門：${data.preferredRole}
曾加入組織：${data.previousOrgs.join('、')}
社團幹部經驗：${data.leadershipExp}
${data.leadershipExp === "有" ? `擔任職位：${data.leadershipPosition}` : ''}
想嘗試的內容：
${data.interests.join('\n')}

💭 加入動機：
${data.motivation}
    `.trim();

    // 發送到 Line Notify
    const lineNotifyToken = process.env.LINE_NOTIFY_TOKEN_JOIN;
    
    const response = await fetch('https://notify-api.line.me/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${lineNotifyToken}`,
      },
      body: new URLSearchParams({
        message: message,
      }),
    });

    if (!response.ok) {
      throw new Error('Line Notify 發送失敗');
    }

    return NextResponse.json({ success: true, message: '表單提交成功！我們會盡快與您聯繫。' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: '提交失敗，請稍後再試。' },
      { status: 500 }
    );
  }
}
