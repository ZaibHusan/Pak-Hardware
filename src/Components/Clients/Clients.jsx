import React, { useState } from 'react'
import './Clients.css'
export default function Clients() {
    const [index, setIndex] = useState(0);
    const reviews = [
        {
            title: "Best Quality Hardware",
            description:
                "All tools were strong and durable. I bought electrical items and they worked perfectly. Very satisfied!",
            name: "Ahmed Khan",
            job: "Electrician",
            image: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            title: "Affordable & Reliable",
            description:
                "Prices are reasonable and the quality is much better than local shops. Highly recommended.",
            name: "Ali Raza",
            job: "Contractor",
            image: "https://randomuser.me/api/portraits/men/60.jpg"
        },
        {
            title: "Excellent Service",
            description:
                "Fast delivery and original hardware products. Customer support was also very helpful.",
            name: "Sara Malik",
            job: "Builder",
            image: "https://randomuser.me/api/portraits/women/35.jpg"
        }
    ];

    return (
        <div className="Clients">
            <div className="clients-container">
                <div className="clients-left">
                    <img src="https://prestashop.codezeel.com/PRS23/PRS230555/default/img/cms/testimonal-img.jpg" alt="" />
                </div>

                <div className="clients-right">
                    <h1>What our Client Says</h1>
                    <span className="material-symbols-outlined">
                        format_quote
                    </span>

                    <div className="clients-right-container">
                        {
                            <div className="clients-right-box" >
                                <h3>{reviews[index].title}</h3>
                                <p className='client-decription'>{reviews[index].description}</p>
                                <div className="clients-right-box-user">
                                    <img src={reviews[index].image} alt="" />
                                    <div className="clients-right-box-user-details">
                                        <h4>{reviews[index].name}</h4>
                                        <p>{reviews[index].job}</p>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="changing-button">
                            {reviews.map((_, i) => (
                                <span
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`changing-button-dot ${i === index ? "active" : ""}`}
                                >
                                    <span className="material-symbols-outlined">
                                        radio_button_checked
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
