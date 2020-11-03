import { makeClient } from '@spree/storefront-api-v2-sdk';

const client = makeClient({
  host: process.env.REACT_APP_SPREE_API_URL
});


export default client;