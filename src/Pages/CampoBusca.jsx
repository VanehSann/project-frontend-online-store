import React, { Component } from 'react';
import Categorias from './Categorias';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
// import ProductCard from './ProductCard';

class CampoBusca extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
      input: '',
      categoryID: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getCategories().then((categoriasResponse) => {
      const mapeamento = categoriasResponse.map((categoria) => categoria.id);
      this.setState({
        categorias: categoriasResponse,
        input: '',
        categoryID: [...mapeamento],
        products: [],
      });
    });
  }

  handleChange({ target: { value } }) {
    this.setState({
      input: value.toLowerCase(),
    });
  }

  async handleClick() {
    const { input, categoryID } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(categoryID, input);
    this.setState({
      products: produtos,
    });
  }

  render() {
    const { categorias, products } = this.state;
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
        {
          categorias.map((categoria) => (
            <Categorias
              key={ categoria.id }
              nomeCategoria={ categoria.name }
              ID={ categoria.id }
              data-testid="category"
            />
          ))
        }
        {/* <ProductCard produtos={ products } /> */}
      </div>
    );
  }
}
export default CampoBusca;
