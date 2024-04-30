import React from 'react'
import './Header.css'
import header_img from './header_img.png'


const Header = () => {
  return (
    <div className='header' style={{ 
      backgroundImage: `url( ${header_img} )` }}>
        <div className='header-contents'>
            <h2>Order your favourite food here</h2>
            <p>Choose from diverse menu featuring a delectable array of dishes.
               Our mission is to satisy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button>View menu</button>
        </div>

    </div>
  )
}

export default Header
