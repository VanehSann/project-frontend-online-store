import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import Categorias from './Pages/Categorias';
import { getCategories } from './services/api';

function App() {
  const apiDaCategoria = getCategories();
  console.log(apiDaCategoria);
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ CampoBusca } />

      </BrowserRouter>
    </div>
  );
}

export default App;
