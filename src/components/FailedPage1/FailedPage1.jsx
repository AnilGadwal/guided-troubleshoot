import React from 'react'
import restart from "../../Images/restart.jpg"
import {FaQuestionCircle, FaArrowCircleLeft} from "react-icons/fa" 
import {NavLink} from "react-router-dom" 

const FailedPage1 = () => {
    return (
            <>
          <div className='container'>
                <div className='main'>
                    <div className='android_logo'>
                        <img className='restart' src={restart} alt='android'/>
                    </div>
                    <div className='content'>
                    <NavLink to="/"><FaArrowCircleLeft/></NavLink>
                        <h2>Restart your phone</h2>
                        <h4>Important: Settings can vary by phone. For more info, <a href="https://support.google.com/android/answer/3094742" target="_blank">contact your device manufacturer</a></h4>
                        <h4>
                        <ol>
                            <li>On most phones, press your phone's Power button for about 30 seconds or until your phone restarts. </li>
                            <li>You might need to tap Restart</li>
                        </ol>
                        </h4>
                        <h4 className='blue'><FaQuestionCircle className='icon'/>  Press "Continue" once you have restarted your phone</h4>

                    <div className='buttons'>
                            <NavLink to="/"><button className='Yes'>Continue</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default FailedPage1
