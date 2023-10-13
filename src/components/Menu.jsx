import React from 'react'
import "./home.css"


const Menu = () => {
    return (
        <>
            <div className="menu_bar">
                <img src="images/logo.png" alt="logo" />
                <div className="menu_tabs">
                    <p></p>
                    <p>Contact</p>
                    <p>FAQ</p>

                    <div className="user">
                        <img src="svg/user_icon.svg" alt="" />
                        <p>Omkar</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Menu