import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const courses = get(this, 'props.data.allContentfulCourse.edges')
    

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recent Courses</h2>
            <ul className="article-list">
              {courses.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
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
          fluid {
            src
          }
        }
        createdAt(formatString: "MMMM Do, YYYY")
      }
    }
  }
  }
    
`
