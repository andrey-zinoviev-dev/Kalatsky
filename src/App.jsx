import React from 'react'
import './App.css'
import Landing from './Landing'
import Header from './Header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [navOpened, setNavOpened] = React.useState(false);
  const router = createBrowserRouter([
    {path: "/", element: <Landing />},
    {path: "/dev", element: <Header />}
  ])
  return (
    <RouterProvider router={router} />
    // <>
    //   <Header setNavOpened={setNavOpened}/>
    //   <Landing navOpened={navOpened} setNavOpened={setNavOpened}/>
    // </>
  )
}

export default App
