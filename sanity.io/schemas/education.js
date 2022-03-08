export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'period',
      title: 'Period',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Sub-Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
    },
  ],
}
