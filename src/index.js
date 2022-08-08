import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

const el=document.getElementById('root')
ReactDOM.render(

    <BrowserRouter>
     <App />
    </BrowserRouter>,
  
  el
);
serviceWorker.unregister();
