import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  const drive = google.drive({ version: 'v3', auth });

  const fileMetadata = {
    name: '網站議事透明專區', // 改成你想要的資料夾名稱
    mimeType: 'application/vnd.google-apps.folder',
  };

  try {
    const folder = await drive.files.create({
      requestBody: fileMetadata,
      fields: 'id',
    });

    console.log('資料夾建立成功，ID：', folder.data.id);

    return NextResponse.json({ folderId: folder.data.id });
  } catch (error) {
    console.error('建立資料夾失敗:', error);
    return NextResponse.json({ error: '建立資料夾失敗' }, { status: 500 });
  }
}
