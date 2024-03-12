import React from 'react'
import {Route,Routes} from 'react-router-dom'

import Dog from './Components/Pages/Dog'
import Cat from './Components/Pages/Cat'
import Main from './Components/Pages/Main'
import { Link } from 'react-router-dom/dist'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/Cat'>Cat</Link></li>
          <li><Link to='/Dog'>Dog</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cat' element={<Cat />} />
        <Route path='/dog' element={<Dog />} />
      </Routes>
    </div>
  )
}

export default App