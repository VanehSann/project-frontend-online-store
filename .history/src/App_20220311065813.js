import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import * as api from './services/api';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/">
          <CampoBusca api={ api } />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
