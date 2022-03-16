import propTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductsById } from '../services/api';
import Button from './Button';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      produto: '',
    };
  }

  async componentDidMount() {
    const { info: { match: { params: { id } } } } = this.props;
    const produto = await getProductsById(id);
    this.setState({
      produto,
    });
  }

  render() {
    const { produto } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{ produto.title }</h3>
        <img src={ produto.thumbnail } alt={ produto.title } />
        <h4>{`R$ ${produto.price}`}</h4>
        <Button />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  info: propTypes.string.isRequired,
};

export default ProductDetails;
