export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
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
