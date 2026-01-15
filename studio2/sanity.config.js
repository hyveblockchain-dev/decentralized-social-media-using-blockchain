import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// 👇 This path might be different in your repo.
// If this import errors, I’ll tell you the exact correct path after you check step 3.
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'HyveConnect',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'khg0m9lx',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
