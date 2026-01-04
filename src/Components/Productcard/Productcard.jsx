import React from 'react'
import "./Productcard.css"
import { useNavigate } from 'react-router-dom'
export default function Productcard() {
    const navigate = useNavigate();
    return (
        <div className="Productcard">
            <div onClick={()=>navigate("/product/:id")}  className="productcard-conatiner">
                <div className="product-img">
                    <img src="https://prestashop.codezeel.com/PRS23/PRS230555/default/11-home_default/porter-cable-pcck640-impact-driver-14-inch.jpg" alt="" />
                </div>
                <hr />
                <div className="product-details">
                    <p>Porter Cable PCCK640 Impact Driver 14"</p>
                    <div className="Star">
                        {Array(5).fill(0).map((index) => <span key={index} className="material-symbols-outlined">star</span>)}
                    </div>
                    <div className="price">
                        <p>$ 9.99</p>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
