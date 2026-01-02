import React from 'react'
import { assets } from '../../assets'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <header className='Navbar'>
            <div className="nav-container">
                {/* ------Navbar Logo ------ */}
                <div className="nav-logo">
                    <a href="/">
                        <img src={assets.logo} alt="" />
                    </a>
                </div>

                {/* ------ Navbar Menu ------ */}
                <div className="navbar-menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop <span className='pink-span'>SALE</span></NavLink>
                    <NavLink to="/product">Product <span>HOT</span> </NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>


                {/* ------ Navbar cart and User ------ */}
                <div className="nav-cart-user">
                    <div className="nav-cart">
                        <span class="material-symbols-outlined">
                            add_shopping_cart
                        </span>
                    </div>
                    <div className="nav-user">
                        <span className="material-symbols-outlined">
                            person
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
