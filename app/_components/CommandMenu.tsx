"use client"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import Link from "next/link"
import React from "react"
import styles from './CommandMenu.module.css' // Import CSS module

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("") // State to capture the input value

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      {/* Capture input value */}
      <CommandInput 
        className="text-white" 
        placeholder="Type an experiment name or search for existing one..."
        onValueChange={(value) => setInputValue(value)} // Update the inputValue state when user types
      />
      <CommandList>
        <CommandEmpty className="drop-shadow-[1px_3px_0_rgb(145,47,179)] text-center">
          {/* Animated text with space zoom effect */}
          <a href={`/${inputValue}`} className={styles.spaceText}>
            {inputValue || "No input yet"}
          </a>
        </CommandEmpty>
        <CommandGroup className="text-white" heading="Which experiment are you looking for?">
          <CommandItem>
          <Link href="/OBD-377">
            OBD-377
          </Link>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
