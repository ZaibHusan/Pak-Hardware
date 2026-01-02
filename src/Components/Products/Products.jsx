import React from 'react'
import Productcard from '../Productcard/Productcard'
import "./Product.css"
export default function Products() {
    return (
        <div className="Products">
            <div className="produtcts-header">
                <h1>Trending Products</h1>
            </div>
            <div className="products-container">
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
            </div>
        </div>
    )
}
