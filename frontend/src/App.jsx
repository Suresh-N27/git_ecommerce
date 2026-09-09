import { Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Productmain from "./pages/Productmain"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
    <Toaster/>
      <Routes>
        <Route path="/" element={<Productmain/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
