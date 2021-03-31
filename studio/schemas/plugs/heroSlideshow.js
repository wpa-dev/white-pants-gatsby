export default {
  type: 'object',
  name: 'heroSlideshow',
  title: 'Hero slideshow',
  fields: [
    {
      type: 'array',
      name: 'images',
      of: [{ type: 'illustration' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
