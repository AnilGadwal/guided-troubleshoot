import React from 'react'
import {NavLink} from "react-router-dom"
import app from "../../Images/app.jpg"
import playstore from "../../Images/playstore.png"
import bars from "../../Images/3bars.png"
import arrow from "../../Images/arrow.png"
import {FaQuestionCircle,FaArrowCircleLeft} from "react-icons/fa"    
import "../../App.css"

const Page3 = () => {
    return (
            <>
            <div className='container'>
                <div className='main'>
                    <div className='android_logo'>
                        <img src={app} alt='android'/>
                    </div>
                    <div className='content'>
                    <NavLink to="/two"><FaArrowCircleLeft/></NavLink>
                        <h2>Update the apps</h2>
                        <h4>
                        <ol>
                            <li>On your phone, open the Google Play Store app <img style={{verticalAlign:"middle", width:"20px"}} src={playstore} alt="playstore"/></li>
                            <li>Tap Menu <img style={{verticalAlign:"middle", width:"20px"}} src={bars} alt="bars"/> <img style={{verticalAlign:"middle", width:"20px"}} classname="small" src={arrow} alt="arrow"/><span className="bold">My apps & games.</span></li>
                            <li>Apps with available updates are labeled "Update."</li>
                            If an update is available, tap Update. <br/> 
                            If more updates are available, tap Update all.

                        </ol>
                        </h4>
                        <h4 className='blue'><FaQuestionCircle className='icon'/>  Were you able to update the app?</h4>

                    <div className='buttons'>
                    <NavLink to="/four"><button className='Yes'>Yes</button></NavLink>
                    <NavLink to="/failed2"><button className='No'>No</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Page3
