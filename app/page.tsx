import Image from 'next/image'
import { CommandMenu } from './_components/CommandMenu'

export default function Home() {
  return (
    <div className="flex h-full justify-center items-center mt-48">
      <div className='flex h-full justify-center items-center'>
        <p className="text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">Ctrl</span> + K
          </kbd>
          {" "}to open the command menu.
        </p>
      </div>
      <CommandMenu />
    </div>
  )
}
