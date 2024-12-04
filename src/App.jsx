import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import './Style.css'
import Sidebar from './Components/sidebar'
import Home from './Components/Home'

function App() {

  const [toggle, setToggle] = useState(true)
  const Toggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='container-fluid  min-vh-100 App'>
      <div className='row'>
        {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
          <Sidebar />
        </div>}
        {toggle && <div className='col-4 col-md-2'></div>}
        <div className='col align-items-center'>
          <Home Toggle={Toggle}/>
        </div>
      </div>
    </div>
  )
}

export default App
