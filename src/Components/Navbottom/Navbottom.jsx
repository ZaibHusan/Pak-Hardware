import React from 'react'
import './Navbottom.css'
export default function Navbottom() {
    return (
        <div className="Navbottom">


            <div className="navbottom-left">
                <span className="material-symbols-outlined">
                    menu
                </span>
                <p>Shop By Categorties</p>
            </div>


            <div className="navbottom-middle">
                <div className="navbottom-middle-container">
                    <div className="navbottom-middle-left">
                        <select>
                            <option>All Categories</option>
                            <option>Power Tools</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                            <option>Hardware</option>
                            <option>Safety Tools</option>
                        </select>
                    </div>
                    <span>|</span>
                    <div className='navbottom-middle-right'>
                        <input type="text" placeholder='Search products here...' />
                    </div>
                </div>
                <button>Search</button>
            </div>


            <div className="navbottom-right">
                <span className="material-symbols-outlined">
                    local_shipping
                </span>
                <p>Free Shipping Above $199</p>
            </div>
        </div>
    )
}
