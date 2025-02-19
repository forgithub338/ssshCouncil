export default function Absent() {
  return (
    <div className="bg-red-700">
      <div className="container flex items-center justify-center mx-auto bg-red-700 h-[70px] gap-4">
        <span className="text-white font-bold">議員快速請假專區</span>
        <a href="/absent" className="border-2 border-white text-white px-10 py-2 rounded-md">點我請假</a>
      </div>
    </div>    
  );
}

