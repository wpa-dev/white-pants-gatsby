import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from 'components/block-content'
import GraphQLErrorList from 'components/graphql-error-list'
import Layout from 'containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'lib/helpers'

export const query = graphql`
  query WorkPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)office/" }) {
      id
      title
      description
    }
  }
`

const WorkPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page

  if (!page) {
    throw new Error(
      'Missing "Office" page data. Open the studio at http://localhost:3333 and add "Office" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <h1>{page.title}</h1>
    </Layout>
  )
}

export default WorkPage
