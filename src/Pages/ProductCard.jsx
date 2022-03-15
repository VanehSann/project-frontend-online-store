import React, { Component } from 'react';
import propTypes from 'prop-types';
import ProductDetails from './ProductDetails';

class ProductCard extends Component {
  render() {
    const { produtos } = this.props;
    return (
      produtos.length === 0 ? (
        <h3>Nenhum produto foi encontrado</h3>) : (
        produtos.map((produto) => (
          <div
            data-testid="product"
            key={ produto.title }
          >
            <img src={ produto.thumbnail } alt={ produto.title } />
            <h3>
              R$
              { produto.price }
            </h3>
            <button
              type="submit"
              data-testid="product-detail-link"
              onClick={ <ProductDetails /> }
            >
              Abrir
            </button>
          </div>
        ))
      )
    );
  }
}
ProductCard.propTypes = {
  produtos: propTypes.instanceOf(Array).isRequired,
  // https://stackoverflow.com/questions/41771217/react-linter-airbnb-proptypes-array
};

export default ProductCard;
