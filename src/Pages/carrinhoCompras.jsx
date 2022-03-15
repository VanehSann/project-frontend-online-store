import React, { Component } from 'react';

class carrinhoCompras extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      price: '',
      thumb: '',
      title: '',
    };
  }

  componentDidMount() {
    this.setState({
      id: localStorage.getItem('produtoID'),
      price: localStorage.getItem('produtoPrice'),
      thumb: localStorage.getItem('produtoThumb'),
      title: localStorage.getItem('produtoTitle'),
    });
  }

  render() {
    const { id, price, thumb, title } = this.state;
    return (
      <div>
        <h3>{ title }</h3>
        <img src={ thumb } alt={ title } />
        <h5>{ `R$${price}` }</h5>
      </div>
    );
  }
}

export default carrinhoCompras;
