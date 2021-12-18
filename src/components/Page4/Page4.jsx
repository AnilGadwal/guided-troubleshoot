import React from 'react'
import done from "../../Images/done.jpg"
import {FaQuestionCircle, FaRedo} from "react-icons/fa" 
import {NavLink} from "react-router-dom" 

const Page4 = () => {
    return (
            <>
           <div className='container'>
                <div className='main'>
                    <div className='android_logo'>
                        <img src={done} alt='done'/>
                    </div>
                    <div className='content'>
                        <h4 className='blue'><FaQuestionCircle className='icon'/> Glad we were able to walk you through updating your app</h4>

                        <div className='buttons'>
                    <NavLink to="/"><button className='repeat'>Repeat? <FaRedo className='redo'/></button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Page4
