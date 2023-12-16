import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/listarea.css'
import './styles/chatPage.css'
import './styles/navbar.css'
import { Navbar } from "./Components/Navbar";
import { List } from './Components/List'
import { Chat  } from "./Components/Chat";
import Details from './Components/Details'
import Login from './pages/Login'
import MobNav from './Components/MobNav'

function App() {
  const [count, setCount] = useState(0)
  // Personalized Instant Connectivity Option
  return (
    <>
      <div >
        <div className='App'>
          <div className="is-flex flexdirection">
            <Navbar/>
            <MobNav/>
            <List/>
          </div>
          <Chat/>
        </div>
        {/* <Login/> */}
      </div>
    </>


  )
}

export default App
