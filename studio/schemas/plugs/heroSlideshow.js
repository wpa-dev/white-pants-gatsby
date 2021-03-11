export default {
  type: 'object',
  name: 'heroSlideshow',
  title: 'Hero slideshow',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title'
    },
    {
      type: 'array',
      name: 'images',
      of: [{ type: 'illustration' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: `Hero slideshow: ${title}`
      }
    }
  }
}
