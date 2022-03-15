import React, { Component } from 'react';

class carrinhoCompras extends Component {
  constructor() {
    super();
    this.state = {
      // id: '',
      // price: '',
      // thumb: '',
      // title: '',
      produtos: [],
    };
  }

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('items'));
    // this.setState({
    //   id: localStorage.getItem('produtoID'),
    //   price: localStorage.getItem('produtoPrice'),
    //   thumb: localStorage.getItem('produtoThumb'),
    //   title: localStorage.getItem('produtoTitle'),
    // });
    this.setState({
      produtos: items,
    });
  }

  render() {
    const { produtos } = this.state;
    return (
      <div>
        { produtos && produtos.map((item) => (
          <div key={ item.productID }>
            <h3 data-testid="shopping-cart-product-name">
              { item.title }
            </h3>
            <img src={ item.thumbnail } alt={ item.title } />
            <h4>{ item.price }</h4>
            <p data-testid="shopping-cart-product-quantity">
              {' '}
              { produtos.length }
              {' '}
            </p>
          </div>
        ))}
        { <h3 data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </h3> }
      </div>
    );
  }
}

export default carrinhoCompras;
