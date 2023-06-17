//import { useState } from 'react'
import './App.css'
import FrontPage from './components/FrontPage.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
    <div>Hello there!</div>
    <form>
      <div>
        <label>Search: </label>
        <input id="search" type="text"/>
      </div>
      <div>
        <label>Location: </label>
        <input id="location" type="text"/>
      </div>
    </form>

    <FrontPage />
    </div>

  )
}

export default App
