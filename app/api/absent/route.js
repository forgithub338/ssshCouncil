import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.json();

    const group = formData.class;
    const name = formData.name;
    const reason = formData.reason;
    const date = formData.date;
    const deputy = formData.deputy;

    const htmlMessage = `
      <p>【議員請假】 📝 議員請假通知 </p>
      <p>班級：${group}</p>
      <p>姓名：${name}</p>
      <p>日期：${date}</p>
      <p>代理人：${deputy}</p>
      <p>原因：${reason}</p>
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
        subject: "議員請假通知",
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
