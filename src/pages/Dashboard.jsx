import React from 'react'
import { History, TextInput, UrlInput } from '../components'

function Dashboard() {
  return (
    <>
        <section className='px-3'>
            <div className='bg-blue-00 sm:flex sm:flex-wrap sm:mt-10 sm:mb-20'>
                <div className='bg-red-00 sm:flex sm:flex-wrap sm:basis-[50%]'>
                    <UrlInput/>
                    <TextInput/>
                </div>
                <div className='bg-fuchsia-00 sm:flex sm:flex-wrap sm:basis-[50%]'>
                    <History/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Dashboard