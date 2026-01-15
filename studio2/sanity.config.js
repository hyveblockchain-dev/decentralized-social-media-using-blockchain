import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// 👇 THIS IS THE CORRECT PATH BASED ON YOUR REPO
import schemas from './schemas'

export default defineConfig({
  name: 'default',
  title: 'HyveConnect',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'khg0m9lx',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
})
