export default {
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(32)
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'mainImage'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image'
    },
    prepare({ title, image }) {
      if (!image) {
        return { title: `${title}: Missing icon` }
      }
      return {
        title: title,
        subtitle: `${image.alt ||
          'Missing alt text'} | Size: ${image.size || 'default'}`,
        media: image
      }
    }
  }
}
