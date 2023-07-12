import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: 'p4vhljql', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: 'v2023-03-01',

})

export default sanityClient

