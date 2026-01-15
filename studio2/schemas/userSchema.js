export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "walletAddress",
      title: "Wallet Address",
      type: "string",
      readOnly: true,
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
