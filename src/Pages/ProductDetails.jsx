import React, { Component } from 'react';
import Button from './Button';
import { getProductsById } from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      info: '',
    };
  }

  async componentDidMount() {
    const { info: { match: { params: { id } } } } = this.props;
    const produtos = await getProductsById(id);
    console.log(produtos);
  }

  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}

export default ProductDetails;
