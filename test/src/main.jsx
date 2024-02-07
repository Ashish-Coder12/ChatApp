import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Login from './pages/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path="" element={<App/>} />
      <Route path="login" element={<Login/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
