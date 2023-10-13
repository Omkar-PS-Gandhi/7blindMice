import React from 'react'
import './footer.css'

const footer = () => {
    return (
        <>
            <section className="footer_page">
                <div className="footer_row1">

                    <div className="footer_col col1">
                        <img src="images/logo.png" alt="" className="footer_logo" />
                    </div>

                    <div className="footer_col col2">
                        <p className="link_heading">Quick links</p>
                        <div className="links">
                            <p className="quick_links">Room booking</p>
                            <p className="quick_links">Events</p>
                            <p className="quick_links">Scholarships</p>
                        </div>
                    </div>

                    <div className="footer_col col3">
                        <p className="link_heading">Get in touch</p>
                        <div className="links">
                            <p className="quick_links">Contact</p>
                            <p className="quick_links">Faq</p>
                        </div>
                    </div>
                </div>

                <div className="footer_row2">
                <hr />
                <p>&copy; 2023 | Designed and Developed by <a href='/'>7BlindMice</a> </p>
                </div>

            </section>
        </>
    )
}

export default footer