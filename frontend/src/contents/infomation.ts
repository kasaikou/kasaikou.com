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
    {
        CreatedAt: new Date("2024-06-18"),
        Url: "https://zenn.dev/streamwest1629/articles/llm-hackathon_2024",
        ImageUrl: "https://res.cloudinary.com/zenn/image/upload/s--DBv3MrFO--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:LLM%2520%25E3%2581%25AE%25E5%258A%25B9%25E6%259E%259C%25E7%259A%2584%25E3%2581%25AA%25E7%25A4%25BE%25E4%25BC%259A%25E5%25AE%259F%25E8%25A3%2585%2520%25E3%2580%2590%25E7%25A4%25BE%25E5%2586%2585%25E7%2594%259F%25E6%2588%2590%2520AI%2520%25E3%2583%258F%25E3%2583%2583%25E3%2582%25AB%25E3%2582%25BD%25E3%2583%25B3%25E3%2580%2591%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Kasai%2520Kou%25EF%25BC%2588%25E3%2581%258B%25E3%2581%2595%25E3%2581%2584%25EF%25BC%2589%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2NjYWVkNjdkMGQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
        Title: "「LLM の効果的な社会実装 【社内生成 AI ハッカソン】」を公開しました",
    }
].sort((a, b) => a.CreatedAt < b.CreatedAt ? 1 : -1);