import React, { useState } from "react";
import "./Product.css";
import Navbottom from "../../Components/Navbottom/Navbottom";
import { useNavigate } from "react-router-dom";
import Productcard from "../../Components/Productcard/Productcard";
import Discount from "../../Components/Discount/Discount";

export default function Product() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);
    const productImages = [
        "https://prestashop.codezeel.com/PRS23/PRS230555/default/11-large_default/porter-cable-pcck640-impact-driver-14-inch.jpg",
        "https://prestashop.codezeel.com/PRS23/PRS230555/default/12-large_default/porter-cable-pcck640-impact-driver-14-inch.jpg",
        "https://prestashop.codezeel.com/PRS23/PRS230555/default/15-large_default/porter-cable-pcck640-impact-driver-14-inch.jpg",
        "https://prestashop.codezeel.com/PRS23/PRS230555/default/13-large_default/porter-cable-pcck640-impact-driver-14-inch.jpg"
    ];


    return (
        <div className="Product">
            <Navbottom />

            {/* Breadcrumb */}
            <div className="product-breadcrumb">
                <span onClick={() => navigate("/")}>Home</span>
                <span>{">"}</span>
                <span onClick={() => navigate("/shop")}>Shop</span>
                <span>{">"}</span>
                <p>Porter Cable PCCK640 Impact Driver 14</p>
            </div>

            {/* Main */}
            <section className="product-layout">
                {/* Gallery */}
                <div className="product-gallery">
                    <div className="product-thumbs">
                        {productImages.map((img, i) => (
                            <img key={i} onClick={() => setSelectedImage(i)} src={img} alt="product" />
                        ))}
                    </div>

                    <div className="product-main-image">
                        <img src={productImages[selectedImage]} alt="main product" />
                    </div>
                </div>

                {/* Info */}
                <div className="product-info">
                    <p className="product-brand">Porter Cable</p>

                    <h1 className="product-title">
                        Porter Cable PCCK640 Impact Driver 14"
                    </h1>

                    <div className="product-price">
                        <span className="old">$29.99</span>
                        <span className="new">$12.99</span>
                    </div>

                    <div className="product-review">
                        <div className="stars">
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <span key={i} className="material-symbols-outlined">
                                        star
                                    </span>
                                ))}
                        </div>
                        <span className="review-text">Based on 4 reviews</span>
                    </div>

                    <div className="product-actions">
                        <button className="btn-outline">Add to cart</button>
                        <button className="btn-solid">Buy now</button>
                    </div>

                    <ul className="product-policies">
                        <li>
                            <span class="material-symbols-outlined">
                                local_shipping
                            </span>
                            <div>
                                <strong>Free Shipping & Returns</strong>
                                <p>Orders over $99</p>
                            </div>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                schedule
                            </span>
                            <div>
                                <strong>Estimated Delivery</strong>
                                <p>Dispatched within 24 hours</p>
                            </div>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                lock
                            </span>
                            <div>
                                <strong>Security Policy</strong>
                                <p>Secure payments & data protection</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Description */}
            <section className="product-description">
                <div className="description-text">
                    <h2>About this product</h2>
                    <p>
                        This robust tool part is engineered for high precision and long-lasting performance. Manufactured from premium-grade materials, it ensures excellent resistance to wear, corrosion, and impact. Compatible with a variety of tools and systems, it offers a secure fit, helping maintain peak operational efficiency in demanding industrial environments.In the physical world, tools can range from simple hand tools like hammers, screwdrivers, and wrenches to complex power tools such as drills, grinders, and CNC machines..

                     </p>
                </div>

                <div className="description-image">
                    <img src={productImages[0]} alt="detail" />
                </div>
            </section>

            {/* Related */}
            <section className="related-products">
                <h2>You might also like</h2>
                <div className="related-grid">
                    {Array(10)
                        .fill(0)
                        .map((_, i) => (
                            <Productcard key={i} />
                        ))}
                </div>
            </section>

            <Discount />
        </div>
    );
}
