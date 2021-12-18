import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"
import mail from "../../Images/message.jpg"   
import "../../App.css"
import {FaArrowCircleLeft} from "react-icons/fa"

const getDataFromLocal = () => {
    const data = localStorage.getItem('users')
    if(data){
        return JSON.parse(data)
    }
    else{
        return[]
    }
}

const FailedPage2 = () => {

    const [users, setUsers] = useState(getDataFromLocal());

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handle = (e) => {
        e.preventDefault();
        let user = {
            name: name,
            email: email,
            message: message
        }

        setUsers([...users, user]);
        setName('');
        setEmail('');
        setMessage('');
        window.location.href="/sorry";
     };

     useEffect(() => {
         localStorage.setItem('users', JSON.stringify(users));
     },[users])

    return (
            <>
            <div className='container'>
                <div className='main'>
                    <div className='android_logo'>
                        <img src={mail} alt='android'/>
                    </div>
                    <div className='content'>
                    <NavLink to="/three"><FaArrowCircleLeft/></NavLink>
                        <h2>Let us know more about your issue</h2>

                        
                        <form>
                            <h5 className='inputs'> 
                            
                            <label>Name:<span className='red'>*</span></label>
                            <input type="text" value={name} 
                            onChange={(e) => setName(e.target.value)} requied/>

                            <label>Email:<span className='red'>*</span></label>
                            <input type="email" value={email} 
                            onChange={(e) => setEmail(e.target.value)}/>

                            <label>Explain your issue: <span className='red'>*</span></label>
                            <input type="text" value={message} 
                            onChange={(e) => setMessage(e.target.value)}></input>    
                        </h5>
                        <div className='buttons'>
                         <NavLink to="/sorry"><button className='Yes' onClick={handle} disabled={!message || !name || !email}>Submit</button></NavLink>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            </>
    )
}

export default FailedPage2
