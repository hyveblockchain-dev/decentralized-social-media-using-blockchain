import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || ''
const dataset = process.env.SANITY_STUDIO_DATASET || ''

if (!projectId || !dataset) {
  // This makes the build fail with a CLEAR message instead of Rollup garbage
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID or SANITY_STUDIO_DATASET environment variables.'
  )
}

export default defineConfig({
  name: 'default',
  title: 'HyveConnect',
  projectId,
  dataset,
  plugins: [deskTool()],
  basePath: '/',
})
