import React, { useEffect, useState } from 'react'
import { assets } from '../../assets'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    const [tougle, settougle] = useState(false)

    useEffect(() => {
        document.body.style.overflow = tougle ? "hidden" : "auto";
    }, [tougle])
    return (
        <header className='Navbar'>
            <div className="nav-container">
                {/* ------Navbar Logo ------ */}
                <div className="nav-logo">
                    <Link to="/">
                        <img src={assets.logo} alt="" />
                    </Link>
                </div>

                {/* ------ Navbar Menu ------ */}
                <div className="navbar-menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop <span className='pink-span'>SALE</span></NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>


                {/* ------ Navbar cart and User ------ */}
                <div className="nav-cart-user">
                    <div className="nav-tougle">
                        <span onClick={(pre) => settougle(!tougle)} className="material-symbols-outlined">
                            menu
                        </span>

                    </div>
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

            {tougle && (
                <div className="mobile-menu">
                    <div className="mobile-menu-header">
                        <h1 className="text-logo">PAK <span>HARDWARE</span></h1>
                        <span onClick={() => settougle(false)} className="material-symbols-outlined">
                            close
                        </span>

                    </div>

                    <nav className="mobile-menu-links">
                        <NavLink onClick={() => { settougle(false); }} to="/">Home</NavLink>
                        <NavLink onClick={() => { settougle(false); }} to="/shop">Shop</NavLink>
                        <NavLink onClick={() => { settougle(false); }} to="/about">About</NavLink>
                        <NavLink onClick={() => { settougle(false); }} to="/contact">Contact</NavLink>
                    </nav>
                </div>
            )}

        </header>
    )
}
