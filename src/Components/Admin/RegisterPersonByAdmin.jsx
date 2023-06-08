import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../PageComponents/Header';
import { validateEmail, validatePassword, validatePhone, checkPasswordMatch } from '../User/Registration';

export default function RegisterPersonByAdmin(){
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <Header/>       
            </div>
            <h1>Register New Person</h1>
            <p>As an administrator, here you can register any type of user: standard users, premium users, colleagues and other admins.</p>
            <button onClick={() => navigate("/admin/registeruser")}>Add new user</button>
            <button onClick={() => navigate("/admin/registercolleague")}>Add new colleague</button>
            <button onClick={() => navigate("/admin/registeradmin")}>Add new admin</button>
        </div>
    )
}