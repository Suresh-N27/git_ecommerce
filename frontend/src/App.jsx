
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Productspage from './pages/Productspage'
import { Toaster } from 'react-hot-toast'



function App() {

  return (
    <>

    <Toaster />
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Productspage/>}/>
      </Routes>
    </>
  )
}

export default App
