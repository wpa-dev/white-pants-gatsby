export default {
  name: 'illustration',
  title: 'Illustration',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'backgroundColor',
      title: 'Background color',
      type: 'color' 
    },
    {
      name: 'body',
      title: 'Body',
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
      image: 'image'
    },
    prepare({ image }) {
      if (!image) {
        return { title: 'Illustration with no image' }
      }
      return {
        title: `Illustration`,
        subtitle: `${image.alt ||
          'Missing alt text'} | Size: ${image.size || 'default'}`,
        media: image
      }
    }
  }
}
