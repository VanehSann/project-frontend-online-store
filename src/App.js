import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import Button from './Pages/Button';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ CampoBusca } />
        <Button> </Button>
      </BrowserRouter>
    </div>
  );
}

export default App;
