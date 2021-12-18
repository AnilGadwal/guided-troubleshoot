import React,{useState} from 'react'
import {NavLink} from "react-router-dom"  
import "../../App.css"

const getDataFromLocal = () => {
    const data = localStorage.getItem('users')
    if(data){
        return JSON.parse(data)
    }
    else{
        return[]
    }
}

 let userList = getDataFromLocal();

 const UserInfo = () => {

    return (
        <>
        <div className='container'>
            <div className='main'>
                <div className='content'>
                    <h2>Stored User Information</h2>

                    <h4>
                        <div className='table'>
                        <table>
                            <tbody>
                            <tr >
                                <th>Name:</th>
                                <th>Email:</th>
                                <th>Message:</th>
                            </tr>

                                {userList.map(user=>(
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.message}</td>
                                    </tr>
                                ))} 
                                </tbody>
                        </table>
                        </div>
                   </h4>

                <div className='buttons'>
                        <NavLink to="/"><button className='Yes'>Home</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserInfo
