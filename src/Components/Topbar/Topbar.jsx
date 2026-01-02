import React from 'react'
import './Topbar.css'
export default function Topbar() {
    return (
        <div className="Topbar">
            <div className="Tobar-left">
                <p>Get Upto 25% Cashback On First Order: GET25OFF - <span>Shop Now</span></p>
            </div>
            <div className="Topbar-right">
                <ul>
                    <li>Order Tracking</li>
                    <span>|</span>
                    <li>Help Center</li>
                    <span>|</span>
                    <li>English</li>
                    <span>|</span>
                    <li>
                        $USD
                        <span className="material-symbols-outlined">
                            keyboard_arrow_down
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
