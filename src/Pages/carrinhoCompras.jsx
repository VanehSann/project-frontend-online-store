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
      contador: 1, // contador se iniciando com o zero
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
      contador: 1, // produtos.length === 0 ? 1 : produtos.length
    });
  }

  // funcao do requisito 10 //

  diminui = ({ target }) => {
    console.log(target.name);
    const { contador } = this.state;
    const a = 1;
    if (contador <= 1) {
      this.setState({
        contador: 1,
      });
    } else {
      this.setState({
        contador: contador - a,
      });
    }
  }

  aumenta = () => {
    const { contador } = this.state;
    const a = 1;
    this.setState({
      contador: contador + a,
    });
  }

  // fim da funcao do requisito 10 //

  render() {
    const { produtos, contador } = this.state;
    if (!produtos) {
      return (<h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>);
    }
    return (
      <div>
        { produtos && produtos.map((item) => (
          <div key={ item.productID }>
            <h3 data-testid="shopping-cart-product-name">
              { item.title }
            </h3>
            <img src={ item.thumbnail } alt={ item.title } />
            <h4>{ item.price }</h4>
            {/*  requisito 10  */}
            <button
              data-testid="product-increase-quantity"
              type="button"
              name="aumenta"
              onClick={ this.aumenta }
              key={ item.productID }
            >
              +

            </button>
            <p data-testid="shopping-cart-product-quantity" name="contador">
              {contador}
            </p>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              name="diminui"
              onClick={ this.diminui }
              key={ item.productID }
            >
              -

            </button>
            {/* requisito 10 */}
          </div>
        ))}
      </div>
    );
  }
}

export default carrinhoCompras;
