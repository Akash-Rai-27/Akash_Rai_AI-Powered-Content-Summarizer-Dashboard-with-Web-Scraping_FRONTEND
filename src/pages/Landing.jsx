import React from 'react'
import Logo from '../assets/undraw_building_blocks_re_5ahy.svg'
import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate();
  return (
    <main className='bg-red-00'>
        <div className='h-screen bg-lime-00 font-mono'>
            <div className='flex flex-wrap justify-center w-full text-5xl py-4 text-teal-800 '>
                <h2 className='underline decoration-lime-500 underline-offset-8' >Welcome,</h2>
            </div>

            <div className='flex flex-wrap bg-yellow-00 sm:h-[70%] '>
                <div className='flex flex-wrap justify-center w-full bg-green-00 order-2 px-2 sm:order-1 sm:basis-[40%] sm:flex-col sm:justify-evenly'>
                    <div className='text-3xl text-center px-1 py-3 text-teal-800 font-bold'>
                        <h1 className=''>AI-Powered Content Summarizer</h1>
                        <h1>+</h1>
                        <h1>Web Scraping Feature</h1>
                    </div>
                    <div className='text-center px-3 py-1 bg-lime-400 text-teal-900 rounded-3xl sm:py-8'>
                        <p>Allows users to input long-form text content or scrape content from web pages and receive AI-generated summaries
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap w-full sm:h-full justify-center  px-3 py-5 order-1 sm:order-2 sm:basis-[60%] bg-red-00'>
                   <img className='sm:h-full  ' src={Logo}/>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center py-3 gap-4 sm:justify-start sm:px-7'>
                <button className='bg-teal-700 rounded-md px-2 py-3 text-gray-50 sm:py-4 sm:px-4 hover:bg-teal-600' onClick={()=>navigate('/signup')}>Create Account</button>
                <button className='rounded-md border-teal-800 border-x-2 border-y-2 px-2 py-2 sm:px-4 sm:py-4 hover:bg-teal-100' onClick={()=>navigate('/')}>Learn More</button>
            </div>
        </div>
    </main>
  )
}

export default Landing