import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import carrinhoCompras from './carrinhoCompras';

class Button extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <button type="button">
            <Link data-testid="shopping-cart-button" to="/carrinhoCompras">
              Carrinho
            </Link>
            <Route exact path="/carrinhoCompras" component={ carrinhoCompras } />
          </button>
        </BrowserRouter>
      </div>
    );
  }
}

export default Button;
