import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import * as api from './services/api';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ CampoBusca } {...api} />
      </BrowserRouter>
    </div>
  );
}

export default App;
