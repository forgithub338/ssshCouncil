"use client";
export default function Test() {

  async function handleClick() {
    const res = await fetch(("/api/test"),{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await res.json();
    console.log(data)
  }

  return (
    <button onClick={handleClick}>test</button>
  )
}