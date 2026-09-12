import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
=======
import ContextProvider from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
          <ContextProvider>
    <BrowserRouter>
          <App />
    </BrowserRouter>
          </ContextProvider>
>>>>>>> e800080 (connect user to header)
  </StrictMode>,
)
