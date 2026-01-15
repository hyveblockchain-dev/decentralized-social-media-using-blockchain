export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(280),
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'user' }], // 🔴 MUST be 'user'
      validation: Rule => Rule.required(),
    },
  ],
}
