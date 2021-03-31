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
      name: 'description',
      title: 'Meta description',
      type: 'text'
    },
    {
      name: 'content',
      title: 'Page sections',
      type: 'array',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'blockContent' },
        { type: 'ctaPlug' },
      ]
    }    
  ]
}
