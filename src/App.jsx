import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './rounting/home'
import Menu from './rounting/menu'
import Address from './rounting/address'
import Photos from './rounting/photos'
import Home1 from './rounting/home1'
import Veg from './veg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Home/>
<Routes>
<Route path='/Home1' element={<Home1/>} />
<Route path='/menu' element={<Menu/>} />
<Route path='/address' element={<Address/>} />
<Route path='/photos' element={<Photos/>} />
<Route path='/veg' element={<Veg/>} />



</Routes>

</BrowserRouter>

     
    {/* <Menu/>
    <Address/>
    <Photos/>  */}


    </>
  )
}

export default App
