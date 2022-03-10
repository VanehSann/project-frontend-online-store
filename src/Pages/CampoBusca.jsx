import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class CampoBusca extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      category: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({
      input: value,
    });
  }

  handleClick() {
    const { input, category } = this.state;
    const produtos = getProductsFromCategoryAndQuery(category, input);
    this.setState({
      products: [...produtos],
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <input
          type="text"
          name="mainSearch"
          id="mainSearch"
          placeholder="Digite aqui"
          onChange={ this.handleChange }
          data-testid="query-input"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Procurar
        </button>
        <ProductCard produtos={ products } />
      </div>
    );
  }
}
export default CampoBusca;
