import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import Home from './Home';
import Node from './Node';
import Html from './Html';
import Reactt from './React';

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
const router = createBrowserRouter ([
    {
      path : '/',
      element : <Home/>
    },
    {
      path : 'Home',
      element : <Home/>
    },
    {
      path : 'Node',
      element : <Node/>
    },
    {
      path : 'Html',
      element : <Html/>
    },
    {
      path : 'React',
      element : <Reactt/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
