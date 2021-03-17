import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from 'lib/helpers'
import BlogPostPreviewGrid from 'components/blog-post-preview-grid'
import GraphQLErrorList from 'components/graphql-error-list'
import Layout from 'containers/layout'
import Section from 'components/section'

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const JournalPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <Section>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Section>
    </Layout>
  )
}

export default JournalPage
