import React from 'react'
import './scholarships.css'
import GoToTop from './GoToTop'
import { Link } from 'react-router-dom'

const Scholarships = () => {
    return (
        <>
            <section className="scholarships_page">
                <div className="scholarship_landing">
                    <div className="scholarship_landing_left_container">
                        <p className="scholarship_landing_title">Find The Best Scholarship Information With Us</p>
                        <p className="scholarship_landing_subtitle">
                            Get the latest scholarship information from the university and the government.
                        </p>
                    </div>
                    <div className="scholarship_landing_right_container">
                        <img src="images/scholarship_landing.png" alt="scholarship" />
                    </div>

                </div>

                <div className="scholarship_list">
                    

                    <div className="scholarship_card">
                        <div className="scholarship_card_left_container">
                            <img src="images/scholarship_icon.png" alt="scholar" className="scholarship_card_icon" />
                        </div>

                        <div className="scholarship_card_right_container">
                            <p className="scholarship_title">
                                Sports Quota
                            </p>

                            <p className="scholarship_subtitle">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorem nemo reiciendis corrupti... 
                            </p>

                            <p className="scholarship_type">
                                Table Tennis
                            </p>


                        </div>

                        <div className="scholarship_card_right_container2">
                            <div className="scholarship_percentage">
                                <p>10%</p>
                            </div>
                            <Link to={"/scholarship"}>
                            <button className="scholarship_info">
                                More Info
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <GoToTop/>
        </>
    )
}

export default Scholarships