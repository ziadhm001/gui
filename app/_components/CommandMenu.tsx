"use client"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import Link from "next/link"
import React from "react"

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
  
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
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="How do you want to use me?">
            <Link href="/">
                <CommandItem>Home</CommandItem>
            </Link>
            <Link href="/led">
                <CommandItem>Led Controller</CommandItem>
            </Link>
            <Link href="/fan">
                <CommandItem>Fan Controller</CommandItem>
            </Link>
            <Link href="/lcd">
                <CommandItem>LCD Controller</CommandItem>
            </Link>
            <Link href="/temperature">
                <CommandItem>Temperature Display</CommandItem>
            </Link>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    )
  }
  