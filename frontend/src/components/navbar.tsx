import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/lib/theme-provider";
import { useEffect, useState } from "react";
import NavbarDarkModeButton from "./navbar-dark-mode-button";

export default function NavigationBar(props: {
    links: {
        label: string,
        href: string,
    }[]
}) {

    const items = props.links.map((opt, index) => {
        return (
            <a
                key={index}
                href={opt.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
            ><span>{opt.label}</span></a>
        )
    });

    const collapsedItems = props.links.map((opt, index) => {
        return (
            <Link
                key={index}
                href={opt.href}
                className="text-muted-foreground hover:text-foreground"
            >{opt.label}</Link>
        )
    })

    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                {items}
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        {collapsedItems}
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                            Light/Dark
                            <span className="sr-only">Toggle Dark Mode</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <NavbarDarkModeButton />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}