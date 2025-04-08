import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.json();
    
    //基本資訊
    const grade = formData.grade;
    const name = formData.name;
    const studentId = formData.studentId;
    const lineId = formData.lineId;
    
    //經歷
    const leadershipExp = formData.leadershipExp;
    const leadershipPosition = formData.leadershipPosition;
    const previousOrgs = formData.previousOrgs;

    //目標工作
    const preferredRole = formData.preferredRole;
    const interests = formData.interests;

    //動機
    const motivation = formData.motivation;


    const htmlMessage = `【秘書申請】 📝 新加入申請！

👤 基本資料
姓名：${name}
學號：${studentId}
班級座號：${grade}
Line ID： ${lineId}

🎯 申請資訊
想加入的部門：${preferredRole}
曾加入組織：${previousOrgs.filter(org => org !== '其他').map(org => `${org}`).join('、')}
社團幹部經驗：${leadershipExp === "有" ? `${leadershipPosition}` : '無'}

想嘗試的內容：
${interests.map(interest => `${interest}`).join('')}

💭 加入動機：
${motivation}`

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "11130023@sssh.tp.edu.tw",
    //     pass: process.env.GMAIL_APPLICATION_PASSWORD,
    //   },
    // });

    // try {
    //   await transporter.sendMail({
    //     from: "11130023@sssh.tp.edu.tw",
    //     to: "club_sslec@sssh.tp.edu.tw",
    //     subject: "秘書申請",
    //     html: htmlMessage,
    //   });
    // } catch (error) {
    //   console.error('Failed to send email:', error);
    //   return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    // }

    const response = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LINE_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        to: "C95df04c09e6e31025553358db92a4056",
        messages: [{
          type: 'text',
          text: `${htmlMessage}`
        }]
      })
    })

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error parsing form data:', error);
    return NextResponse.json({ error: 'Failed to parse form data' }, { status: 500 });
  }
}
