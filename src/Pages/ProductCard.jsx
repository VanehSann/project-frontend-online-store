import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      productID: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.setState({
      productID: id,
    });
  }

  handleClick() {
    console.log('clicou');
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
  produtos: propTypes.instanceOf(Array).isRequired,
  // https://stackoverflow.com/questions/41771217/react-linter-airbnb-proptypes-array
};

export default ProductCard;
