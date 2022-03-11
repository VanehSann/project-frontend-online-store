import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import Categorias from './Pages/Categorias';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ CampoBusca } />
        <Route path="/">{apiDaCategoria.map((categoria) => <Categorias  key={categoria.id} nomeCategoria={ categoria.name }/>)}</Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
