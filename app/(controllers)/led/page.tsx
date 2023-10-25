"use client"
import { CommandMenu } from "@/app/_components/CommandMenu";
import Image from "next/image";
import { useState } from "react";
const LedController = () => {
    const [isLedOneOn, setIsLedOneOn] = useState(false);
    const [isLedTwoOn, setIsLedTwoOn] = useState(false);
    return ( 
        <div className="flex flex-row justify-between p-16 px-28 bg-slate-600 h-screen ">
            <CommandMenu />
            <div className="bg-black shadow-2xl border-slate-500 border w-80 h-72 p-8 flex justify-center" onClick={() => setIsLedOneOn(prev => !prev)}>
                <Image className="flex" src={`${isLedOneOn ? '/ledOn.png' : '/ledOff.png'}`} alt="LED" width={160} height={200} />
            </div>
            <div className="bg-black shadow-2xl border-slate-500 border w-80 h-72 p-8 flex justify-center" onClick={() => setIsLedTwoOn(prev => !prev)}>
                <Image className="flex" src={`${isLedTwoOn ? '/ledOn.png' : '/ledOff.png'}`} alt="LED" width={160} height={200} />
            </div>
        </div>
     );
}
 
export default LedController;