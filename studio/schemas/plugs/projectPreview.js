export default {
  name: 'projectPreview',
  title: 'Project preview',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(32)
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage'
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
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
