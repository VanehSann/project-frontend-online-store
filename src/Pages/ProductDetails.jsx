import propTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductsById } from '../services/api';
import Button from './Button';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      produto: '',
      email: '',
      textarea: '',
      nota: '',
      avaliacoes: [],
      salvaavaliacoes: [],
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  async componentDidMount() {
    const { info: { match: { params: { id } } } } = this.props;
    const produto = await getProductsById(id);
    this.setState({
      produto,
    });
  }

  onChangeInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  click = () => {
    const { email, nota, textarea, avaliacoes } = this.state;
    this.setState({
      avaliacoes: [email, nota, textarea],

    });
    this.setState((prev) => ({
      salvaavaliacoes: [...prev.salvaavaliacoes, email, nota, textarea],
      email: '',
      textarea: '',

    }));
  }

  render() {
    const { produto, email, nota, textarea, avaliacoes } = this.state;
    console.log(avaliacoes);
    return (
      <>
        <div>
          <h3 data-testid="product-detail-name">{ produto.title }</h3>
          <img src={ produto.thumbnail } alt={ produto.title } />
          <h4>{`R$ ${produto.price}`}</h4>
          <Button />
        </div>
        <fieldset>
          <label htmlFor="email">
            <input type="text" id="email" name="email" required value={ email } onChange={ this.onChangeInput } />
          </label>
          <label htmlFor="textarea">
            <textarea type="textarea" id="textarea" name="textarea" value={ textarea } onChange={ this.onChangeInput } />
          </label>
          <label htmlFor="nota">
            <input type="radio" id="nota" data-testid="1-rating" name="nota" value={ nota } onChange={ this.onChangeInput } />
            <input type="radio" id="nota" data-testid="2-rating" name="nota" value={ nota } onChange={ this.onChangeInput } />
            <input type="radio" id="nota" data-testid="3-rating" name="nota" value={ nota } onChange={ this.onChangeInput } />
            <input type="radio" id="nota" data-testid="4-rating" name="nota" value={ nota } onChange={ this.onChangeInput } />
            <input type="radio" id="nota" data-testid="5-rating" name="nota" value={ nota } onChange={ this.onChangeInput } />
          </label>
          <button onClick={ this.click } type="submit">Avaliar</button>
        </fieldset>
      </>
    );
  }
}

ProductDetails.propTypes = {
  info: propTypes.string.isRequired,
};

export default ProductDetails;
