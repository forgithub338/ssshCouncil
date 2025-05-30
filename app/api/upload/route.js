import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { createConnection } from '@/lib/connectDB';

function folderClassification(bigType, smallType) {
  switch(bigType) {
    case "學生自治法規":
      switch(smallType) {
        case "總彙編": return "121HJk5d4aNHLN057GdyLkHoAGxJdN0AO";
        case "學生自治聯合會組織章程": return "1C0GruFZejxQcBbXvUJRbZ11-wbgk93Z9";
        case "學生議會": return "1aSXB7ldvczU0-VhsjpXJHBvVcQzkgUfI";
        case "學生會": return "1GfuXgAzVlY7bhI-Wv-lHsDvfhLrGW7_f";
        case "其他": return "1Y_hsR9iTN3ZXzK2hX3MaZhxCeugqelbv";
      }
    case "常用議員表件": return "1vv2iwddmrHAdPvUqVceAOtwH4b680POv";
    case "歷屆議員提案": return "1wXz92Oq7wcCI5gezDUoaIdqYYmLBGIzj";
    case "開會通知單": return "1t9b_g-__RHXYlEgSSNd20ZavEIdFiHR_";
    case "開會資料": return "1Xqn1oo3kbKf2XKllmosArAOcyU005p4y";
    case "會議記錄":
      switch(smallType) {
        case "常務委員會": return "1VZIlyKfGc_KI2e6wzUm3rwmaXwFTCscn";
        case "一般會議": return "1CI8Ooc7jtBK6JVDRNuRTg8oh9YJBGHAB";
      }
  }
}


async function dbInsert(bigType, smallType, title, id) {
  const db = await createConnection();

  if (bigType === "學生自治法規") {
    await db.query(
      "INSERT INTO laws (type, title, href) VALUES (?, ?, ?)",
      [smallType, title, id]
    );
  } else if (bigType === "常用議員表件") {
    await db.query(
      "INSERT INTO documents (title, href) VALUES (?, ?)",
      [title, id]
    );
  } else if (bigType === "歷屆議員提案") {
    await db.query(
      "INSERT INTO proposals (title, href) VALUES (?, ?)",
      [title, id]
    );
  } else if (bigType === "開會通知單") {
    await db.query(
      "INSERT INTO notices (title, href) VALUES (?, ?)",
      [title, id]
    );
  } else if (bigType === "開會資料") {
    await db.query(
      "INSERT INTO informations (title, href) VALUES (?, ?)",
      [title, id]
    );
  } else if (bigType === "會議記錄") {
    await db.query(
      "INSERT INTO logs (type, title, href) VALUES (?, ?, ?)",
      [smallType, title, id]
    );
  } else if (bigType === "會議記錄影片") {
    await db.query(
      "INSERT INTO videos (title, href) VALUES (?, ?)", 
      [title, id]
    );
  }
}

export async function POST(req) {
  const formData = await req.json();
  const { bigType, smallType = "", title, pdf = "", videoHref = "" } = formData;

  // 1. 處理 Google Drive 上傳
  let uploadedFileId = null;
  if (pdf.startsWith('data:application/pdf;base64,')) {
    const buffer = Buffer.from(pdf.replace('data:application/pdf;base64,', ''), 'base64');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const drive = google.drive({ version: 'v3', auth });

    try {
      const fileMetadata = {
        name: `${title}.pdf`,
        parents: [`${folderClassification(bigType, smallType)}`],
        // parents: ['YOUR_FOLDER_ID'], // 可選：放進特定資料夾
      };

      const media = {
        mimeType: 'application/pdf',
        body: BufferToStream(buffer),
      };

      const file = await drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: 'id',
      });

      uploadedFileId = file.data.id;

      // 也可以選擇把公開網址做出來
      await drive.permissions.create({
        fileId: uploadedFileId,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });

    } catch (err) {
      console.error('Google Drive 上傳失敗：', err);
      return NextResponse.json({ error: 'Google Drive 上傳失敗' }, { status: 500 });
    }
  }

  // 2. 資料庫儲存
  dbInsert(bigType, smallType, title, uploadedFileId)

  return NextResponse.json({
    bigType,
    smallType,
    title,
    pdfDriveId: uploadedFileId,
    pdfDriveLink: uploadedFileId ? `https://drive.google.com/file/d/${uploadedFileId}/view?usp=sharing` : null,
    videoHref,
  });
}

// 將 Buffer 轉為 Readable Stream
function BufferToStream(binary) {
  const { Readable } = require('stream');
  const stream = new Readable();
  stream.push(binary);
  stream.push(null);
  return stream;
}
