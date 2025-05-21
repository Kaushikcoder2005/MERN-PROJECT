import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, createRoutesFromElements,Route} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/createpage' element={<CreatePage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)
