
export type DownloadContent = {
    Filename: string,
    Name: string,
    Url: string,
}

export type Info = {
    CreatedAt: Date,
    Urls: string[],
    ImageUrl: string,
    Title: string,
    Message?: string,
    Downloads: DownloadContent[],
};

export const Infos: Info[] = [
    {
        CreatedAt: new Date("2021-03-18"),
        Urls: [
            "https://youtube.com/watch?v=JD9QnCg1SRA",
        ],
        ImageUrl: "https://img.youtube.com/vi/JD9QnCg1SRA/sddefault.jpg",
        Title: "「上書保存」を公開しました",
        Downloads: [{
            Filename: "上書保存_オフボーカル.wav",
            Name: "オフボーカル",
            Url: "https://storage.kasaikou.com/musics%2F2021-03-18-%E4%B8%8A%E6%9B%B8%E4%BF%9D%E5%AD%98%2F%E4%B8%8A%E6%9B%B8%E4%BF%9D%E5%AD%98_offvocal.wav",
        }]
    },
    {
        CreatedAt: new Date("2024-04-11"),
        Urls: [
            "https://open.spotify.com/intl-ja/album/4ELmte8UM46oEuYqgQQu0k",
            "https://music.youtube.com/playlist?list=OLAK5uy_lREbej_yH1_eUCiyaIoKUuxUQ5hqqORoE",
            "https://h-j-ainashiworks.booth.pm/items/5268315",
            "https://music.amazon.co.jp/albums/B0D172HGDS",
            "https://music.apple.com/jp/album/%E4%BD%9C%E6%9B%B2%E3%81%8C%E3%82%AD%E3%83%A9%E3%82%A4%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%BE%E3%81%A7/1740265627?l=en-US",
            "https://music.line.me/webapp/album/mb00000000038e2acf",
            "https://s.awa.fm/album/1b07facd89460f729e43",
        ],
        ImageUrl: "https://i.scdn.co/image/ab67616d0000b27368a89de5bbe954054516c509",
        Title: "「作曲がキライになるまで」を配信しました",
        Message: "ボーマス 53 で頒布したアルバム「作曲がキライになるまで」のサブスク配信・ダウンロード販売を行いました。",
        Downloads: [],
    },
    {
        CreatedAt: new Date("2024-06-16"),
        Urls: ["https://kasaikou.com"],
        ImageUrl: "https://storage.googleapis.com/zenn-user-upload/avatar/ccaed67d0d.jpeg",
        Title: "「kasaikou.com」 をリニューアルしました",
        Message: "Amplify から cloudflare への移行を行うついでにリポジトリを一新してページをリニューアルしました。",
        Downloads: [],
    },
    {
        CreatedAt: new Date("2024-06-18"),
        Urls: ["https://zenn.dev/streamwest1629/articles/llm-hackathon_2024"],
        ImageUrl: "https://res.cloudinary.com/zenn/image/upload/s--DBv3MrFO--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:LLM%2520%25E3%2581%25AE%25E5%258A%25B9%25E6%259E%259C%25E7%259A%2584%25E3%2581%25AA%25E7%25A4%25BE%25E4%25BC%259A%25E5%25AE%259F%25E8%25A3%2585%2520%25E3%2580%2590%25E7%25A4%25BE%25E5%2586%2585%25E7%2594%259F%25E6%2588%2590%2520AI%2520%25E3%2583%258F%25E3%2583%2583%25E3%2582%25AB%25E3%2582%25BD%25E3%2583%25B3%25E3%2580%2591%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Kasai%2520Kou%25EF%25BC%2588%25E3%2581%258B%25E3%2581%2595%25E3%2581%2584%25EF%25BC%2589%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2NjYWVkNjdkMGQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
        Title: "「LLM の効果的な社会実装 【社内生成 AI ハッカソン】」を公開しました",
        Downloads: [],
    },
    {
        CreatedAt: new Date("2024-06-26"),
        Urls: ["https://zenn.dev/streamwest1629/articles/report-aws-summit-japan-2024"],
        ImageUrl: "https://res.cloudinary.com/zenn/image/upload/s--CkUYUChr--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:AWS%2520Summit%2520Japan%25202024%2520%25E5%258F%2582%25E5%258A%25A0%25E3%2583%25A1%25E3%2583%25A2%25EF%25BC%2588%25E7%25AE%2587%25E6%259D%25A1%25E6%259B%25B8%25E3%2581%258D%25EF%25BC%2589%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Kasai%2520Kou%25EF%25BC%2588%25E3%2581%258B%25E3%2581%2595%25E3%2581%2584%25EF%25BC%2589%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2NjYWVkNjdkMGQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
        Title: "「AWS Summit Japan 2024 参加メモ（箇条書き）」を公開しました",
        Downloads: [],
    },
    {
        CreatedAt: new Date("2024-07-13"),
        Urls: ["https://zenn.dev/streamwest1629/articles/report-platform-engineering-kaigi-2024"],
        ImageUrl: "https://res.cloudinary.com/zenn/image/upload/s--LFpnaHaO--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:Platform%2520Engineering%2520Kaigi%25202024%2520%25E9%2581%258B%25E5%2596%25B6%25E3%2581%2597%25E3%2581%25BE%25E3%2581%2597%25E3%2581%259F%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Kasai%2520Kou%25EF%25BC%2588%25E3%2581%258B%25E3%2581%2595%25E3%2581%2584%25EF%25BC%2589%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2NjYWVkNjdkMGQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
        Title: "「Platform Engineering Kaigi 2024 運営しました」を公開しました",
        Downloads: [],
    },
    {
        CreatedAt: new Date("2024-07-21"),
        Urls: [
            "https://zenn.dev/streamwest1629/articles/terraform-vpc-module",
            "https://github.com/kasaikou/terraform-aws-vpc",
            "https://registry.terraform.io/modules/kasaikou/vpc/aws/latest",
        ],
        ImageUrl: "https://res.cloudinary.com/zenn/image/upload/s--bUKLLkKT--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E5%25B7%25B7%25E3%2581%25AE%2520Terraform%2520Module%2520%25E3%2581%25AB%25E9%2581%2595%25E5%2592%258C%25E6%2584%259F%25E3%2582%2592%25E6%2584%259F%25E3%2581%2598%25E3%2581%259F%25E3%2581%25AE%25E3%2581%25A7%25E7%25B4%258D%25E5%25BE%2597%25E3%2581%25A7%25E3%2581%258D%25E3%2582%258B%25E3%2582%2582%25E3%2581%25AE%25E3%2582%2592%25E4%25BD%259C%25E3%2581%25A3%25E3%2581%25A6%25E3%2581%25BF%25E3%2581%259F%25E3%2580%2590AWS%2520VPC%25E7%25B7%25A8%25E3%2580%2591%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Kasai%2520Kou%25EF%25BC%2588%25E3%2581%258B%25E3%2581%2595%25E3%2581%2584%25EF%25BC%2589%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2NjYWVkNjdkMGQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
        Title: "「巷の Terraform Module に違和感を感じたので納得できるものを作ってみた【AWS VPC編】」を公開しました",
        Downloads: [],
    },
].sort((a, b) => a.CreatedAt < b.CreatedAt ? 1 : -1);