export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      readOnly: true,
    },
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

    // ✅ Profile picture upload (stored in Sanity)
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true, // allows cropping/focal point
      },
    },

    // ✅ Cover image upload (optional, but you already have a field)
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "isProfileImageNFT",
      title: "Is Profile Image NFT",
      type: "boolean",
      initialValue: false,
    },

    // Optional: if NFT, store the NFT image/url here too
    {
      name: "profileImageUrl",
      title: "Profile Image URL (NFT/IPFS/External)",
      type: "url",
      hidden: ({ document }) => !document?.isProfileImageNFT,
    },
  ],
};
