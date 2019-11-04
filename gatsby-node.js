const Promise = require('bluebird')
const path = require('path')


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulCourse {
              edges {
                node {
                  description {
                    description
                    id
                  }
                  duration
                  slug
                  title
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulCourse.edges
        posts.forEach((course, index) => {
          createPage({
            path: `/blog/${course.node.slug}/`,
            component: blogPost,
            context: {
              slug: course.node.slug
            },
          })
        })
      })
    )
  })
}
