import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className="bg-gray-800 grid grid-cols-10">
            <div className="container mx-auto col-span-3 flexitems-center mt-2 mb-2 grid grid-cols-7">
                <div className="col-span-1">
                    <a href="/" className="flex items-center">
                        <img src="/images/icon.png" alt="松山高中學生議會" className="w-[40px] h-[40px] ml-2" />
                    </a>
                </div>
                <div className="col-span-6 flex items-center justify-left">
                    <b className="font-bold text-2xl text-white">崧高學生議會</b>
                </div>
            </div>

            <div className="container col-span-7 flex items-center justify-end space-x-10">
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <span className="text-white hover:text-orange-500 font-bold">首頁</span>
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="/absent" className="flex items-center">
                        <span className="text-white hover:text-orange-500 font-bold">我要請假</span>
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="/new" className="flex items-center">
                        <span className="text-white hover:text-orange-500 font-bold">議會新聞</span>
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="/transparent" className="flex items-center">
                        <span className="text-white hover:text-orange-500 font-bold">議事透明專區</span>
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="relative group">
                        <div className="flex items-center cursor-pointer">
                            <a href="/about" className="text-white hover:text-orange-500 font-bold group-hover:text-orange-500">關於本會</a>
                            <FontAwesomeIcon icon={faCaretDown} className="ml-2 w-4 h-4 text-white group-hover:text-orange-500"/>
                        </div>
                        <div className="absolute hidden group-hover:block top-full right-0 w-48 bg-gray-700 shadow-lg rounded-lg">
                            <a href="/faq" className="block px-4 py-2 text-white hover:bg-gray-600">學生議會搞甚麼?</a>
                            <a href="/members" className="block px-4 py-2 text-white hover:bg-gray-600">議員成員</a>
                            <a href="/join" className="block px-4 py-2 text-white hover:bg-gray-600">加入我們</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}