import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/listarea.css'
import './styles/chatPage.css'
import { Navbar } from "./Components/Navbar";
import { List } from './Components/List'
import { Chat  } from "./Components/Chat";
import Details from './Components/Details'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)
  // Personalized Instant Connectivity Option
  return (
    <>
      <div className='App'>
      {/*  <Navbar/>
        <List/>
        <Chat/> */}
        <Login/>
      </div>
    </>


  )
}

export default App
