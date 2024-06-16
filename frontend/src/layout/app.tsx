import Link from "next/link";
import NavigationBar from "../components/navbar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { ThemeProvider } from "@/lib/theme-provider";
import { Infos } from "@/contents/infomation";

type CardInfo = {
    href: string,
    imageUrl: string,
    text: string,
}

export default function App(props: {
    bodyClassName: string,
    hostname: string,
    children: React.ReactNode,
}) {

    const cards = Infos.map((info, index) => (
        <CarouselItem className="basis-1/1 md:basis-1/2 xl:basis-1/3" key={index}>
            <Card>
                <CardContent className="flex aspect-square">
                    <a href={info.Url} className="grid grid-rows-16 h-full w-full">
                        <div className="row-span-9 overflow-hidden">
                            <img className="w-full max-h-full object-cover" src={info.ImageUrl}></img>
                        </div>
                        <div className="row-span-7 p-3 md:text-l xl:text-xl font-bold">
                            {info.Title}
                        </div>
                    </a>
                </CardContent>
            </Card>
        </CarouselItem>
    ))

    return (
        <>
            <body className={props.bodyClassName}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="flex min-h-screen w-full flex-col">
                        <NavigationBar links={
                            [
                                { label: "kasaikou", href: props.hostname },
                            ]
                        } />
                        <div className="w-window bg-muted">
                            <div className="container w-full mx-auto py-4 px-5">
                                <div className="mx-10">
                                    <Carousel
                                        opts={{ align: "center" }}
                                        className="w-full"
                                    >
                                        <CarouselContent className="-ml-1">
                                            {cards}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <main className="grid md:grid-cols-4 grid-cols-1 container p-3">
                            <div className="md:col-span-3 grid-cols-1 px-2">
                                <Card className="p-5">
                                    {props.children}
                                </Card>
                            </div>
                            <div className="md:col-span-1 grid-cols-1 px-2">
                                <Card>
                                    <CardHeader className="text-2xl font-extrabold tracking-tight">Social</CardHeader>
                                    <CardContent className="px-30">
                                        <ul className="list-disc">
                                            <li><Link href="https://twitter.com/streamwest1629" className="text-l font-bold">Twitter (streamwest1629)</Link></li>
                                            <li><Link href="https://youtube.com/@streamwest1629" className="text-l font-bold">YouTube (streamwest1629)</Link></li>
                                            <li><Link href="https://github.com/kasaikou" className="text-l font-bold">GitHub (kasaikou)</Link></li>
                                            <li><Link href="https://h-j-ainashiworks.booth.pm/" className="text-l font-bold">BOOTH (雑貨屋かさい)</Link></li>
                                            <li><Link href="https://zenn.dev/streamwest1629" className="text-l font-bold">Zenn</Link></li>
                                            <li><Link href="https://note.com/streamwest1629" className="text-l font-bold">note</Link></li>
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
