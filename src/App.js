import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ CampoBusca } />
      </BrowserRouter>
    </div>
  );
}

export default App;
