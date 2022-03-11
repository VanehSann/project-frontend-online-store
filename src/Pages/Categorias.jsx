import React, { Component } from 'react';

class Categorias extends Component {
  render() {
    const { nomeCategoria } = this.props;
    return (
      <label data-testid="category" htmlFor="nomeCategoria">
        <input type="radio" name="nomeCategoria" id="nomeCategoria" />
        {' '}
        {nomeCategoria}
        {' '}

      </label>
    );
  }
}
export default Categorias;
