export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  liveEdit: false,
  // Uncomment the next line if you want to prevent pages from being created or deleted in the Studio.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'heroSlideshow',
      title: 'Hero slideshow',
      type: 'array',
      of: [
        { type: 'illustration' }
      ]
    },
    {
      name: 'introBlock',
      title: 'Intro block',
      type: 'blockContent'
    },
    {
      name: 'projectPreviews',
      title: 'Featured projects',
      type: 'array',
      of: [
        { type: 'projectPreview' }
      ]
    },
    {
      name: 'capabilities',
      title: 'Capabilities',
      type: 'array',
      of: [
        { type: 'feature' }
      ]
    }
  ]
}
