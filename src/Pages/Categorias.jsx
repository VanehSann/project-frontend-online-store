import React, { Component } from 'react';
import propTypes from 'prop-types';

class Categorias extends Component {
  render() {
    const { nomeCategoria, ID } = this.props;
    return (
      <label data-testid="category" htmlFor={ nomeCategoria }>
        <input
          type="radio"
          name="nomeCategoria"
          id={ ID }
        />
        {nomeCategoria}
      </label>
    );
  }
}

Categorias.propTypes = {
  nomeCategoria: propTypes.string.isRequired,
  ID: propTypes.string.isRequired,
};

export default Categorias;
