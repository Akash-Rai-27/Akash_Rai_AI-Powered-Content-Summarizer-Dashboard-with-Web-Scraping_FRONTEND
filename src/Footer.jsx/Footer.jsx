import React from 'react'
import { Logo } from '../components'

function Footer() {
  return (
    <footer>
        <div className='bg-teal-900 h-auto w-screen font-mono py-1 '>

            <div className='flex flex-wrap bg-lime-00 flex-col h-full px-2 gap-1 
            
            sm:flex-row sm:justify-evenly sm:min-h-52
            

            '>

                <div className='bg-red-00 hidden sm:flex
                justify-center w-full items-center

                sm:basis-[30%]
                
                '>
                    <Logo className={'fill-gray-200'}/> 
                </div>

                <div className='bg-orange-00 flex flex-wrap flex-row w-full justify-center self-center h-full py-1
                
                sm:basis-[30%]
                sm:gap-3
                

                '>
                    <h2 className='w-full text-center text-teal-50
                    text-2xl py-1
                    sm:text-4xl 
                    '>Support</h2>
                    <ul className='italic py-[2px] sm:text-xl text-gray-200'>
                        <li>Account</li>
                        <li>Help</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                <div className='bg-fuchsia-00 flex flex-wrap flex-row w-full justify-center self-center h-full py-1 


                sm:basis-[30%]
                sm:gap-3
                '>
                    <h2 className='w-full text-center text-2xl
                    py-1 sm:text-4xl text-teal-50
                    '>Legals</h2>
                    <ul className='italic py-[2px] sm:text-xl text-gray-200'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Licensing</li>
                    </ul>
                </div>

            </div>

            <div className='bg-pink-00 flex flex-wrap flex-row w-full justify-center py-1 sm:text-xl text-teal-50'>
                    <p className=''> &copy; Copyright 2024</p>
                </div>

        </div>
    </footer>
  )
}

export default Footer