import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home';
import Rodape from './pages/Rodape';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Rodape />
    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
