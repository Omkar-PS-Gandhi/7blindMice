import React from 'react'
import './scholarships.css'
import GoToTop from './GoToTop'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Scholarships = () => {
    const[name, setName] =useState('')
    const[amount, setAmount] =useState('')
    const[image, setImage] =useState('')
    const[studyArea, setStudyArea] =useState('')
    const[courseType, setCourseType] =useState('')
    const[description, setDescription] =useState('')
    const[deadline, setDeadline] =useState('')
    const[tandC, setTandC] =useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("blah blah submitted!!!!!!")
        axios.get('https://uni-service-6760167bae31.herokuapp.com/auth/login/')
        .then((res)=>{
            alert('successful')
            console.log(res.data)

            setName(res.data.name)
            setAmount(res.data.amount)
            setImage(res.data.img)
            setStudyArea(res.data.studyArea)
            setCourseType(res.data.courseType)
            setDescription(res.data.description)
            setDeadline(res.data.deadline)
            setTandC(res.data.tandC)

        }).catch((err)=>{
            console.log(err.response)
            alert(err.response.data.error.message)
        })
    }
    return (
        <>
        <Menu/>
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
                            <img src={image ? image : "images/scholarship_icon.png"} alt="scholar" className="scholarship_card_icon" />
                        </div>

                        <div className="scholarship_card_right_container">
                            <p className="scholarship_title">
                                {name ? name: 'Sports Quota'}
                            </p>

                            <p className="scholarship_subtitle">
                                {description ? description : "blah blah"} 
                            </p>

                            <p className="scholarship_type">
                                {studyArea ? studyArea : 'Table Tennis'}
                            </p>


                        </div>

                        <div className="scholarship_card_right_container2">
                            <div className="scholarship_percentage">
                                <p>{amount ? amount : '10%'}</p>
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