import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-26', 
  useCdn: true 
})