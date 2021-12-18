import React from 'react'
import sorry from "../../Images/sorry.jpg"
import {FaQuestionCircle} from "react-icons/fa" 
import {NavLink} from "react-router-dom" 

const Sorry = () => {
    return (
            <>
          <div className='container'>
                <div className='main'>
                    <div className='android_logo'>
                        <img src={sorry} alt='android'/>
                    </div>
                    <div className='content'>
                        <h4 className='blue'><FaQuestionCircle className='icon'/>   Sorry for the inconvenience! At this stage, you should visit an Google store to get your issue resolved. 
                                                                                    <br/>You can find the location closest to you on the Google Store Locator</h4>

                    <div className='buttons'>
                            <NavLink to="/"><button className='repeat'>Start over</button></NavLink>
                        </div>
                        <NavLink to="/userInfo"><p>Cick here to view the stored user infos</p></NavLink>
                    </div>
                </div>
            </div>

            
            </>
    )
}

export default Sorry