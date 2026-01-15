export default {
  name: 'tweets',
  title: 'Tweets',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'user' }], // 🔴 MUST be 'user'
    },
  ],
}
