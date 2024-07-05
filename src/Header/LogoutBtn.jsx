import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth.js'
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
                .then(()=>{
                    dispatch(logout())
                }).then(()=>navigate('/'))
        

    }
  return (
    <button
    className='hover:bg-teal-700  px-4 py-1 rounded-xl'
    onClick={logoutHandler}
    >
        Logout
    </button>
  )
}

export default LogoutBtn