import React from 'react'
import './App.css'
import Landing from './Landing'
import Header from './Header'
function App() {
  const [navOpened, setNavOpened] = React.useState(false);

  return (
    <>
      <Header setNavOpened={setNavOpened}/>
      <Landing navOpened={navOpened} setNavOpened={setNavOpened}/>
    </>
  )
}

export default App
