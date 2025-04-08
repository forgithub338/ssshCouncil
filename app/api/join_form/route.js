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


    const htmlMessage = `
      <p>【秘書申請】 📝 新加入申請！</p>

      <p>👤 基本資料</p>
      <p>姓名：${name}</p>
      <p>學號：${studentId}</p>
      <p>班級座號：${grade}</p>
      <p>Line ID： ${lineId}</p>

      <br/>
      <p>🎯 申請資訊</p>
      <p>想加入的部門：${preferredRole}</p>
      <p>曾加入組織：${previousOrgs.filter(org => org !== '其他').map(org => `<span>${org}</span>`).join('、')}</p>
      <p>社團幹部經驗：${leadershipExp ? `<span>${leadershipPosition}</span>` : '無'}</p>

      <br/>
      <p>想嘗試的內容：</p>
      ${interests.map(interest => `<p>${interest}</p>`).join('')}

      <br/>
      <p>💭 加入動機：</p>
      <p>${motivation}</p>
    `

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "11130023@sssh.tp.edu.tw",
        pass: process.env.GMAIL_APPLICATION_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: "11130023@sssh.tp.edu.tw",
        to: "club_sslec@sssh.tp.edu.tw",
        subject: "秘書申請",
        html: htmlMessage,
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error parsing form data:', error);
    return NextResponse.json({ error: 'Failed to parse form data' }, { status: 500 });
  }
}
