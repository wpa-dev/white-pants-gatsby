export default {
  type: 'object',
  name: 'illustration',
  title: 'Illustration',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage'
    },
    {
      name: 'backgroundColor',
      title: 'Background color',
      type: 'color' 
    },
    {
      title: 'Body',
      name: 'body',
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
        subtitle: `${image.caption ||
          image.alt ||
          'Missing capton or alt text'} | Size: ${image.size || 'default'}`,
        media: image
      }
    }
  }
}
