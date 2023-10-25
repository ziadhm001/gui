"use client"
import React, { useState } from 'react';
import { CommandMenu } from "@/app/_components/CommandMenu";
import { Slider } from "@/components/ui/slider"
import Image from "next/image";

const FanController = () => {
  const [speed, setSpeed] = useState(1); // 1 is the default speed

  const handleSpeedChange = (value: any) => {
    console.log(value)
    setSpeed(value[0]);
  };

  return ( 
    <div className="flex flex-row justify-center p-16 px-28 bg-slate-600 h-screen">
      <CommandMenu />
      <div className="bg-slate-500 shadow-2xl flex-col border-slate-500 border w-80 h-72 p-8 pl-10 flex justify-center">
        <div
          style={{
            animation: `playGif ${speed}s infinite`,
          }}
        >
          <Image src="/fan.gif" alt="Fan" width={225} height={200} />
        </div>
        <Slider defaultValue={[30]} max={100} step={1} onValueChange={handleSpeedChange}/>
      </div>
    </div>
  );
}

export default FanController;
