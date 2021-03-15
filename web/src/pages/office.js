import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from 'components/block-content'
import GraphQLErrorList from 'components/graphql-error-list'
import PeopleGrid from 'components/people-grid'
import Layout from 'containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'lib/helpers'

export const query = graphql`
  query OfficePageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)office/" }) {
      id
      title
      _rawBody
    }
    people: allSanityPerson {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
  }
`

const OfficePage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const personNodes =
    data && data.people && mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs)

  if (!page) {
    throw new Error(
      'Missing "Office" page data. Open the studio at http://localhost:3333 and add "Office" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <h1>{page.title}</h1>
      <BlockContent blocks={page._rawBody || []} />
      {personNodes && personNodes.length > 0 && <PeopleGrid items={personNodes} title='People' />}
    </Layout>
  )
}

export default OfficePage
