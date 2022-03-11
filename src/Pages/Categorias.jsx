import React, { Component } from 'react';
import propTypes from 'prop-types';
// import ProductCard from './ProductCard';

class Categorias extends Component {
  render() {
    const { nomeCategoria, ID, onSelectCategory } = this.props;
    return (
      <div>
        <label data-testid="category" htmlFor={ ID }>
          <input
            type="radio"
            name="nomeCategoria"
            id={ ID }
            onClick={ onSelectCategory }
          />
          {nomeCategoria}
        </label>
      </div>
    );
  }
}

Categorias.propTypes = {
  nomeCategoria: propTypes.string.isRequired,
  ID: propTypes.string.isRequired,
};

export default Categorias;
