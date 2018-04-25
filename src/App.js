import React, { Component } from 'react';

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

    const myRequest = new Request('http://localhost:3005/product');

    fetch(myRequest)
    .then(response => {
      return response.json();
    })
    .then(products => {
      console.log(products);
      this.setState({
        products: products
      });
    }).catch(err => console.log(`Error: ${err}`))
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
  <div style={style.container}>
    <h3>{product.name}</h3>
    <p>By {product.brand}</p>
    <p><img src={product.imageUrl} /></p>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button style={style.button}>Add to cart</button>
    <hr/>
  </div>

const style = {
  container: {
    width: '400px',
    textAlign: 'center'
  },
  button: {
    height: '50px',
    width: '200px',
    fontSize: '16px',
    fontWeight: '600'
  }
}
export default App;
