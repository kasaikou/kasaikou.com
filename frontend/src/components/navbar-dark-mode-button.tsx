'use client'

import { DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export default function NavbarDarkModeButton() {

    const { setTheme } = useTheme();

    return (
        <>
            <DropdownMenuItem onClick={() => setTheme("light")}>LIGHT</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>DARK</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setTheme("system")}>SYSTEM</DropdownMenuItem>
        </>
    )
}