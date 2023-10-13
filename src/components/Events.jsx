import React from 'react'
import "./event.css"


const Events = () => {
    return (
        <>
            <section className="event_page">
                <div className="event_landing">
                    <div className="event_landing_img">
                        <div className="image_black_layover">
                            <div className="left_angle">
                                <div className="left_angle_border">
                                    <div className="left_angle_text">
                                        <p>
                                            Join Us For An Unforgettable Event Experience!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="event_list">
                    <div className="event">
                        <div className="event_img_layover">
                            <p className='event_title'>Disco Night</p>
                            <p className="event_discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vero totam natus eaque ea blanditiis tenetur molestiae aspernatur eligendi.</p>

                            <div className="event_details">
                                <div className="event_date">
                                    <p className='event_day'>21</p>
                                    <p className='event_month'>November</p>
                                </div>

                                <div className="event_details_right_container">
                                    <div className="event_location">
                                        <img src="svg/location.svg" alt="" />
                                        <p>269 Clinton Ave, Brooklyn, NY</p>

                                    </div>
                                    <div className="event_timings">
                                        {/* <input type="text" className="user_name" placeholder='Student ID' />

                                        <input type="text" className="user_name" placeholder='Phone' /> */}

                                        <img src="svg/event_time.svg" alt="" />
                                        <p>17:00 - 19:00 Hrs</p>
                                    </div>

                                    <button className="event_register">
                                        Register
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Events