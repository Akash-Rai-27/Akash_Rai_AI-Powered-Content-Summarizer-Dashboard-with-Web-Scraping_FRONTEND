import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Original({title}) {
    const dispatch = useDispatch();
    const content = JSON.stringify(useSelector((state)=>state.auth.content));
    const[value, setValue] = useState();
    

    const handle = (e)=>{
       setValue(e.target.value)
    }

    useEffect(()=>{
        setValue(content? content :'')
        // console.log(JSON.stringify(content))
    },[content])
  return (
    <section >
        <div className='px-2 py-4 flex flex-wrap w-full font-mono'>
            <div className='py-2 px-2 text-2xl text-emerald-700 font-bold'><h1>{title}</h1></div>
            <textarea
            rows="10" cols="80"
            
            value={value || content}
            readOnly
            className='border-teal-700 border-x-2 border-y-2 shadow-lg 
                    rounded-lg w-full px-4 py-1 mb-2 h-96
                    sm:bg-teal-700
                    '
            >

            </textarea>
        </div>
    </section>
  )
}

export default Original