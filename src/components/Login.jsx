import React from 'react'
import './login.css'

const login = () => {
    
    return (

        
        <>
            <section className="login_main">
                <div className="login_left_container">
                    <img src="images/group-art.jpg" alt="" />
                </div>

                <div className="login_right_container">
                    <div className="inner_container">
                        <img src="images/logo.png" alt="logo" />

                        <h1>Welcome Back</h1>
                        <h2>Please enter your details</h2>
                        <div className="textfields">
                            <input type="text" placeholder='Username' />
                            <input type='password' placeholder='Password' />
                        </div>
                        <h5 className="forgot_pwd">Forgot Password?</h5>

                        <button className="login_btn">Sign in</button>

                        <h3 className="create-acc-link">Wanna be one of our members! <a href="/register">Sign up</a></h3>

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default login