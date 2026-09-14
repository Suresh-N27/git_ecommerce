<<<<<<< HEAD
import { Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Productmain from "./pages/Productmain"
import { Toaster } from "react-hot-toast"
=======
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Productspage from './pages/Productspage'
import { Toaster } from 'react-hot-toast'


>>>>>>> e800080 (connect user to header)

function App() {



  return (
    <>
<<<<<<< HEAD
    <Toaster/>
      <Routes>
        <Route path="/" element={<Productmain/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
=======
    <Toaster />
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Productspage/>}/>
>>>>>>> e800080 (connect user to header)
      </Routes>
    </>
  )
}

export default App
