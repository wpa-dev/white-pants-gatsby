import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
import { Wrapper, Container, Title, Listings } from './blog-post-preview-grid.css'

function BlogPostPreviewGrid (props) {
  return (
  <Wrapper>
    <Container>
      <h1>Journal</h1>
      {props.title && (
        <Title>
          {props.browseMoreHref ? (
            <Link to={props.browseMoreHref}>{props.title}</Link>
          ) : (
            props.title
          )}
        </Title>
      )}
      <Listings>
        {props.nodes &&
          props.nodes.map(node => (
            <BlogPostPreview {...node} />
          ))
        }
      </Listings>
      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </Container>
  </Wrapper>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
