import React, { Component } from 'react';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
      encontrou: false,
    };
    console.log(this.props);
  }

  render() {
    const { encontrou, produtos } = this.state;
    return (
      encontrou ? (
        <h3>Nenhum produto foi encontrado</h3>) : (
        produtos.map((produto) => (
          <div data-testid="product">
            <h2>{ produto.title }</h2>
            <img src={ produto.thumbnail } alt={ produto.title } />
            <h3>{ produto.price }</h3>
          </div>
        ))
      )
    );
  }
}
export default ProductCard;
