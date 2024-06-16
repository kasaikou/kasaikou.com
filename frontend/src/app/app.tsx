"use client";

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
import { ThemeProvider, useTheme } from "next-themes";
import NavigationBar from "./components/navbar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function App(props: {
    bodyClassName: string,
    hostname: string,
}) {

    return (
        <>
            <body className={props.bodyClassName}>
                <ThemeProvider>
                    <div className="flex min-h-screen w-full flex-col">
                        <NavigationBar links={
                            [
                                { label: "kasaikou", href: props.hostname },
                            ]
                        } />
                        <div className="w-window bg-muted">
                            <div className="container w-full mx-auto p-4 px-15">
                                <Carousel
                                    opts={{ align: "center" }}
                                    className="w-full"
                                >
                                    <CarouselContent className="-ml-1">
                                        <CarouselItem className="basis-1/3">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    text
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                        <CarouselItem className="basis-1/3">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    text
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                        <CarouselItem className="basis-1/3">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    text
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                        <CarouselItem className="basis-1/3">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    text
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </div>
                        </div>
                        <main className="grid md:grid-cols-4 grid-cols-1 container p-3">
                            <div className="md:col-span-3 grid-cols-1 px-2">
                                <Card>

                                </Card>
                            </div>
                            <div className="md:col-span-1 grid-cols-1 px-2">
                                <Card>
                                    <CardHeader className="text-2xl font-extrabold tracking-tight">Social</CardHeader>
                                    <CardContent className="px-10">
                                        <ul className="list-disc">
                                            <li><Link href="https://twitter.com/streamwest1629" className="text-l font-bold">Twitter (streamwest1629)</Link></li>
                                            <li><Link href="https://github.com/kasaikou" className="text-l font-bold">GitHub (kasaikou)</Link></li>
                                            <li><Link href="https://zenn.dev/streamwest1629" className="text-l font-bold">Zenn</Link></li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </main>
                        <div className="flex items-center justify-center">
                            <span className="text-muted-foreground">
                                &copy; 2024 Kasai Kou
                            </span>
                        </div>
                    </div>
                </ThemeProvider>
            </body >
        </>
    );
}
