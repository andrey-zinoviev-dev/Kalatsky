import React from 'react'
import './App.css'
import Landing from './Landing'
import Home from './Home'
// import Header from './Header'
import Service from './Service'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Services from './Services'

function App() {

  const router = createBrowserRouter([
    {
      element: <Landing />, 
      children: [
      {path:"/", element: <Home />},
      {path: "/services/:serviceIndex", element: <Service />}
    ]}
    // {path: "/services/:service", element: <Service />}
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
