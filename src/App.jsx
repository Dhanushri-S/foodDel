import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginSignup/LoginPopUp'


const App = () => {

const [showLogin, setShowLogin] = useState(false)

return (
  <>
 {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
  <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/order" element={<PlaceOrder />}/>

    </Routes>
   
    
  </div>
  
  <Footer/>
  </>
)
}

export default App