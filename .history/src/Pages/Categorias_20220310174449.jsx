import React, { Component } from 'react';

class Categorias extends Component {
  render() {
    const {nomeCategoria} = this.props;
    return (
      <label data-testid="category">
         <input type="radio-button"/> {nomeCategoria} </label>
    );
  }
}
export default Categorias;
