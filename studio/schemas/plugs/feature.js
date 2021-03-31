export default {
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(32)
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'mainImage'
    },
    {
      title: 'Description',
      name: 'description',
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
