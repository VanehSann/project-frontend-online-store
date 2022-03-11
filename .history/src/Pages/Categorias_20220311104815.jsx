import React, { Component } from 'react';
import propTypes from 'prop-types';

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

Categorias.proptypes = {
  nomeCategoria: PropTypes.string.isRequired,
};

export default Categorias;
