import React from 'react'
import {NavLink} from "react-router-dom"
import update from "../../Images/update.jpg"
import {FaQuestionCircle, FaArrowCircleLeft} from "react-icons/fa"    
import "../../App.css"

const Page2 = () => {
    return (
            <>
            <div className='container'>
                <div className='main'>
                    <div className='android_logo'>
                        <img src={update} alt='android'/>
                    </div>
                    <div className='content'>
                    <NavLink to="/"><FaArrowCircleLeft/></NavLink>
                        <h2>Check for Android updates</h2>
                        <h4>
                        <ul>
                            <li>Open your phone's Settings app.</li>
                            <li>Near the bottom, tap System and then Advanced and then System update.</li>
                            <li>Depending on your phone, you might need to tap About phone or About tablet and then Software update</li>
                            <li>You'll find your update status. Follow any steps on the screen.</li>
                        </ul>
                        </h4>
                        <h4 className='blue'><FaQuestionCircle className='icon'/>  Press "Continue" when your phone is updated</h4>

                        <div className='buttons'>
                            <NavLink to="/three"><button className='Yes'>Continue</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Page2
