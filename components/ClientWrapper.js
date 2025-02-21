'use client'

import { usePathname } from "next/navigation";
import Absent from "./Absent";

export default function ClientWrapper() {
  const pathname = usePathname();
  
  return (
    <div className={`${pathname === '/transparent' ? 'hidden lg:block' : ''}`}>
      {/* Add your Absent component or other content here */}
      <Absent/>
    </div>
  );
}