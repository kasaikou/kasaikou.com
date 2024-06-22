"use client"

import React from "react";
import { DownloadContent } from "@/contents/infomation";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { DownloadCloudIcon, DownloadIcon } from "lucide-react";

export default function InfoCardDownloadLink(props: { content: DownloadContent }) {

    const content = props.content;
    const [container, setContainer] = useState(<></>);
    const [isDownloading, setIsDownloading] = useState(false);
    const className = "ml-auto";

    const download = async () => {
        if (isDownloading) {
            return;
        }
        try {
            setContainer(<Badge className={className} variant="outline">ダウンロード中</Badge>)
            setIsDownloading(true);

            const response = await fetch(content.Url);
            if (!response.ok) {
                setContainer(<Badge className={className} variant="outline">{`ダウンロード失敗 (${response.status})`}</Badge>)
                return;
            }
            setContainer(<Badge className={className} variant="outline">ダウンロード成功</Badge>)

            var downloadLink = document.createElement("a");
            downloadLink.download = content.Filename;
            downloadLink.href = URL.createObjectURL(await response.blob());
            downloadLink.click();
            setContainer(<Badge className={className} variant="outline">ダウンロード済</Badge>)

        } finally {
            setIsDownloading(false);
        }

    };

    return (
        <div>
            <a onClick={download} className="flex items-center px-5">
                <span>{content.Name}</span>
                <span><DownloadIcon className="inline mx-3 h-full" /></span>
                {container}
            </a>
        </div>
    )
}