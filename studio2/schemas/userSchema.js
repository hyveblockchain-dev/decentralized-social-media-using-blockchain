export default {
  name: 'user',
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
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isProfileImageNFT',
      title: 'Is Profile Image NFT',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
    },
  ],
}
