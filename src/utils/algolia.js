const myQuery = `{
    allContentfulCourse {
        edges {
          node {
            description {
              description
              id
              childMarkdownRemark {
                excerpt(format: PLAIN)
              }
            }
            duration
            slug
            title
            image {
              fluid(maxHeight: 10, maxWidth: 10) {
                src
              }
            }
            createdAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
  }`;
  
  const queries = [
    {
      query: myQuery,
      transformer: ({ data }) => data.allContentfulCourse.edges.map(({ node }) => node), // optional
      indexName: 'index name to target', // overrides main index name, optional
      settings: {
        // optional, any index settings
      },
    },
  ];

module.exports = queries