const queries = require('./src/utils/algolia')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId:"qz0n5cdakyl9",
  accessToken: "580d5944194846b690dd89b630a1cb98a0eef6a19b860ef71efc37ee8076ddb8",

  
  // spaceId: process.env.CONTENTFUL_SPACE_ID,
  // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: "Q7KZ36G3ZY",
        apiKey: "bf666d58bd605a973c2848ac537114e3",
        indexName: "test_GRADIENT",
        queries,
        chunkSize: 10000
      }
    }
  ],
}
