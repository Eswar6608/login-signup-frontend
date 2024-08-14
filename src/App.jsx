import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './routes/Home';
import Signup from "./routes/Signup"
import Login from './routes/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path='/Register' element={<Signup/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  </Routes> 
  </BrowserRouter>

      </div>
       
    </>
  )
}

export default App
