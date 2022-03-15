import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      productID: '',
      price: '',
      thumbnail: '',
      title: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { id, price, thumbnail, title } = this.props;
    this.setState({
      productID: id,
      price,
      thumbnail,
      title,
    });
  }

  handleClick() {
    const { productID, price, thumbnail, title } = this.state;
    // localStorage.setItem('produtoID', productID);
    // localStorage.setItem('produtoPrice', price);
    // localStorage.setItem('produtoThumb', thumbnail);
    // localStorage.setItem('produtoTitle', title);
    const objTeste = { productID, price, thumbnail, title };
    if (localStorage.getItem('items') === null) {
      localStorage.setItem('items', JSON.stringify([objTeste]));
    } else {
      localStorage.setItem('items', JSON.stringify(
        [...JSON.parse(localStorage.getItem('items')), objTeste],
      ));
    }
  }

  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <div>
        <div data-testid="product" key={ title }>
          <h2>{ title }</h2>
          <BrowserRouter>
            <Route
              exact
              path="/productDetails/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
            <Link to={ `/productDetails/${id}` }>
              <img src={ thumbnail } alt={ title } />
            </Link>
          </BrowserRouter>
          <h3>
            R$
            { price }
          </h3>
          <button
            data-testid="product-add-to-cart"
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}
ProductCard.propTypes = {
  price: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  thumbnail: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default ProductCard;
