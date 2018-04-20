import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    client.getEntries({
      content_type: 'product'
    })
    .then(function(entries) {
      console.log(entries.items);
      this.setState({
        products: entries.items
      });
    }.bind(this))
  }

  render() {
    const productsList =
      this.state.products.length === 0
      ? 'loading...'
      : this.state.products.map((product, index) => <Product key={index} product={product} />);
    return (
      <div>
        {productsList}
      </div>
    );
  }
}

const Product = ({ product }) =>
  <div>
    <p>{product.fields.name}</p>
    <p>From: {product.fields.brand}</p>
    <p>Image url: {product.fields.image.fields.file.url}</p>
    <p>{product.fields.description}</p>
    <button>Add to cart</button>
    <hr/>
  </div>
export default App;
