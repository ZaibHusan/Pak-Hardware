import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Title from '../../Components/Title/Title'
import Catgery from '../../Components/Catgery/Catgery'
import Discount from '../../Components/Discount/Discount'
import Products from '../../Components/Products/Products'
import Service from '../../Components/Service/Service'
import Clients from '../../Components/Clients/Clients'
import Brand from '../../Components/Brand/Brand'

export default function Home() {
    return (
        <div>
           <Hero />
           <Title Title={"Shop By Categories"} Decription={"Discover quality products across all categories, curated just for you."} />
           <Catgery />
           <Discount />
           <Products />
           <Service />
           <Clients />
           <Brand />
        </div>
    )
}
