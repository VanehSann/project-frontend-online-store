import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import Categorias from './Pages/Categorias';
import { getCategories } from './services/api';

function App() {
  const apiDaCategoria = [getCategories()];
  console.log(apiDaCategoria); // vem uma promise da api 
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ CampoBusca } />
        <Route path="/">
          {
            apiDaCategoria.map((categoria) => (<Categorias
              key={ categoria.id }
              nomeCategoria={ categoria.name }
              data-testid="category"
            />))
          }
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
