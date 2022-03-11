import React, { Component } from 'react';
import Categorias from './Categorias';


class CampoBusca extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    // getCategories().then((categoriasResponse) => {
    //   this.setState({
    //     categorias: categoriasResponse,
    //   });
    // });
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}
export default CampoBusca;
