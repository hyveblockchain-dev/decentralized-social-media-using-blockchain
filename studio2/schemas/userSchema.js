export default {
  name: 'users',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'walletAddress',
      title: 'Wallet Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      initialValue: 'Unnamed',
    },
    {
      name: 'isProfileImageNft',
      title: 'Is Profile Image NFT',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'url',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'url',
    },
  ],
}
