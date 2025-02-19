"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-gray-800">
            {/* Desktop Navigation */}
            <div className="hidden md:grid grid-cols-10">
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

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center space-x-3">
                        <img src="/images/icon.png" alt="松山高中學生議會" className="w-[32px] h-[32px]" />
                        <span className="font-bold text-xl text-white">崧高學生議會</span>
                    </div>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white p-2"
                    >
                        <FontAwesomeIcon 
                            icon={isMenuOpen ? faXmark : faBars} 
                            className="w-6 h-6"
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="bg-gray-800 px-4 pt-2 pb-4">
                        <div className="space-y-4">
                            <a href="/" className="block text-white hover:text-orange-500 font-bold py-2">
                                首頁
                            </a>
                            <a href="/absent" className="block text-white hover:text-orange-500 font-bold py-2">
                                我要請假
                            </a>
                            <a href="/new" className="block text-white hover:text-orange-500 font-bold py-2">
                                議會新聞
                            </a>
                            <a href="/transparent" className="block text-white hover:text-orange-500 font-bold py-2">
                                議事透明專區
                            </a>
                            
                            {/* Mobile Dropdown */}
                            <div className="space-y-2">
                                <div className="text-white font-bold">關於本會</div>
                                <div className="pl-4 space-y-2">
                                    <a href="/about" className="block text-white hover:text-orange-500 py-2">
                                        議會組織架構
                                    </a>
                                    <a href="/members" className="block text-white hover:text-orange-500 py-2">
                                        議員介紹
                                    </a>
                                    <a href="/history" className="block text-white hover:text-orange-500 py-2">
                                        歷屆議會
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}