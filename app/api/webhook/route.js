// app/api/line/webhook/route.js

export async function POST(req) {
    const body = await req.json();
    const events = body.events;
  
    for (const event of events) {
      if (event.source.type === "group") {
        console.log("👥 收到群組訊息！");
        console.log("📌 群組 ID:", event.source.groupId);
  
        // Optional：你也可以回覆這個訊息給群組
        const replyToken = event.replyToken;
        await fetch("https://api.line.me/v2/bot/message/reply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.LINE_ACCESS_TOKEN}`
          },
          body: JSON.stringify({
            replyToken: replyToken,
            messages: [{
              type: "text",
              text: `群組 ID：${event.source.groupId}`
            }]
          })
        });
      }
    }
  
    return new Response("OK", { status: 200 });
  }
  