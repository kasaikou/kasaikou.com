"use client";

import { useTheme } from "next-themes";
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

export default function NavigationBar(props: {
    links: {
        label: string,
        href: string,
    }[]
}) {

    const { setTheme } = useTheme();
    const components = props.links.map((opt, index) => {
        return (
            <Link
                key={index}
                href={opt.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
            >{opt.label}</Link>
        )
    });

    const collapsedComponents = props.links.map((opt, index) => {
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
                {components}
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        {/* <Menu className="h-5 w-5" /> */}
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        {collapsedComponents}
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
                        <DropdownMenuItem onClick={() => setTheme("light")}>LIGHT</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>DARK</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setTheme("system")}>SYSTEM</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}