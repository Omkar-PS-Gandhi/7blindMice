import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import "./event.css"
import GoToTop from './GoToTop'
import Menu from './Menu'


const Events = () => {

    const[name, setName] =useState('')
    const[description, setDescription] =useState('')
    const[image, setImage] =useState('')
    const[location, setLocation] =useState('')
    const[date, setDate] =useState('')
    const[time, setTime] =useState('')

    const handleSubmit = () =>{
        // e.preventDefault()
        console.log("blah blah submitted!!!!!!")
        axios.get('https://uni-service-6760167bae31.herokuapp.com/events/events-list/', {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token')             }
           })
        .then((res)=>{
            alert('successful')
            console.log(res.data)

            for(var i=0; i<res.data.length; i++){
                setName(res.data[i].name)
                setDescription(res.data[i].description)
                setImage(res.data[i].img)
                setLocation(res.data[i].location)
                setDate(res.data[i].date)
                setTime(res.data[i].time)

            }

        }).catch((err)=>{
            console.log(err.response)
            alert(err.response.data.error.message)
        })
    }

    useEffect(() => {
        // e.preventDefault()
        handleSubmit()
      }, []);

    return (
        <>
        <Menu/>
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
                            <p className='event_title'>{name ? name : 'Disco Night'}</p>
                            <p className="event_discription">{description ? description : "blah blah"}</p>

                            <div className="event_details">
                                <div className="event_date">
                                    <p className='event_day'>{date ? date : '21'}</p>
                                    <p className='event_month'>{date ? date : 'November'}</p>
                                </div>

                                <div className="event_details_right_container">
                                    <div className="event_location">
                                        <img src="svg/location.svg" alt="" />
                                        <p>{location ? location : '269 Clinton Ave, Brooklyn, NY'}</p>

                                    </div>
                                    <div className="event_timings">
                                        {/* <input type="text" className="user_name" placeholder='Student ID' />

                                        <input type="text" className="user_name" placeholder='Phone' /> */}

                                        <img src={image ? image : "svg/event_time.svg"} alt="" />
                                        <p>{time ? time : '17:00 - 19:00 Hrs'}</p>
                                    </div>

                                    <button  className="event_register">
                                        Register
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <GoToTop/>
            </section>
        </>
    )
}

export default Events