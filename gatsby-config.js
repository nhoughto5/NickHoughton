/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "Nick Houghton",
    },
    /* Your site config here */
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-plugin-styled-components`,
            resolve: "gatsby-plugin-react-svg",
            options: {
                // Add any options here
                include: /svg/,
            },
        },
    ],
};
