import React from 'react'
import './register.css'

const register = () => {
    
    return (

        
        <>
            <section className="register_main">
                <div className="register_left_container">
                    <img src="images/group-art.jpg" alt="" />
                </div>

                <div className="register_right_container">
                    <div className="inner_container">
                        <img src="images/logo.png" alt="logo" />

                        <h1>Be one of us!</h1>
                        <h2>Please enter your details</h2>
                        <div className="textfields">
                            <input type="text" placeholder='Student Id' />
                            <input type="email" placeholder='Email' />
                            <input type='password' placeholder='Password' />
                            <div className="phone_name_input">
                            <input type='phone' placeholder='Name' />
                            {/* <input type='phone' placeholder='Phone' /> */}
                            </div>
                        </div>


                        <button className="register_btn">Sign Up</button>

                        <h3 className="create-acc-link">Already a member! <a href="/login">Sign in</a></h3>

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default register