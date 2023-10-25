import { CommandMenu } from "@/app/_components/CommandMenu";
import { Press_Start_2P } from 'next/font/google'
const consoleFont = Press_Start_2P({ weight: "400", subsets: ['latin'] })
const TemperatureObserver = () => {
    return ( 
        <div className="flex flex-row justify-center p-16 px-28 bg-slate-600 h-screen">
        <CommandMenu />
        <div className=" bg-emerald-800 shadow-2xl flex-col border-slate-500 border w-96 h-56 p-10 flex justify-center">
            <div className={`${consoleFont.className} border-black border-2`}>
                <div className="bg-lime-500 border-gray-700 border-4 w-full h-32 p-4">
                    Temp: 25°C
                </div>
            </div>
        </div>
      </div>
     );
}
 
export default TemperatureObserver;