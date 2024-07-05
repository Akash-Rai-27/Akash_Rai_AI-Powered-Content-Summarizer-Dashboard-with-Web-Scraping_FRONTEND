import React from 'react'
import { Download, Generated, Original } from '../components'
import { useSelector } from 'react-redux';

function SummaryPage() {
  const content = JSON.stringify(useSelector((state)=>state.auth.content));
  return (
    <section>
      <div className='sm:flex sm:flex-wrap sm:w-full'>
        <div className='sm:basis-[50%] '>
          <Original title={'Original Text'}/>
        </div>
        <div className='sm:basis-[50%]'>
          <Generated textContent={content}/>
        </div>
        
      </div>
    </section>
  )
}

export default SummaryPage