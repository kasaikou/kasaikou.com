import { Info } from "@/contents/infomation";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import UrlBadge from "./url-badge";
import Link from "next/link";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function InfoCard(info: Info) {

    const badges = UrlBadge(info.Urls);
    const cardBadges = info.Urls.length > 3 ? (<>
        {UrlBadge(info.Urls.slice(0, 3))}
        <span>他{info.Urls.length}件</span>
    </>) : badges;

    const cardContent = (
        <div>
            <div className="h-[60%] aspect-[10/6] overflow-hidden">
                <div className="flex items-center justify-center h-full overflow-hidden">
                    <div className="w-full">
                        <img className="w-full max-h-full object-cover" src={info.ImageUrl}></img>
                    </div>
                </div>
            </div>
            <div className="h-[40%] py-4">
                <div className="md:text-md">
                    {info.CreatedAt.toDateString()}
                </div>
                <div className="md:text-md">
                    {cardBadges}
                </div>
                <div className="h-full md:text-l font-bold">
                    {info.Title}
                </div>
            </div>
        </div>
    );

    if (info.Urls.length == 1) {
        return (
            <>
                <Card>
                    <CardContent className="flex aspect-square w-full p-5">
                        <Link href={info.Urls[0]} className="h-full w-full">
                            {cardContent}
                        </Link>
                    </CardContent>
                </Card>
            </>
        );
    } else {
        return (
            <Card>
                <CardContent className="flex aspect-square w-full p-5">
                    <Dialog>
                        <DialogTrigger asChild>
                            <a className="h-full w-full">
                                {cardContent}
                            </a>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <div className="md:text-md">
                                    {info.CreatedAt.toDateString()}
                                </div>
                                <DialogTitle>{info.Title}</DialogTitle>
                            </DialogHeader>
                            <div className="flex items-center justify-center px-10">
                                <img className="w-full object-contain" src={info.ImageUrl}></img>
                            </div>
                            {info.Message ? (<div>
                                {info.Message}
                            </div>) : (<></>)}
                            <div>
                                {badges}
                            </div>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        );
    }
}