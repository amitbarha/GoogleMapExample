import { useState } from 'react'
import './App.css'
import GoogleMapExample from './components/GoogleMap/GoogleMapExample'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app-container">
    <GoogleMapExample />
   </div>
  )
}

export default App
