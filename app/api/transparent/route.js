import { NextResponse } from "next/server";
import { createConnection } from "@/lib/connectDB";

export async function POST(req) {
  const {table, sortMethod} = await req.json();
  const db = await createConnection()
  const tableEN = translateTable(table)

  const query = `SELECT * FROM \`${tableEN}\` ORDER BY uploadTime ${sortMethod === 'asc' ? 'ASC' : 'DESC'}`;
  const [results] = await db.query(query);
  
  if(table === "學生自治法規") {
    const smallType = ["總彙編", "學生自治聯合會組織章程", "學生議會", "學生會", "其他"];
    return NextResponse.json({smallType, data: results});
  } else if(table === "會議記錄") {
    const smallType = ["常務委員會", "一般會議"];
    return NextResponse.json({smallType, data: results});
  } else {
    return NextResponse.json({data: results});
  }
}

function translateTable(table) {
  switch(table) {
    case "學生自治法規": return "laws"
    case "會議記錄影片": return "videos" 
    case "常用議員表件": return "documents"
    case "歷屆議員提案": return "proposals"
    case "開會通知單": return "notices"
    case "開會資料": return "informations"
    case "會議記錄": return "logs"

  }
}