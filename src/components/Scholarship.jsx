import React from 'react'
import './scholarship.css'
import GoToTop from './GoToTop'
import { Link } from 'react-router-dom'

const Scholarship = () => {
    return (
        <>
            <section className="scholarship_page">
                <div className="go_back">
                    <Link to={"/scholarships"}>
                        <div className="go_back_circle"><img src="svg/go_back.svg" alt="" /></div>
                    </Link></div>

                <div className="scholarship_headings">
                    <p className="scholarship_info_title">
                        Sports Quota
                    </p>
                    <p className="scholarship_info_subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloremque ullam pariatur distinctio, et commodi!
                    </p>
                </div>


                <div className="scholarship_inner_container2">
                    <img src="images/scholarship.jpg" alt="" />
                    <div className="scholarship_data_container">
                        <div className="scholarship_key_points">
                            <img src="svg/check.svg" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, error.</p>
                        </div>
                        <div className="scholarship_key_points">
                            <img src="svg/check.svg" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, error.</p>
                        </div>
                        <div className="scholarship_key_points">
                            <img src="svg/check.svg" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, error.</p>
                        </div>
                        <div className="scholarship_key_points">
                            <img src="svg/check.svg" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, error.</p>
                        </div>
                        <span>
                            Claim Now!
                        </span>
                    </div>
                </div>

            </section>

            <GoToTop />
        </>
    )
}

export default Scholarship

// FFDEAD