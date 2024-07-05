import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import LogoutBtn from './LogoutBtn'
import { Logo } from '../components'



function Header() {
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate();
  

    const navItems = [
        {
            name : 'Home',
            slug: "/",
            active : true
        },
        {
            name : 'About',
            slug: '/',
            active: true
        },
        {
            name: 'Signup',
            slug:'/signup',
            active: !authStatus
        },
        {
            name: 'Login',
            slug : "/login",
            active : !authStatus,
        }

    ]


  return (
    <header className='flex flex-wrap w-screen font-mono'>
        <nav className='bg-teal-800 flex flex-wrap flex-row w-full text-teal-50 rounded-b-3xl'>
            <div className='flex basis-[20%] justify-start items-center px-2 subpixel-antialiased'>
                <Logo width={'28'} height={'40'} className={'fill-gray-100'}/>
            </div>
            <ul className='flex basis-[80%] justify-around items-center py-2 text-lg  subpixel-antialiased'>
                {navItems.map((item)=> item.active ? (
                    <li key={item.name}>
                        <button
                        className='hover:bg-teal-700 px-2 py-1 rounded-xl
                        sm:px-4 sm:text-xl '
                        onClick={()=> navigate(item.slug)}>
                            {item.name}
                        </button>
                    </li>
                ) : null
                )}
                {authStatus && (
                    <li>
                        <LogoutBtn/>
                    </li>
                )}
            </ul>
        </nav>
    </header>
  )
}

export default Header