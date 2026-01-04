import React from 'react'
import Shop_banner from '../../Components/Shop-banner/Shop-banner'
import Productcard from '../../Components/Productcard/Productcard';
import Shopdecription from './shopdecription/shopdecription';
import "./shop.css"

export default function Shop() {


  
  const hardwareCategories = [
    {
      id: 1,
      name: "Power Tools",
      slug: "power-tools"
    },
    {
      id: 2,
      name: "Hand Tools",
      slug: "hand-tools"
    },
    {
      id: 3,
      name: "Electrical",
      slug: "electrical"
    },
    {
      id: 4,
      name: "Plumbing",
      slug: "plumbing"
    },
    {
      id: 5,
      name: "Fasteners & Fixings",
      slug: "fasteners-fixings"
    },
    {
      id: 6,
      name: "Paint & Supplies",
      slug: "paint-supplies"
    },
    {
      id: 7,
      name: "Safety Equipment",
      slug: "safety-equipment"
    },
    {
      id: 8,
      name: "Building Materials",
      slug: "building-materials"
    }
  ];

  return (
    <div className="Shop">
      <Shop_banner />
      <div className="shop-container">
        <div className="shop-left">
          <div className="category-list">
            <h1><a href="/">Home</a></h1>
            <hr />
            <ul>
              {hardwareCategories.map((category) => (
                <li key={category.id}>
                  <a href={`/shop/${category.slug}`}>{category.name}</a>
                  <span className="material-symbols-outlined">
                    add
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shop-filter">
            <h1>Filter By</h1>
            <hr />
            <div className="Categories">
              <h3>Categories</h3>
              {hardwareCategories.map((category, index) => (
                <label htmlFor={`category-${index}`} key={index}>
                  {category.name}<input type="checkbox" id={`category-${index}`} />
                </label>
              ))}
            </div>
            <div className="Price">
              <h3>Price</h3>
              <div className="price-range">
                <p>$50</p>
                <div className="sigle-line">
                  <input type="range" />
                  <input type="range" />
                </div>
                <p>$500</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-right">
          <div className="shop-decription">
            <p>We focus on quality, functionality, and value, ensuring that every product delivers dependable performance for both heavy-duty work and everyday use. Browse our categories to find the right tools and materials for your project, all in one place.</p>
          </div>
          <div className="shop-list-top">
            <p>There are 13 products.</p>
            <div className="Sort">
              <p>Sort by:</p>
              <select>
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="shop-list">
            {Array(12).fill(0).map((_, index) => {
              return <Productcard key={index} />
            })}
          </div>
          <div className="product-change">
            <p>Showing 1-12 of 13 item(s)</p>
            <button>next
              <span className="material-symbols-outlined">
                arrow_forward
              </span>

            </button>
          </div>
        </div>
      </div>
      <div className="shop-details">
        <Shopdecription />
      </div>
    </div>
  )
}
