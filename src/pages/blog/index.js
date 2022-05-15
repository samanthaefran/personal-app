import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return(
    <Layout pageTitle="The Latest">
       <ul>
       {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h4>
              <Link to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
              </Link>
              </h4>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage