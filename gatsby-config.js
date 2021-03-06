module.exports = {
    siteMetadata: {
        title: `Prise en main Gatsby`, siteUrl: `https://amdygatsbytest.gtsb.io`
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        "gatsby-plugin-mdx",
    ]
};