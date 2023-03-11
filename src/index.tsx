import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import Auth from './pages/Auth';
import Favorite from './pages/Favorite';
import Main from './pages/Main';
import AddFavorite from './pages/AddFavorite';
import Error from './pages/Error';
import App from './App';
import  {createGlobalStyle} from 'styled-components'


const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
` 

const router = createBrowserRouter(createRoutesFromElements(
  <>
  
  <Route path = '/' element={<Auth/>}/>
  <Route path = '/Main' element={<Main/>}/>
  <Route path = '/Favorite' element={<Favorite/>}/>
  <Route path = '/AddFavorite' element={<AddFavorite/>}/>
  <Route path='/*' element={<Error/>}/>
  </>
))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Global/>
      <RouterProvider router={router} />
      <App/>
  </React.StrictMode>
);


