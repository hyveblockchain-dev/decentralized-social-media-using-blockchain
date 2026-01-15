export default {
  name: 'users',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'walletAddress',
      title: 'Wallet Address',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'string',
    },
    {
      name: 'isProfileImageNft',
      title: 'Is Profile Image NFT',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'walletAddress',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Unnamed User',
        subtitle,
      }
    },
  },
}
