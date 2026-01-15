export default {
  name: "tweets",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "tweet",
      title: "Tweet",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "user" }], // ✅ FIXED (was "users")
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      readOnly: true,
    },
  ],
};
