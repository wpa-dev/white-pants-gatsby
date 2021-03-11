export default {
  name: 'page',
  title: 'Page',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'heroSlideshow' },
        { type: 'ctaPlug' }
      ]
    }    
  ]
}
