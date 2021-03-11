// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document schemas
import category from './documents/category'
import companyInfo from './documents/companyInfo'
import page from './documents/page'
import person from './documents/person'
import post from './documents/post'
import project from './documents/project'
import siteSettings from './documents/siteSettings'

// Object schemas
import blockContent from './objects/blockContent'
import blockText from './objects/blockText'
import cta from './objects/cta'
import postAuthor from './objects/postAuthor'
import projectMember from './objects/projectMember'
import mainImage from './objects/mainImage'
import slideshow from './objects/slideshow'

// Plugs
import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    blockText,
    category,
    companyInfo,
    cta,
    mainImage,
    page,
    person,
    post,
    postAuthor,
    project,
    projectMember,
    siteSettings,
    slideshow

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
  .concat(allPlugs),
})