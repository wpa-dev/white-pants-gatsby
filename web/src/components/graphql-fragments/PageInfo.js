import { graphql } from "gatsby";

export const PostInfo = graphql`
  fragment PageInfo on SanityPage {
    id
    title
    _rawContent(resolveReferences: { maxDepth: 10 })
  }
`;
