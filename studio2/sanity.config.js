import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// ✅ Import named export that we guaranteed exists
import {schemaTypes} from './schemas'

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
