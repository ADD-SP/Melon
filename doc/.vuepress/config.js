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
                        children: [
                            "/guide/overview.md",
                            "/guide/installation.md",
                            "/guide/example.md",
                            "/guide/type.md"
                        ]
                    },
                    {
                        title: "Reference",
                        children: [
                            {
                                title: "Data Structure",
                                children: [
                                    "/reference/string.md"
                                ]
                            }
                            
                        ]
                    }
                ]
            },
            '/zh-cn/': {
                selectText: "选择语言",
                label: "简体中文",
                lastUpdated: "最后一次更新",
                editLinkText: "帮助我们改善此页面！",
                sidebar: [
                    {
                        title: "快速上手",
                        children: [
                            "/zh-cn/guide/overview.md",
                            "/zh-cn/guide/installation.md",
                            "/zh-cn/guide/configuration.md",
                            "/zh-cn/guide/initialization.md",
                            "/zh-cn/guide/example.md",
                        ]
                    },
                    {
                        title: "参考",
                        children: [
                            {
                                title: "数据结构",
                                children: [
                                    "/zh-cn/reference/data-structure/hash.md",
                                    "/zh-cn/reference/data-structure/prime.md",
                                    "/zh-cn/reference/data-structure/log.md"
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}