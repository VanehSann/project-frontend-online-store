import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      productID: '',
      price: '',
      thumbnail: '',
      title: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { id, price, thumbnail, title } = this.props;
    this.setState({
      productID: id,
      price,
      thumbnail,
      title,
    });
  }

  handleClick() {
    const { productID, price, thumbnail, title } = this.state;
    localStorage.setItem('produtoID', productID);
    localStorage.setItem('produtoPrice', price);
    localStorage.setItem('produtoThumb', thumbnail);
    localStorage.setItem('produtoTitle', title);
  }

  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div>
        <div data-testid="product" key={ title }>
          <h2>{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <h3>
            R$
            { price }
          </h3>
          <button
            data-testid="product-add-to-cart"
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}
ProductCard.propTypes = {
  price: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  thumbnail: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default ProductCard;
