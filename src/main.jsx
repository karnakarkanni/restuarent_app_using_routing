import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './rounting/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/> */}
    <App />
  </StrictMode>,
)
