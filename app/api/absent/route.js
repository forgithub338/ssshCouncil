import { NextResponse } from 'next/server';

// LINE Notify Token
const LINE_NOTIFY_TOKEN = process.env.LINE_NOTIFY_TOKEN;

// 處理 OPTIONS 請求（預檢請求）
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

// 處理 POST 請求
export async function POST(req) {
  try {
    const data = await req.json();
    
    // 格式化請假訊息
    const message = `
📝 議員請假通知
班級：${data.class}
姓名：${data.name}
日期：${data.date}
代理人：${data.deputy}
原因：${data.reason}
    `.trim();

    // 發送到 LINE Notify
    const response = await fetch('https://notify-api.line.me/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${LINE_NOTIFY_TOKEN}`,
      },
      body: new URLSearchParams({
        message: message,
      }),
    });

    if (!response.ok) {
      throw new Error('LINE Notify request failed');
    }

    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Error sending LINE notification:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
