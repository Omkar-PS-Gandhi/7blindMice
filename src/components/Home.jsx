import React from 'react'

import "./home.css"

const Home = () => {
    return (
        <>
            <section className="home_page">
                <div className="landing_img">
                    <div className="black_lay_over">

                        <div className="landing_content">
                            <h1>All University Services, One Click Away.</h1>
                        </div>
                    </div>
                </div>

                <div className="cards_section">
                    <div className="cards_title_and_img">
                        <div className="cards_title">
                            <h1>Be active at no cost</h1>
                            <div className="card_sub_text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quisquam est laborum cupiditate voluptatibus accusantium facere ab tenetur veniam sit? Hic asperiores illo odit, qui dignissimos beatae ex dolorem veniam!
                            </div>
                        </div>
                        <div className="cards_img">
                            <img src="images/group-art.jpg" alt="" />
                        </div>
                    </div>

                    <div className="cards">
                        <div className="outer_card_layer card1">
                            <div className="info_button">
                                <p>Study Room Service</p>
                                <img src="/svg/arrow.svg" alt="" />
                            </div>
                        </div>

                        <div className="outer_card_layer card2">
                            <div className="info_button">
                                <p>Events & Activities</p>
                                <img src="/svg/arrow.svg" alt="" />
                            </div>
                        </div>

                        <div className="outer_card_layer card3">
                            <div className="info_button">
                                <p>Scholarships</p>
                                <img src="/svg/arrow.svg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </section>



        </>
    )
}

export default Home