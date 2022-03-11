import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import * as api from './services/api';
import Categorias from './Categorias';

const a = api.getCategories().then((categories) => { console.log(categories); });

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/">
          <CampoBusca />
          {
            a.map((categoria) => (<Categorias
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
