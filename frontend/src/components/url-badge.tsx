import Link from "next/link";
import { badgeVariants } from "./ui/badge";
import { cn } from "@/lib/utils";

function urlBadgeName(url: string) {
    const urlNameDict: { [key: string]: string } = {
        "https://kasaikou.com/downloads": "ダウンロード",
        "https://github.com": "GitHub",
        "https://h-j-ainashiworks.booth.pm": "BOOTH",
        "https://music.apple.com": "Apple Music",
        "https://music.amazon.co.jp": "Amazon Music",
        "https://music.line.me": "LINE MUSIC",
        "https://music.youtube.com": "Youtube Music",
        "https://nicovideo.jp": "ニコニコ",
        "https://open.spotify.com": "Spotify",
        "https://s.awa.fm": "AWA",
        "https://zenn.dev": "Zenn",
    }

    for (const [prefix, name] of Object.entries(urlNameDict)) {
        if (url.startsWith(prefix)) {
            return name;
        }
    }

    return new URL(url).hostname;
}

export default function UrlBadge(urls: string[]) {
    return (
        <>
            {urls.map((url, index) => (
                <a className={cn(badgeVariants({ variant: "default" }), "mx-1 my-1")} key={index} href={url}>{urlBadgeName(url)}</a>
            ))}
        </>
    );
}