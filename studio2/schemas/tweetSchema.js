export default {
  name: 'tweets',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'tweet',
      title: 'Tweet',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(280),
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'users' }],
      validation: (Rule) => Rule.required(),
    },
  ],
}
