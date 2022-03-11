import React, { Component } from 'react';

class CampoBusca extends Component {

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
