import React, { Component } from 'react';
import { getCategories } from 'src/services/api';
import Categorias from './Categorias';

class CampoBusca extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    getCategories().then((categoriasResponse) => {
      this.setState({
        categorias: [...categoriasResponse],
      });
    });
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        {
          categorias.map((categoria) => (<Categorias
            key={ categoria.id }
            nomeCategoria={ categoria.name }
            data-testid="category"
          />))
        }
      </div>
    );
  }
}
export default CampoBusca;
