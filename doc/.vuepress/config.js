module.exports = {
    base: process.env.docsBaseUrl == undefined ? "/" : process.env.docsBaseUrl,
    evergreen: true,
    plugins: ['fulltext-search'],
    locales: {
        '/': {
            lang: "en",
            title: "Melon",
            description: "An asynchronous high-performance C framework."
        },
        '/zh-cn/': {
            lang: "zh-CN",
            title: "Melon",
            description: "一个高性能异步 C 语言库。"
        }
    },
    themeConfig: {
        repo: "https://github.com/Water-Melon/Melon/",
        repoLabel: "Github",
        docsRepo: "https://github.com/Water-Melon/Melon/",
        docsDir: "doc",
        editLinks: true,
        smoothScroll: true,
        locales: {
            '/': {
                selectText: "Languages",
                label: "English",
                lastUpdated: "Last Updated",
                editLinkText: "Help us improve this page!",
                sidebar: [
                    {
                        title: "Quick Start",
                        path: "/guide/",
                        children: [
                            "/guide/overview.md",
                            "/guide/installation.md",
                            "/guide/type.md"
                        ]
                    },
                    {
                        title: "Reference",
                        path: "/reference/",
                        children: [
                            "/reference/structure.md"
                        ]
                    }
                ]
            },
            '/zh-cn/': {
                selectText: "选择语言",
                label: "简体中文",
                lastUpdated: "最后一次更新",
                editLinkText: "帮助我们改善此页面！",
                sidebar: []
            }
        }
    }
}