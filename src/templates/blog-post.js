import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const course = get(this.props, 'data.contentfulCourse')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${course.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img className={heroStyles.heroImage} alt={course.title} fluid={course.image.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{course.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {course.createdAt}
            </p>
           <p>{course.description.description}</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    contentfulCourse(slug: {eq: $slug}) {
    createdAt(formatString: "MMMM Do, YYYY")
    description {
      description
      childMarkdownRemark {
            excerpt(format: PLAIN)
          }
    }
    image {
      fluid {
        src
      }
    }
    duration

    title
    slug
  }
  }
`
