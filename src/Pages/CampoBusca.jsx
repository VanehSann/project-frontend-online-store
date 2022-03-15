import React, { Component } from 'react';
import Categorias from './Categorias';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import Button from './Button';

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
      this.setState({
        categorias: categoriasResponse,
        input: '',
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
    const { results } = produtos;
    this.setState({
      products: results,
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
              onSelectCategory={ () => {
                this.setState({
                  categoryID: categoria.id,
                });
                this.handleClick();
              } }
            />
          ))
        }
        <Button />
        {products.map((produto) => (<ProductCard
          title={ produto.title }
          thumbnail={ produto.thumbnail }
          price={ produto.price }
          key={ produto.id }
          id={ produto.id }
        />))}

      </div>
    );
  }
}
export default CampoBusca;
