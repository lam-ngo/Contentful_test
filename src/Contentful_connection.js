// import createClient directly
import {createClient} from 'contentful'

const SPACE_ID = '9hlk44cnhhi9';
const ACCESS_TOKEN = 'db227854e92bf9f0a7d312a03b7bff4525683f855929ba02262d6f1efce7890e';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

const getProducts = () => {
  client.getEntries({
    content_type: 'product'
  })
  .then(entries => entries.items});
}

export default getProducts;
