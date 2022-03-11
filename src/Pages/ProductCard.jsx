import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { produtos } = this.props;
    return (
      produtos.length === 0 ? (
        <h3>Nenhum produto foi encontrado</h3>) : (
        produtos.map((produto) => (
          <div data-testid="product" key={ produto.title }>
            <h2>{ produto.title }</h2>
            <img src={ produto.thumbnail } alt={ produto.title } />
            <h3>{ produto.price }</h3>
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
