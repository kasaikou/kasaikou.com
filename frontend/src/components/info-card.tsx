import { Info } from "@/contents/infomation";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function InfoCard(info: Info) {

    const cardContent = (
        <div>
            <div className="h-[70%] aspect-[10/7] overflow-hidden">
                <div className="flex items-center justify-center h-full overflow-hidden">
                    <div className="w-full">
                        <img className="w-full max-h-full object-cover" src={info.ImageUrl}></img>
                    </div>
                </div>
            </div>
            <div className="h-[30%]">
                <div className="md:text-md">
                    {info.CreatedAt.toDateString()}
                </div>
                <div className="h-full p-3 md:text-l xl:text-xl font-bold">
                    {info.Title}
                </div>
            </div>
        </div>
    );

    if (info.Urls.length == 1) {
        return (
            <>
                <Card>
                    <CardContent className="flex aspect-square w-full p-10">
                        <a href={info.Urls[0]} className="h-full w-full">
                            {cardContent}
                        </a>
                    </CardContent>
                </Card>
            </>
        );
    } else {
        return (
            <Card>
                <CardContent className="flex aspect-square w-full p-10">
                    <Dialog>
                        <DialogTrigger asChild>
                            <a className="h-full w-full">
                                {cardContent}
                            </a>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>{info.Title}</DialogTitle>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        );
    }
}