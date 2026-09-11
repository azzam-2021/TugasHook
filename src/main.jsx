import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2'
import { Route, Router, RouterProvider } from 'react-router'
import router from './Router'
import routerTugas from './RouterTugas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
    {/* <RouterProvider router={router}/> */}
    {/* <RouterProvider router={routerTugas} /> */}
  </StrictMode>,
)
