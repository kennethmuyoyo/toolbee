import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, 
  useCdn: true, 
  apiVersion: 'v2023-03-01',

})

export default sanityClient

