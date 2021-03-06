import React, { useEffect, useState } from 'react'
import ResponseNavbar from '../../ResponseNavbar/ResponseNavbar'
import './Profile.css'
import LocalStorage from '../../../services/localStorageService'
import jwtDecode from 'jwt-decode'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import {
    setUser, getUser
} from '../../../features/user/userSlice'
import { useHistory } from 'react-router-dom'
function Profile() {
    //     email: "naruotoman726@gmail.com"
    // exp: 1608219567
    // iat: 1608215967
    // id: 6
    // name: "uza1"
    const dispatch = useDispatch();
    const [dataProfile, setDataProfile] = useState({
        name: '',
        id: 0,
        email: '',
        role: ''
    })
    let history = useHistory();
    useEffect(() => {
        const token = LocalStorage.getToken()
        if (token) {
            const { name, id, email, role } = jwtDecode(token)
            setDataProfile({
                name, id, email, role
            })
            console.log("userss", dataProfile);
        } else {
            history.push('/home')
        }

    }, [])
    const handleClick = () => {
        window.location.reload();
        LocalStorage.removeToken()
        dispatch(setUser('guest'))
    }
    return (
        <div className='profile'>
            <ResponseNavbar />
            <div className='profile__content'>
                <h1>ข้อมูลโปรไฟล</h1>
                <div className='profile__detail'>
                    <div className='name'>
                        <h3>ชื่อ :</h3><p>{dataProfile.name}</p>
                    </div>

                    <div className='email'>
                        <h3>อีเมล :</h3><p>{dataProfile.email}</p>

                    </div>
                    <div className='id'>
                        <h3>ไอดี :</h3><p>{dataProfile.id}</p>

                    </div>
                    <div className='role'>
                        <h3>สิทธิ :</h3><p>{dataProfile.role == 'addmin' ? dataProfile.role : 'guest'}</p>
                    </div>
                </div>
                <Button onClick={() => handleClick()} className='cancelButton' type="primary" size={'small'}>  ออกจากระบบ</Button>
            </div>

        </div>
    )
}

export default Profile
