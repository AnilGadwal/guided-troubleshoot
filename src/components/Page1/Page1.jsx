import React from 'react'
import {NavLink} from "react-router-dom"
import settings from "../../Images/settings.jpg"
import {FaQuestionCircle} from "react-icons/fa"    
import "../../App.css"


const Page1 = () => {
    return (
            <>
            <div className='container'>

            <div className='logo'>
            <h1>Trouble<span className='oo'>shoot</span></h1>
            </div>
            
                <div className='main'>
                    
                    <div className='android_logo'>
                        <img src={settings} alt='android'/>
                    </div>
                    <div className='content'>
                        <h2>Fix an installed Android app that isn't working</h2>
                        <p>Android Troubleshooting</p>
                        <h4>Try the following steps if an app installed on your phone has any of these problems:</h4>
                        <h4>
                        <ul>
                            <li>Crashing</li>
                            <li>Won't Open</li>
                            <li>Won't Respond</li>
                            <li>Isn't working properly</li>
                        </ul>
                        </h4>

                        <h4>Note: Some of these steps work only on Android 8.1 and up. <a href="https://support.google.com/android/answer/7680439">Learn how to check your Android version</a></h4>
                        <h4 className='blue'><FaQuestionCircle className='icon'/> Is your Android phone responding to actions?</h4>

                    <div className='buttons'>
                            <NavLink to="/two"><button className='Yes'>Yes</button></NavLink>
                            <NavLink to="/failed1"><button className='No'>No</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Page1
