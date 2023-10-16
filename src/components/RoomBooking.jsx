import React from 'react'
import './roomBooking.css'
import GoToTop from './GoToTop'

const Service = () => {
    return (
        <>
            <section className="service_page">
                <div className="service_landing">
                    <div className="black_overlay">
                        <p>Remember, teamwork begins by building trust</p>
                    </div>
                </div>

                <div className="service_sort">
                    <select className='date' >
                        <option value="null" >Choose Date</option>
                        <option value="211023">21 Oct 2023</option>
                        <option value="221023">22 Oct 2023</option>
                        <option value="231023">23 Oct 2023</option>
                        <option value="241023">24 Oct 2023</option>
                        <option value="251023">25 Oct 2023</option>
                    </select>

                    <select className='time'>
                        <option value="null">Choose Time</option>
                        <option value="0709">7:00 - 9:00</option>
                        <option value="0911">9:00 - 11:00</option>
                        <option value="1113">11:00 - 13:00</option>
                        <option value="1315">13:00 - 15:00</option>
                        <option value="1517">15:00 - 17:00</option>
                        <option value="1719">17:00 - 19:00</option>
                        <option value="1921">19:00 - 21:00</option>
                        
                    </select>
                    <button className="check_availability">
                        Check Availability
                    </button>
                </div>
                    

                <div className="service_cards">
                    <div className="inner_service_cards">

                        <div className="service_card">
                            <img src="images/study_room_1.jpg" alt="" />
                            <div className="room_data">
                                <p className="floor_num">Level: 1</p>
                                <p className="room_num">Group Study 1</p>
                                <p className="room_info">Students can book a study room for up to two hours a day. Bookings can be made up to two weeks in advance.Please comply with guidelines.</p>
                                <p className="room_size">Max Capacity: 8 ppl</p>

                                <button className="room_book room_available">
                                    Book Now
                                </button>
                            </div>
                        </div>

                        <div className="service_card">
                            <img src="images/study_room_1.jpg" alt="" />
                            <div className="room_data">
                                <p className="floor_num">Level: 2</p>
                                <p className="room_num">Group Study 2</p>
                                <p className="room_info">Students can book a study room for up to two hours a day. Bookings can be made up to two weeks in advance.Please comply with guidelines.</p>
                                <p className="room_size">Max Capacity: 8 ppl</p>

                                <button className="room_book room_available">
                                    Book Now
                                </button>
                            </div>
                        </div>

                        <div className="service_card">
                            <img src="images/study_room_1.jpg" alt="" />
                            <div className="room_data">
                                <p className="floor_num">Level: 1</p>
                                <p className="room_num">Group Study 3</p>
                                <p className="room_info">Students can book a study room for up to two hours a day. Bookings can be made up to two weeks in advance.Please comply with guidelines.</p>
                                <p className="room_size">Max Capacity: 8 ppl</p>

                                <button className="room_book room_booked">
                                    Booked
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <GoToTop/>
        </>
    )
}

export default Service