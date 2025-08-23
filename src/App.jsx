import { useState } from 'react'

import './App.css'
import './components/Header';
import './components/Body';
import './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
