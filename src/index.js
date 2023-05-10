import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Shop from './Component/Shop/Shop';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Order from './Component/Orders/Order';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import cartProductsLoader from './Loaders/CartProductLOaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
        
      },
      {
        path: 'order-review',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path: 'manage-inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
