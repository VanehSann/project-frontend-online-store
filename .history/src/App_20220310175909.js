import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import Categorias from './Pages/Categorias';
import { getCategories } from './services/api';

function App() {
  const apiDaCategoria = [getCategories()];
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ CampoBusca } />
      </BrowserRouter>

      {
        apiDaCategoria.map((categoria) => (<Categorias
          key={ categoria.id }
          nomeCategoria={ categoria.name }
        />))
      }

    </div>
  );
}

export default App;
