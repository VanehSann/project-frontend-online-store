import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import carrinhoCompras from './Pages/carrinhoCompras';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ CampoBusca } />
        <Route path="/carrinhoCompras" component={ carrinhoCompras } />
        <Route
          path="/productDetails/:id"
          render={ (props) => <ProductDetails info={ props } /> }
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
