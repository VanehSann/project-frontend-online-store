import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampoBusca from './Pages/CampoBusca';
import * as api from './services/api'

api.getCategories().then(categories => { console.log(categories) })

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/">
          <CampoBusca />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
