import { MdMenu } from 'react-icons/md'

export default {
  type: 'document',
  name: 'navigationMenu',
  title: 'Navigation Menu',
  icon: MdMenu,
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'cta' }]
    }
  ]
}
