export type Info = {
    CreatedAt: Date,
    Url: string,
    ImageUrl: string,
    Title: string,
    Message?: string,
};

export const Infos: Info[] = [
    {
        CreatedAt: new Date("2024-04-11"),
        Url: "https://open.spotify.com/intl-ja/album/4ELmte8UM46oEuYqgQQu0k",
        ImageUrl: "https://i.scdn.co/image/ab67616d0000b27368a89de5bbe954054516c509",
        Title: "「作曲がキライになるまで」を配信しました",
    },
    {
        CreatedAt: new Date("2024-06-16"),
        Url: "https://kasaikou.com",
        ImageUrl: "https://storage.googleapis.com/zenn-user-upload/avatar/ccaed67d0d.jpeg",
        Title: "「kasaikou.com」 をリニューアルしました",
        Message: "Amplify から cloudflare への移行を行うついでにリポジトリを一新してページをリニューアルしました。",
    },
].sort((a, b) => a.CreatedAt < b.CreatedAt ? 1 : -1).reverse();