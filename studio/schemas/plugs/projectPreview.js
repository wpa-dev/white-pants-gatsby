export default {
  name: 'projectPreview',
  title: 'Project preview',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(32)
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockContent'
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta'
    }
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image'
    },
    prepare({ title, image }) {
      if (!image) {
        return { title: `${title}: Missing project preview image` }
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
